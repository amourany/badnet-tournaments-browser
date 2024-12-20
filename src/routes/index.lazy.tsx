import { createLazyFileRoute } from '@tanstack/react-router'
import {TournamentPage} from "../pages/TournamentPage/TournamentPage.tsx";

export const Route = createLazyFileRoute('/')({
    component: Index,
})

function Index() {
    return (
        <TournamentPage />
    )
}
