import {useEffect, useState} from 'react';

const LANGUAGE_KEY = 'lang';

const getInitialLanguage = (): string => {
    const storedLanguage = localStorage.getItem(LANGUAGE_KEY);
    return storedLanguage ? storedLanguage : 'ru';
};

export const useLanguage = () => {
    const [language, setLanguage] = useState<string>(getInitialLanguage);

    useEffect(() => {
        const storedLanguage = localStorage.getItem(LANGUAGE_KEY);
        if (storedLanguage) {
            setLanguage(storedLanguage);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(LANGUAGE_KEY, language);
    }, [language]);

    const updateLanguage = (newLanguage: string) => {
        setLanguage(newLanguage);
    };

    return {
        language,
        setLanguage: updateLanguage,
    };
};
