import {AppShell} from "@mantine/core";
import {TournamentFilters} from "../components/TournamentFilters/TournamentFilters.tsx";
import styles from "./Layout.module.css";
import {PropsWithChildren} from "react";
import {useDisclosure} from "@mantine/hooks";
import {Header} from "../components/Header/Header.tsx";

export const Layout = ({children}: PropsWithChildren) => {

    const [mobileOpened, {toggle: toggleMobile}] = useDisclosure(false);
    // const [_, {toggle: toggleDesktop}] = useDisclosure(false);

    const toggleNavbar = () => {
        toggleMobile()
        // toggleDesktop()
    }

    return (
        <AppShell
            header={{
                height: 60,
            }}
            navbar={{
                width: {lg: 400},
                breakpoint: "md",
                collapsed: {mobile: !mobileOpened, desktop: false}
            }}
            padding="lg"
        >
            <AppShell.Header className={styles.header}><Header toggleNavbar={toggleNavbar} navbarOpened={mobileOpened}/></AppShell.Header>
            <AppShell.Navbar className={styles.navbar}>
                <TournamentFilters/>
            </AppShell.Navbar>
            <AppShell.Main>
                {children}
            </AppShell.Main>
        </AppShell>
    )
}
