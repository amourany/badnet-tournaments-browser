import Botminton from '@assets/botminton.svg?react';
import styles from './Header.module.css';
import {IconAdjustments, IconBrandGithub, IconX} from '@tabler/icons-react';
import {ActionIcon} from '@mantine/core';
import {LanguageSwitcher} from '@components/LanguageSwitcher/LanguageSwitcher';
import {useTranslation} from '@hooks/useTranslation';

export type HeaderProps = {
	navbarOpened: boolean,
	toggleNavbar: () => void
};

export const Header = ({ navbarOpened, toggleNavbar }: HeaderProps) => {

	const { t } = useTranslation();

	return <div className={styles.header}>
		<ActionIcon
			aria-label="Settings"
			color="black"
			hiddenFrom="lg"
			onClick={toggleNavbar}
			size="xl"
			variant="transparent"
		>
			{navbarOpened ? <IconX/> : <IconAdjustments/>}
		</ActionIcon>
		<div className={styles.title}>
			<Botminton className={styles.logo}/>
			<label>{t('TITLE')}</label>
		</div>
		<div className={styles.icons}>
			<ActionIcon
				aria-label="Github"
				color="black"
				component="a"
				href="https://github.com/amourany/badnet-tournaments-browser"
				target="_blank"
				variant="outline"
			>
				<IconBrandGithub/>
			</ActionIcon>
			<LanguageSwitcher/>
		</div>
	</div>;
};
