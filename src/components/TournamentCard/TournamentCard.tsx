import {Card} from "@mantine/core";
import styles from "./TournamentCard.module.css";
import dayjs from "dayjs";
import {IconCalendarMonth, IconCheckbox, IconMapPin, IconSquareX, IconStopwatch} from "@tabler/icons-react";
import {Tournament} from "../../effects/badnet/tournament.types.ts";
import {useDateFormat} from "../../hooks/useFormatDate.ts";

export type TournamentCardProps = {
    tournament: Tournament
}

export const TournamentCard = ({tournament}: TournamentCardProps) => {

    const {formatDate, formatDateTimeWithDay} = useDateFormat()

    const firstDay = dayjs.unix(tournament.firstDay)
    const lastDay = dayjs.unix(tournament.lastDay)
    const lastDayLabel = formatDate(lastDay.toDate())
    const dateLabel = firstDay.isSame(lastDay, 'day') ? `Le ${lastDayLabel}` : `Les ${firstDay.date()}-${lastDayLabel}`

    const registrationOpeningDate = dayjs.unix(tournament.openline)
    const registrationClosingDate = dayjs.unix(tournament.truedeadline)
    const registrationDateLabel = `${formatDateTimeWithDay(registrationOpeningDate.toDate())}`

    const areRegistrationsOpen = registrationOpeningDate.isBefore(dayjs())
    const areRegistrationsClosed = registrationClosingDate.isBefore(dayjs())

    return <Card
        classNames={{
            root: styles.container,
            section: styles.section,
        }}
        withBorder radius="md" shadow="md">
        <Card.Section inheritPadding>
            <h2 className={styles.cardTitle} title={tournament.name}>{tournament.name}</h2>
            <div className={styles.singleLine}>
                <label className={styles.ageCategories}>{tournament.ageCategories.join(", ")}</label>
                <label className={styles.disciplines}>{tournament.disciplines.join(" ")}</label>
            </div>
            <div className={styles.line}>
                <label><IconMapPin size={18}/>{tournament.location}</label>
                <label><IconCalendarMonth size={18}/>{dateLabel}</label>
            </div>
            <div className={styles.registrationLine}>
            { areRegistrationsClosed ? <div><IconSquareX size={18}/><label>Les inscriptions sont fermées</label></div>
                : areRegistrationsOpen ? <div><IconCheckbox size={18}/><label>Les inscriptions sont déjà ouvertes</label></div>
                    : <div><IconStopwatch size={18} className={styles.registrationIcon}/><label>Ouverture des inscriptions le <b>{registrationDateLabel}</b></label></div>}
            </div>
        </Card.Section>
    </Card>
}
