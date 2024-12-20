import {ActionIcon, AppShell} from "@mantine/core";
import {TournamentFilters} from "../components/TournamentFilters/TournamentFilters.tsx";
import styles from "./Layout.module.css";
import {PropsWithChildren} from "react";
import {useDisclosure} from "@mantine/hooks";
import {IconAdjustments} from "@tabler/icons-react";

export const Layout = ({children}: PropsWithChildren) => {

    const [mobileOpened, {toggle: toggleMobile}] = useDisclosure(false);
    const [desktopOpened, {toggle: toggleDesktop}] = useDisclosure(false);

    const toggleNavbar = () => {
        toggleMobile()
        toggleDesktop()
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
            <AppShell.Header>Badnet Tournament Opening Date</AppShell.Header>
            <AppShell.Navbar className={styles.navbar}>
                <TournamentFilters onToggleNavbar={toggleNavbar}/>
            </AppShell.Navbar>
            <AppShell.Main>
                <ActionIcon onClick={toggleNavbar} hiddenFrom="lg" variant="transparent" color="black" size="xl"
                            aria-label="Settings">
                    <IconAdjustments/>
                </ActionIcon>
                {children}
            </AppShell.Main>
        </AppShell>
    )
}
