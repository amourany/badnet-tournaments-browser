import {Skeleton} from "@mantine/core";
import {TournamentCardSkeleton} from "./TournamentCardSkeleton.tsx";
import styles from "./TournamentGroupSkeleton.module.css";

export const TournamentGroupSkeleton = () => {
    return (
        <div className={styles.container}>
            <Skeleton height={30} width='40%' radius="xl"/>
            <div className={styles.cards} >
                {...Array(15).fill(0).map((_, index) => (<TournamentCardSkeleton key={index}/>))}
            </div>
        </div>
    )
}
