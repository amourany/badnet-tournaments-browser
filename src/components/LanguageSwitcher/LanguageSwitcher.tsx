import {ActionIcon, Combobox, useCombobox} from "@mantine/core";
import {useTranslation} from "react-i18next";
import {supportedLanguages} from "../../i18n.ts";
import {IconLanguage} from "@tabler/icons-react";

export const LanguageSwitcher = () => {
    const {i18n} = useTranslation();
    const currentLanguage = i18n.resolvedLanguage;
    const combobox = useCombobox({
        onDropdownClose: () => combobox.resetSelectedOption(),
    });

    const switchLanguage = async (language: string) => {
        await i18n.changeLanguage(language);
        combobox.updateSelectedOptionIndex('active');
    };

    const options = supportedLanguages.map((item) => (
        <Combobox.Option value={item} key={item}>
            {item}
        </Combobox.Option>
    ));

    return (
        <>
            <Combobox
                store={combobox}
                width={50}
                position="bottom-start"
                withArrow
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
                    <Combobox.Options>{options}</Combobox.Options>
                </Combobox.Dropdown>
            </Combobox>
        </>
    );
}
