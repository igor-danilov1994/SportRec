import {ListItem, ListItemIcon, ListItemText} from "@mui/material";

import {PageListType} from "./Navigation";
import {MainLanguageList, translations} from "../../assets/translations/translations";
import {useLanguageContext} from "../../store";
import {useLocation, useNavigate} from "react-router-dom";

interface NavigationItemProps extends PageListType {}

export const NavigationItem = (props: NavigationItemProps) => {
    const {link, icon, title} = props
    const { language } = useLanguageContext();
    const navigate = useNavigate();
    const location = useLocation();

    const isActive = location.pathname === `/${language}${link}`;
    const translatedTitle = translations[language as MainLanguageList][title];

    const handleNavigation = () => {
        navigate(`/${language}${link}`);
    };

    return (
        <ListItem
            button
            onClick={handleNavigation}
            sx={{
                ":hover": {
                    backgroundColor: 'var(--main-block-color)',
                    color: 'var(--hovered-text-color)'
                },
                backgroundColor: isActive ? 'var(--main-block-color)' : 'inherit',
                color: isActive ? 'var(--hovered-text-color)' : 'var(--text-color)',
            }}
            className={`icon-wrapper ${isActive ? "active" : undefined}`}
        >
            <ListItemIcon sx={{
                minWidth: 'auto',
                marginRight: '10px',
                color: isActive ? 'var(--hovered-text-color)' : 'inherit',
            }}>
                {icon}
            </ListItemIcon>
            <ListItemText primary={translatedTitle} />
        </ListItem>
    )

}
