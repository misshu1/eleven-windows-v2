import { useTranslation } from 'react-i18next';

export const useTimeSince = (previousDate) => {
    const { t } = useTranslation();

    const msPerMinute = 60 * 1000;
    const msPerHour = 60 * msPerMinute;
    const msPerDay = 24 * msPerHour;
    const msPerMonth = 30 * msPerDay;
    const msPerYear = 365 * msPerDay;

    const currentDay = new Date().getTime();
    const elapsed = currentDay - new Date(previousDate).getTime();

    if (elapsed < msPerMinute) {
        return t('timeSince.justNow');
    } else if (elapsed < msPerHour) {
        return Math.round(elapsed / msPerMinute) + ` ${t('timeSince.minutes')}`;
    } else if (elapsed < msPerDay) {
        return Math.round(elapsed / msPerHour) + ` ${t('timeSince.hours')}`;
    } else if (elapsed < msPerMonth) {
        return Math.round(elapsed / msPerDay) + ` ${t('timeSince.days')}`;
    } else if (elapsed < msPerYear) {
        return Math.round(elapsed / msPerMonth) + ` ${t('timeSince.months')}`;
    } else {
        return Math.round(elapsed / msPerYear) + ` ${t('timeSince.years')}`;
    }
};
