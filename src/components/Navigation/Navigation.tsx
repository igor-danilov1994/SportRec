import {ReactNode} from "react";
import {Box, Container, List} from '@mui/material';

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
            zIndex: 99
        }}>
            <nav>
                <Container sx={{
                    display: 'flex',
                    alignItems: 'center',
                    color: 'var(--text-color)',
                }}>
                   <Logo/>
                    <List sx={{ display: 'flex' }}>
                        {pageList.map(page => (
                            <NavigationItem key={page.title} {...page}  />
                        ))}
                    </List>
                    <LanguageSelect />
                    <Notification />
                </Container>
            </nav>
        </Box>
    );
};
