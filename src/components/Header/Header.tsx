import Botminton from '../../assets/botminton.svg?react';
import styles from './Header.module.css'
import {IconAdjustments, IconBrandGithub, IconX} from "@tabler/icons-react";
import {ActionIcon} from "@mantine/core";
import {LanguageSwitcher} from "../LanguageSwitcher/LanguageSwitcher.tsx";
import {useTranslation} from "react-i18next";

export type HeaderProps = {
    navbarOpened: boolean,
    toggleNavbar: () => void
}

export const Header = ({navbarOpened, toggleNavbar}: HeaderProps) => {

    const {t} = useTranslation()

    return <div className={styles.header}>
        <ActionIcon onClick={toggleNavbar} hiddenFrom="lg" variant="transparent" color="black" size="xl"
                    aria-label="Settings">
            {navbarOpened ? <IconX/> : <IconAdjustments/>}
        </ActionIcon>
        <div className={styles.title}>
            <Botminton className={styles.logo}/>
            <label>{t("TITLE")}</label>
        </div>
        <ActionIcon component="a" href="https://github.com/amourany/badnet-tournaments-browser" variant="outline" color="black" target="_blank"
                    aria-label="Github">
            <IconBrandGithub/>
        </ActionIcon>
        <LanguageSwitcher/>
    </div>
}
