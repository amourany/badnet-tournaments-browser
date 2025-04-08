import {TFunction} from 'i18next';
import {useTranslation} from '@hooks/useTranslation';

export type FormatDate = {
	formatDate: (date: Date) => string,
	formatDateTime: (date: Date) => string,
	formatDateTimeWithDay: (date: Date) => string,
};

const formatDateTime = (t: TFunction<string, undefined>, date: Date) => t('intlDate', {
	formatParams: {
		val: {
			day: 'numeric',
			hour: 'numeric',
			minute: 'numeric',
			month: 'long',
			year: 'numeric',
		},
	},
	val: date,
});

const formatDate = (t: TFunction<string, undefined>, date: Date) => t('intlDate', {
	formatParams: {
		val: {
			day: 'numeric',
			month: 'long',
			year: 'numeric',
		},
	},
	val: date,
});

const formatDateTimeWithDay = (t: TFunction<string, undefined>, date: Date) => t('intlDate', {
	formatParams: {
		val: {
			day: 'numeric',
			hour: 'numeric',
			minute: 'numeric',
			month: 'long',
			weekday: 'long',
			year: 'numeric',
		},
	},
	val: date,
});

export const useDateFormat = (): FormatDate => {
	const { t } = useTranslation();
	return {
		formatDate: (date: Date) => formatDate(t, date),
		formatDateTime: (date: Date) => formatDateTime(t, date),
		formatDateTimeWithDay: (date: Date) => formatDateTimeWithDay(t, date),
	};
};
