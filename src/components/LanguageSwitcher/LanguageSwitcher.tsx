import {ActionIcon, Combobox, useCombobox} from "@mantine/core";
import {useTranslation} from "react-i18next";
import {IconLanguage} from "@tabler/icons-react";

export const LanguageSwitcher = () => {
    const {i18n} = useTranslation();
    const combobox = useCombobox({
        onDropdownClose: () => combobox.resetSelectedOption(),
    });

    const switchLanguage = async (language: string) => {
        await i18n.changeLanguage(language);
        combobox.updateSelectedOptionIndex('active');
    };

    return (
        <>
            <Combobox
                store={combobox}
                width={100}
                position="bottom-start"
                withArrow
                arrowPosition="center"
                withinPortal={false}
                onOptionSubmit={(val) => {
                    switchLanguage(val);
                    combobox.closeDropdown();
                }}
            >
                <Combobox.Target>
                    <ActionIcon component="button" variant="outline" color="black"
                                size="md"
                                onClick={() => combobox.toggleDropdown()}
                                aria-label="Language">
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
        </>
    );
}
