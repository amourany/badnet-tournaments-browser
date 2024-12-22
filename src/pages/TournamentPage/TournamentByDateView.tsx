import {Tournament} from "../../effects/badnet/tournament.types.ts";
import {TournamentGroup} from "../../components/TournamentGroup/TournamentGroup.tsx";
import {useDateFormat} from "../../hooks/useFormatDate.ts";
import dayjs from "dayjs";
import {useTranslation} from "react-i18next";

export type TournamentViewProps = {
    tournaments: Tournament[]
}

const groupTournaments = (tournaments: Tournament[]) => {
    const groupedTournaments = tournaments.reduce((acc, event) => {
        const groupingKey: string = event.firstDay.toString()

        if (!acc[groupingKey]) {
            acc[groupingKey] = []
        }

        acc[groupingKey].push(event)
        return acc
    }, {} as Record<string, Tournament[]>);

    return Object.entries(groupedTournaments)
        .sort((a, b) => a[0].localeCompare(b[0]))
}

export const TournamentByDateView = ({tournaments}: TournamentViewProps) => {

    const {t} = useTranslation('')
    const {formatDate} = useDateFormat()

    const groupedTournaments = groupTournaments(tournaments)

    const renderTournamentGroup = (tournamentGroup: [string,Tournament[]]) => {
        const [groupingKey, tournaments] = tournamentGroup
        const date = t('TOURNAMENT_CARD.SINGLE_DAY', {val: formatDate(dayjs.unix(Number(groupingKey)).toDate())})
        return <TournamentGroup key={groupingKey} groupTitle={date} tournaments={tournaments}/>;
    }

    return <>{groupedTournaments.map(renderTournamentGroup)}</>
}
