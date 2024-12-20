import {useTranslation} from "react-i18next";
import {TFunction} from "i18next";

export type FormatDate = {
    formatDate: (date: Date) => string,
    formatDateTime: (date: Date) => string,
    formatDateTimeWithDay: (date: Date) => string,
}

const formatDateTime = (t: TFunction<string, undefined>, date: Date) => {
    return t('intlDate', {
        val: date,
        formatParams: {
            val: {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
            }
        }
    });
}

const formatDate = (t: TFunction<string, undefined>, date: Date) => {
    return t('intlDate', {
        val: date,
        formatParams: {
            val: {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            }
        }
    });
}

const formatDateTimeWithDay = (t: TFunction<string, undefined>, date: Date) => {
    return t('intlDate', {
        val: date,
        formatParams: {
            val: {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                weekday: 'long',
            }
        }
    });
}

export const useDateFormat = (): FormatDate => {
    const {t} = useTranslation('')
    return {
        formatDate: (date: Date) => formatDate(t, date),
        formatDateTime: (date: Date) => formatDateTime(t, date),
        formatDateTimeWithDay: (date: Date) => formatDateTimeWithDay(t, date),
    }
}
