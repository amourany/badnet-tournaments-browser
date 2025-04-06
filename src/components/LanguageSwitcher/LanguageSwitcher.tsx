import {ActionIcon, Combobox, useCombobox} from '@mantine/core';
import {useTranslation} from 'react-i18next';
import {IconLanguage} from '@tabler/icons-react';

export const LanguageSwitcher = () => {
	const { i18n } = useTranslation();
	const combobox = useCombobox({
		onDropdownClose: () => combobox.resetSelectedOption(),
	});

	const switchLanguage = async (language: string) => {
		await i18n.changeLanguage(language);
		combobox.updateSelectedOptionIndex('active');
	};

	return (
		<Combobox
			arrowPosition="center"
			onOptionSubmit={(val) => {
				switchLanguage(val);
				combobox.closeDropdown();
			}}
			position="bottom-start"
			store={combobox}
			width={100}
			withArrow
			withinPortal={false}
		>
			<Combobox.Target>
				<ActionIcon
					aria-label="Language"
					color="black"
					component="button"
					onClick={() => combobox.toggleDropdown()}
					size="md"
					variant="outline"
				>
					<IconLanguage/>
				</ActionIcon>
			</Combobox.Target>

			<Combobox.Dropdown>
				<Combobox.Options>
					<Combobox.Option value="en">English</Combobox.Option>
					<Combobox.Option value="fr">Français</Combobox.Option>
				</Combobox.Options>
			</Combobox.Dropdown>
		</Combobox>
	);
};
