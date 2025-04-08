import {Tournament} from '@effects/badnet/tournament.types';
import dayjs from 'dayjs';
import {Filters, TOURNAMENT_DATE, useFilters} from '@providers/TournamentFiltersProvider';

const groupTournaments = (tournaments: Tournament[], filters: Filters) => {
	const groupedTournaments = tournaments.reduce((acc, event) => {
		const groupingKey: string = filters.sortMode == TOURNAMENT_DATE ? event.firstDay.toString() :
			dayjs.unix(event.openline).isAfter(dayjs()) ? event.openline.toString() : 'Tournois déjà ouverts';

		if (!acc[groupingKey]) {
			acc[groupingKey] = [];
		}

		acc[groupingKey].push(event);
		return acc;
	}, {} as Record<string, Tournament[]>);

	return Object.entries(groupedTournaments)
		.sort((a, b) => a[0].localeCompare(b[0]));
};

export const useGroupTournaments = (tournaments: Tournament[]) => {
	const { filters } = useFilters();
	return groupTournaments(tournaments, filters);
};
