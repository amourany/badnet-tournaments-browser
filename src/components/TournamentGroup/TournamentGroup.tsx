import {TournamentCard} from "../TournamentCard/TournamentCard.tsx";
import {Flex} from "@mantine/core";
import styles from "./TournamentGroup.module.css";
import {Tournament} from "../../effects/badnet/tournament.types.ts";

export type TournamentGroupProps = {
    tournaments: Tournament[],
    groupTitle: string,
    displayTitle?: boolean
}
export const TournamentGroup = ({groupTitle, tournaments, displayTitle = true}: TournamentGroupProps) => {

    return <div>
        {displayTitle ? <h2 className={styles.groupTitle}>{groupTitle}</h2> : undefined}
        <Flex
         classNames={{
             root: styles.flex,
         }}
        >
            {tournaments.map(tournament => <TournamentCard key={tournament.id} tournament={tournament}/>)}
        </Flex>
    </div>
}