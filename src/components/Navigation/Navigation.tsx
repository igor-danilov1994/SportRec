import React, {ReactNode, useCallback, useState} from "react";
import {Box, Container, Drawer, IconButton, List} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import {Notification} from "../Notification";
import {LanguageSelect} from "../LanguageSelect";
import {TranslationsType} from "assets/translations/translations";
import {CompetitionsIcon, FeedIcon, LiveIcon, Logo, MarketplaceIcon, OrganisationIcon, RatingsIcon} from "assets/icons";
import {NavigationItem} from "./NavigationItem";

export interface PageListType {
    link: string,
    title: keyof TranslationsType['ru'],
    icon: ReactNode,
}

const pageList: PageListType[] = [
    {
        link: '/feed',
        title: 'feed',
        icon: <FeedIcon />
    },
    {
        link: '/marketplace',
        title: 'marketplace',
        icon: <MarketplaceIcon />
    },
    {
        link: '/rating',
        title: 'rating',
        icon: <RatingsIcon />
    },
    {
        link: '/competitions',
        title: 'competitions',
        icon: <CompetitionsIcon />
    },
    {
        link: '/organisations',
        title: 'organisations',
        icon: <OrganisationIcon />
    },
    {
        link: '/live',
        title: 'live',
        icon: <LiveIcon />
    }
];

export const Navigation = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerToggle = useCallback(() => {
        setDrawerOpen(!drawerOpen);
    }, [drawerOpen]);

    const drawer = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={handleDrawerToggle}
            onKeyDown={handleDrawerToggle}
        >
            <List>
                {pageList.map(page => (
                    <NavigationItem
                        key={page.title}
                        {...page}
                    />
                ))}
            </List>
            <Box sx={{ display: { xs: 'block', sm: 'none', width: '100%' }, padding: 2 }}>
                <LanguageSelect />
                <Notification />
            </Box>
        </Box>
    );

    return (
        <Box sx={{
            maxWidth: '100%',
            margin: 0,
            backgroundColor: `var(--main-block-color)`,
            alignItems: 'center',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 99,
        }}>
            <nav>
                <Container sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    color: 'var(--text-color)',
                }}>
                    <Logo />
                    <List sx={{ display: { xs: 'none', sm: 'flex' } }}>
                        {pageList.map(page => (
                            <NavigationItem
                                key={page.title}
                                {...page}
                            />
                        ))}
                    </List>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <LanguageSelect />
                        <Notification />
                    </Box>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Container>
            </nav>
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={handleDrawerToggle}
            >
                {drawer}
            </Drawer>
        </Box>
    );
};
