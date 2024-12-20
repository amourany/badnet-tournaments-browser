import Botminton from '../../assets/botminton.svg?react';
import styles from './Header.module.css'
import {IconAdjustments, IconBrandGithub, IconX} from "@tabler/icons-react";
import {ActionIcon} from "@mantine/core";

export type HeaderProps = {
    navbarOpened: boolean,
    toggleNavbar: () => void
}

export const Header = ({navbarOpened, toggleNavbar}: HeaderProps) => {
    return <div className={styles.header}>
        <ActionIcon onClick={toggleNavbar} hiddenFrom="lg" variant="transparent" color="black" size="xl"
                    aria-label="Settings">
            {navbarOpened ? <IconX/> : <IconAdjustments/>}
        </ActionIcon>
        <div className={styles.title}>
            <Botminton className={styles.logo}/>
            <label>Badnet Browser</label>
        </div>
        <ActionIcon component="a" href="https://github.com/amourany/badnet-tournaments-browser" variant="outline" color="black" target="_blank"
                    aria-label="Github">
            <IconBrandGithub/>
        </ActionIcon>
    </div>
}
