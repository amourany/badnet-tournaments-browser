import {TournamentViewProps} from "./TournamentByDateView.tsx";
import {Tournament} from "../../effects/badnet/tournament.types.ts";
import dayjs from "dayjs";
import {TournamentGroup} from "../../components/TournamentGroup/TournamentGroup.tsx";
import {Accordion} from "@mantine/core";
import {useFilters} from "../../providers/TournamentFiltersProvider.tsx";
import {useDateFormat} from "../../hooks/useFormatDate.ts";
import styles from "./TournamentPage.module.css";

const TOURNAMENTS_OPENED = 'OPENED'
const TOURNAMENTS_CLOSED = 'CLOSED'

const groupTournaments = (tournaments: Tournament[]) => {
    const groupedTournaments = tournaments.reduce((acc, event) => {
        const isRegistrationOpen = dayjs.unix(event.openline).isBefore(dayjs())
        const isRegistrationClose = dayjs.unix(event.truedeadline).isBefore(dayjs())
        const groupingKey: string = isRegistrationClose ? TOURNAMENTS_CLOSED : isRegistrationOpen ? TOURNAMENTS_OPENED : event.openline.toString()

        if (!acc[groupingKey]) {
            acc[groupingKey] = []
        }

        acc[groupingKey].push(event)
        return acc
    }, {} as Record<string, Tournament[]>);

    return Object.entries(groupedTournaments)
        .sort((a, b) => a[0].localeCompare(b[0]))
}

export const TournamentByRegistrationView = ({tournaments}: TournamentViewProps) => {

    const {formatDateTime} = useDateFormat()
    const {filters} = useFilters()
    const {hideOpenedTournaments, hideClosedTournaments} = filters

    const groupedTournaments = groupTournaments(tournaments)
    const openedTournaments = groupedTournaments.filter(tournament => tournament[0] === TOURNAMENTS_OPENED)
    const closedTournaments = groupedTournaments.filter(tournament => tournament[0] === TOURNAMENTS_CLOSED)
    const otherTournaments = groupedTournaments.filter(tournament => tournament[0] !== TOURNAMENTS_OPENED && tournament[0] !== TOURNAMENTS_CLOSED)

    const renderTournamentGroup = (tournamentGroup: [string,Tournament[]]) => {
        const [groupingKey, tournaments] = tournamentGroup
        const date = `Le ${formatDateTime(dayjs.unix(Number(groupingKey)).toDate())}`
        return <TournamentGroup key={groupingKey} groupTitle={date} tournaments={tournaments}/>;
    }

    const renderTournamentGroupSortedByDate = (tournamentGroup: [string,Tournament[]]) => {
        const tournaments = tournamentGroup[1].sort((a, b) => a.firstDay - b.firstDay)
        return <TournamentGroup key={tournamentGroup[0]} groupTitle={tournamentGroup[0]} tournaments={tournaments} displayTitle={false}/>;
    }

    return <>
        <h1 className={styles.pageTitle}>Date d'ouverture des inscriptions</h1>
        {otherTournaments.map(renderTournamentGroup)}
        <Accordion variant="separated" transitionDuration={500}>
            {hideOpenedTournaments ? undefined : <Accordion.Item value="Tournois déjà ouverts" >
                <Accordion.Control><h3>Tournois déjà ouverts</h3></Accordion.Control>
                <Accordion.Panel>
                    {openedTournaments.map(renderTournamentGroupSortedByDate)}
                </Accordion.Panel>
            </Accordion.Item>}
            {hideClosedTournaments ? undefined : <Accordion.Item value="Tournois déjà fermés" >
                <Accordion.Control><h3>Tournois déjà fermés</h3></Accordion.Control>
                <Accordion.Panel>
                    {closedTournaments.map(renderTournamentGroupSortedByDate)}
                </Accordion.Panel>
            </Accordion.Item>}
        </Accordion>
    </>

}
