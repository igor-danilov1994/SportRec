export interface TranslationsType {
    en: {
        feed: string;
        marketplace: string;
        rating: string;
        competitions: string;
        organisations: string;
        live: string;
    };
    ru: {
        feed: string;
        marketplace: string;
        rating: string;
        competitions: string;
        organisations: string;
        live: string;
    };
}

export type MainLanguageList = 'ru' | 'en'

export const translations: TranslationsType = {
    en: {
        feed: "Feed",
        marketplace: "Marketplace",
        rating: "Rating",
        competitions: "Competitions",
        organisations: "Organisations",
        live: "Live",
    },
    ru: {
        feed: "Лента",
        marketplace: "Маркетплейс",
        rating: "Рейтинг",
        competitions: "Соревнования",
        organisations: "Организации",
        live: "Live",
    },
};
