import ruFlag from "../images/Russia.png";
import enFlag from "../images/United Kingdom.png";

export const countriesList = [
    {
        value: 'ru',
        title: 'ru',
        flag: ruFlag
    },{
        value: 'en',
        title: 'en',
        flag: enFlag
    },
];

export const getCountryByValue = (value: string) => {
    return countriesList.find(country => country.value === value) || null;
};
