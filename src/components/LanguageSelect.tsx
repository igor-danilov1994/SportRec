import {useNavigate} from 'react-router-dom';
import {Box, MenuItem, Select, SelectChangeEvent, Typography} from '@mui/material';
import {ArrowDropDown as ArrowDropDownIcon} from '@mui/icons-material';

import {countriesList, getCountryByValue} from "../assets/countries/countries";
import {useLanguageContext} from 'store';

interface LanguageSelectProps {}

export const LanguageSelect = (props: LanguageSelectProps) => {
    const { language, setLanguage } = useLanguageContext();
    const navigate = useNavigate();

    const handleChange = (event: SelectChangeEvent) => {
        const newLanguage = event.target.value;
        setLanguage(newLanguage);

        const currentPath = window.location.pathname.split('/').slice(2).join('/');
        navigate(`/${newLanguage}/${currentPath}`);
    };

    const currentSelectCountry = getCountryByValue(language);

    return (
        <Box sx={{margin: '0 24px 0 24px'}}>
            <Select
                value={language}
                onChange={handleChange}
                displayEmpty
                IconComponent={() => <ArrowDropDownIcon sx={{ color: 'var(--text-color)' }} />}
                renderValue={(selected) => (
                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                        <img
                            src={currentSelectCountry?.flag}
                            alt={currentSelectCountry?.title}
                            style={{width: 24, height: 24, marginRight: 8}}
                        />
                        <Typography sx={{color: 'var(--text-color)'}}>
                            {selected.toUpperCase()}
                        </Typography>
                    </Box>
                )}
                sx={{
                    '& .MuiOutlinedInput-root': {
                        border: 'none',
                        padding: 0,
                    },
                    '& .MuiSelect-select': {
                        padding: 0,
                        paddingRight: '0px !important',
                    },
                    '& .MuiInputBase-input': {
                        paddingRight: 0,
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                        border: 'none',
                    },
                }}
            >
                {countriesList.map(country => (
                    <MenuItem key={country.title} value={country.title}>
                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                            <img
                                src={country.flag}
                                alt={country.title}
                                style={{width: 24, height: 24, marginRight: 8}}
                            />
                            <Typography>{country.title}</Typography>
                        </Box>
                    </MenuItem>
                ))}
            </Select>
        </Box>
    );
};
