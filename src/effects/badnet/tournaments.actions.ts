import {Filters, useFilters} from '@providers/TournamentFiltersProvider';
import {useInfiniteQuery} from '@tanstack/react-query';
import axios from 'axios';
import dayjs from 'dayjs';
import {BadnetTournament, Tournament} from '@effects/badnet/tournament.types.ts';

const pageLimit = 50;

export const useFetchTournaments = () => {
	const { filters } = useFilters();
	return useInfiniteQuery({
		getNextPageParam: (lastPage:Tournament[], _allPages, lastPageParam) => {
			if (lastPage.length === 0 || lastPage.length < pageLimit) {
				return undefined;
			}
			return lastPageParam + pageLimit;
		},
		initialPageParam: 0,
		queryFn: ({ pageParam }) => fetchTournaments(filters, pageParam),
		queryKey: [
			'FETCH_TOURNAMENTS',
			filters.search,
			filters.region,
			filters.ageCategories,
		],
		select: data => filterTournaments(data.pages.flatMap(page => page), filters),
	});
};

const fetchTournaments = async ({ search, region }: Filters, pageNumber: number): Promise<Tournament[]> => {
	const axiosResponse = await axios.get('https://api.badnet.org/api/search/events', {
		headers: {
			'x-badnet-origin': 'inscription-android',
			'x-badnet-token': 'fa78ec86c0f593fca186aee25036403f',
		},
		params: {
			iswithpast: false,
			ligue: region,
			limit: pageLimit,
			offset: pageNumber,
			type: '70',
			what: search,
		},
		transformResponse: mapToTournaments,
	});
	return axiosResponse.data;
};

const mapToTournaments = (data: string): Tournament[] => JSON.parse(data).events.map((event: BadnetTournament) => ({
	...event,
	ageCategories: event.catages.map(ageCategory => ageCategory.name),
	disciplines: event.disciplines.map(discipline => discipline.stamp),
	firstDay: event.firstday,
	lastDay: event.lastday,
	location: event.place.location,
	type: {
		id: event.type.id,
		isteam: event.type.isteam,
		name: event.type.name,
	},
}));

const filterTournaments = (tournaments: Tournament[], filters: Filters) => tournaments
	.filter(filterPastTournaments)
	.filter(tournament => filterOpenTournaments(tournament, filters))
	.filter(tournament => filterClosedTournaments(tournament, filters))
	.filter(filterByAgeCategory(filters));

const filterPastTournaments = (tournament: Tournament) => dayjs.unix(tournament.lastDay).isAfter(dayjs());
const filterOpenTournaments = (tournament: Tournament, { hideOpenedTournaments }: Filters) => hideOpenedTournaments ? dayjs.unix(tournament.openline).isAfter(dayjs()) : true;
const filterClosedTournaments = (tournament: Tournament, { hideClosedTournaments }: Filters) => hideClosedTournaments ? dayjs.unix(tournament.truedeadline).isAfter(dayjs()) : true;
const filterByAgeCategory = (filters: Filters) => (tournament: Tournament) => {
	if(filters.ageCategories.length === 0) {
		return true;
	}
	return filters.ageCategories.some(category => tournament.ageCategories.includes(category));
};
