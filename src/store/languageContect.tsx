import React, {createContext, useContext, useEffect, useState} from 'react';

interface LanguageContextProps {
    language: string;
    setLanguage: (language: string) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const useLanguageContext = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguageContext must be used within a LanguageProvider');
    }
    return context;
};

const LANGUAGE_KEY = 'lang';

const getInitialLanguage = (): string => {
    const storedLanguage = localStorage.getItem(LANGUAGE_KEY);
    return storedLanguage ? storedLanguage : 'ru';
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<string>(getInitialLanguage);

    useEffect(() => {
        localStorage.setItem(LANGUAGE_KEY, language);
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
