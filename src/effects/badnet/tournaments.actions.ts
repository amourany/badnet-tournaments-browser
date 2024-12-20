import {useInfiniteQuery} from "@tanstack/react-query";
import axios from "axios";
import {BadnetTournament, Tournament} from "./tournament.types.ts";
import {Filters, useFilters} from "../../providers/TournamentFiltersProvider.tsx";
import dayjs from "dayjs";

const pageLimit = 50

export const useFetchTournaments = () => {
    const {filters} = useFilters()
    return useInfiniteQuery({
        queryFn: ({pageParam}) => fetchTournaments(filters, pageParam),
        queryKey: ['FETCH_TOURNAMENTS', filters.search, filters.region],
        getNextPageParam: (lastPage, _allPages, lastPageParam) => {
            if (lastPage.length === 0 || lastPage.length < pageLimit) {
                return undefined
            }
            return lastPageParam + pageLimit
        },
        initialPageParam: 0,
        select: data => filterTournaments(data.pages.flatMap(page => page), filters)
    })
}

const fetchTournaments = async ({search, region}: Filters, pageNumber: number): Promise<Tournament[]> => {
    console.log("useFetchTournaments")
    const axiosResponse = await axios.get('https://api.badnet.org/api/search/events', {
        headers: {
            'x-badnet-token': 'fa78ec86c0f593fca186aee25036403f',
            'x-badnet-origin': 'inscription-android',
        },
        params: {
            what: search,
            iswithpast: false,
            type: '70',
            ligue: region,
            offset: pageNumber,
            limit: pageLimit,
        },
        transformResponse: mapToTournaments,
    })
    return axiosResponse.data
}

const mapToTournaments = (data: string): Tournament[] => {
    return JSON.parse(data).events.map((event: BadnetTournament) => ({
        ...event,
        firstDay: event.firstday,
        lastDay: event.lastday,
        ageCategories: event.catages.map(ageCategory => ageCategory.name),
        disciplines: event.disciplines.map(discipline => discipline.stamp),
        location: event.place.location,
        type: {
            id: event.type.id,
            isteam: event.type.isteam,
            name: event.type.name,
        },
    }))
}

const filterTournaments = (tournaments: Tournament[], filters: Filters) => {
    return tournaments
        .filter(filterPastTournaments)
        .filter(tournament => filterOpenTournaments(tournament, filters))
        .filter(tournament => filterClosedTournaments(tournament, filters))
}

const filterPastTournaments = (tournament: Tournament) => dayjs.unix(tournament.lastDay).isAfter(dayjs())
const filterOpenTournaments = (tournament: Tournament, {hideOpenedTournaments}: Filters) => hideOpenedTournaments ? dayjs.unix(tournament.openline).isAfter(dayjs()) : true
const filterClosedTournaments = (tournament: Tournament, {hideClosedTournaments}: Filters) => hideClosedTournaments ? dayjs.unix(tournament.truedeadline).isAfter(dayjs()) : true
