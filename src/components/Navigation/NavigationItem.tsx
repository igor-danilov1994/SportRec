import {ListItem, ListItemIcon, ListItemText} from "@mui/material";
import {useLocation, useNavigate} from "react-router-dom";

import {PageListType} from "./Navigation";
import {MainLanguageList, translations} from "../../assets/translations/translations";
import {useLanguageContext} from "../../store";

interface NavigationItemProps extends PageListType {}

export const NavigationItem = (props: NavigationItemProps) => {
    const {link, title, icon} = props
    const { language } = useLanguageContext();
    const navigate = useNavigate();
    const location = useLocation();

    const isActive = location.pathname === `/${language}${link}`;
    const translatedTitle = translations[language as MainLanguageList][title];

    const handleNavigation = (path: string) => {
        navigate(`/${language}${path}`);
    };

    return (
        <ListItem
            button
            onClick={() => handleNavigation(link)}
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
