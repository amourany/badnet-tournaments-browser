import {createLazyFileRoute} from '@tanstack/react-router';
import {TournamentPage} from '@pages/TournamentPage/TournamentPage.tsx';

const Index = () => (
	<TournamentPage />
);

export const Route = createLazyFileRoute('/')({
	component: Index,
});

