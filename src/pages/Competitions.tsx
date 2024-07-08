import {useQuery} from 'react-query';

import {List, ListItem, ListItemText, Typography} from '@mui/material';
import {CompetitionType, fetchCompetitions} from 'api';
import {ErrorLoadingData, Loading, PageWrapper} from 'components';
import {FromTypes} from "../api/createClient";

export const Competitions = () => {
    const {
        data: competitions,
        error,
        isLoading
    } = useQuery<CompetitionType[], Error>(FromTypes.COMPETITIONS, fetchCompetitions);

    if (isLoading) {
        return (
            <Loading/>
        );
    }

    if (error) {
        return (
            <ErrorLoadingData message={error.message} />
        );
    }

    return (
        <PageWrapper>
            <Typography variant="h4" gutterBottom>Competitions List</Typography>
            <List>
                {competitions?.map((competition) => (
                    <ListItem key={competition.id} disablePadding>
                        <ListItemText
                            primary={competition.name}
                            secondary={
                                <>
                                    <Typography component="span" variant="body2" color="textPrimary">
                                        {competition.description || 'No description available.'}
                                    </Typography>
                                    <br />
                                    <Typography component="span" variant="body2" color="textSecondary">
                                        <strong>Start Date:</strong> {competition.start_date} <br />
                                        <strong>End Date:</strong> {competition.end_date}
                                    </Typography>
                                </>
                            }
                        />
                    </ListItem>
                ))}
            </List>
        </PageWrapper>
    );
};
