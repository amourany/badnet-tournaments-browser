import {Stack} from "@mantine/core";
import {useFetchTournaments} from "../../effects/badnet/tournaments.actions.ts";
import styles from "./TournamentPage.module.css";
import {useDidUpdate, useInViewport} from "@mantine/hooks";
import {TOURNAMENT_DATE, useFilters} from "../../providers/TournamentFiltersProvider.tsx";
import {TournamentByRegistrationView} from "./TournamentByRegistrationView.tsx";
import {TournamentByDateView} from "./TournamentByDateView.tsx";
import {FiltersOverview} from "../../components/FiltersOverview/FiltersOverview.tsx";

export const TournamentPage = () => {

    const {filters} = useFilters()
    const {data: tournaments, isFetching, hasNextPage, fetchNextPage, isFetchingNextPage} = useFetchTournaments()
    const {ref: isBottomPageInViewportRef, inViewport: isBottomPageInViewport} = useInViewport();

    useDidUpdate(() => {
        if (isBottomPageInViewport && hasNextPage && !isFetching && !isFetchingNextPage) {
            void fetchNextPage({cancelRefetch: false});
        }
    }, [
        isBottomPageInViewport,
        isFetching,
        hasNextPage
    ]);

    return <div>
        <Stack
            classNames={{
                root: styles.stack,
            }}
        >
            <FiltersOverview/>
            {filters.sortMode === TOURNAMENT_DATE ?
                <TournamentByDateView tournaments={tournaments ?? []}/> :
                <TournamentByRegistrationView tournaments={tournaments ?? []}/>}
        </Stack>
        <div ref={isBottomPageInViewportRef}/>
    </div>
}
