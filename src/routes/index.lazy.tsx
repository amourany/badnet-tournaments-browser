import {createLazyFileRoute} from '@tanstack/react-router';
import {TournamentPage} from '@pages/TournamentPage/TournamentPage';

const Index = () => (
	<TournamentPage />
);

export const Route = createLazyFileRoute('/')({
	component: Index,
});

