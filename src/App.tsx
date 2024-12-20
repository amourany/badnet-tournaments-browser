import './App.css'
import './i18n';
import {createRouter, RouterProvider} from "@tanstack/react-router";
import {routeTree} from './routeTree.gen';
import {TournamentFiltersProvider} from "./providers/TournamentFiltersProvider.tsx";

const router = createRouter({routeTree})

function App() {
    return <TournamentFiltersProvider>
        <RouterProvider router={router}/>
    </TournamentFiltersProvider>
}

export default App
