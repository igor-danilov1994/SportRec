import {useQuery} from 'react-query';
import {List, ListItem, ListItemText, Typography} from '@mui/material';

import {fetchRatings, RatingType} from '../api';
import {ErrorLoadingData, Loading, PageWrapper} from 'components';
import {FromTypes} from "../api/createClient";

export const Rating = () => {
    const { data: ratings, error, isLoading } = useQuery<RatingType[], Error>(FromTypes.RATINGS, fetchRatings);

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
            <Typography variant="h4" gutterBottom>Rating List</Typography>
            <List sx={{ width: '100%', maxWidth: 360 }}>
                {ratings?.map((rating) => (
                    <ListItem key={rating.id} disablePadding>
                        <ListItemText
                            primary={`Object ID: ${rating.object_id}`}
                            secondary={`Rating: ${rating.rating_value}`}
                        />
                    </ListItem>
                ))}
            </List>
        </PageWrapper>
    );
};
