import {AppShell, useMantineTheme} from '@mantine/core';
import styles from './Layout.module.css';
import {PropsWithChildren} from 'react';
import {useDisclosure, useMediaQuery} from '@mantine/hooks';
import {useIsFetching} from '@tanstack/react-query';
import {Header} from '@components/Header/Header.tsx';
import {TopLevelLoader} from '@components/Loaders/TopLevelLoader.tsx';
import {TournamentFilters} from '@components/TournamentFilters/TournamentFilters';

export const Layout = ({ children }: PropsWithChildren) => {

	const theme = useMantineTheme();
	const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.md})`, true);
	const isDesktop = useMediaQuery(`(min-width: ${theme.breakpoints.lg})`, true);
	const [
		mobileOpened,
		{ toggle: toggleMobile },
	] = useDisclosure(false);
	const [
		desktopOpened,
		{ toggle: toggleDesktop },
	] = useDisclosure(false);
	const isFetching = useIsFetching();

	const toggleNavbar = () => {
		if (isMobile) {
			toggleMobile();
		} else {
			toggleDesktop();
		}
	};

	const navbarOpened = isMobile ? mobileOpened : isDesktop ? true : desktopOpened;

	return (
		<AppShell
			header={{
				height: 60,
			}}
			navbar={{
				breakpoint: 'md',
				collapsed: { desktop: isDesktop ? false : !desktopOpened,
					mobile: !mobileOpened },
				width: { lg: 400,
					md: 300 },
			}}
			padding="lg"
		>
			<AppShell.Header className={styles.header}>
				<Header
					navbarOpened={navbarOpened}
					toggleNavbar={toggleNavbar}
				/>
				{isFetching ? <TopLevelLoader/> : undefined}
			</AppShell.Header>
			<AppShell.Navbar className={styles.navbar}>
				<TournamentFilters/>
			</AppShell.Navbar>
			<AppShell.Main>
				{children}
			</AppShell.Main>
		</AppShell>
	);
};
