import './App.css';
import './i18n';
import {createRouter, RouterProvider} from '@tanstack/react-router';
import {routeTree} from './routeTree.gen';
import {TournamentFiltersProvider} from '@providers/TournamentFiltersProvider';

const basePath = import.meta.env['BASE_URL'];
const router = createRouter({ basepath:basePath,
	routeTree });

window.addEventListener('vite:preloadError', () => {
	window.location.reload();
});

const App = () => <TournamentFiltersProvider>
	<RouterProvider router={router}/>
</TournamentFiltersProvider>;

export default App;
