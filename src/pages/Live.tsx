import {useQuery} from 'react-query';
import {List, ListItem, ListItemText, Typography} from '@mui/material';

import {fetchLiveStreams, LiveStreamType} from '../api';
import {ErrorLoadingData, Loading, PageWrapper} from 'components';

export const Live = () => {
    const { data: liveStreams, error, isLoading } = useQuery<LiveStreamType[], Error>('live_streams', fetchLiveStreams);

    if (isLoading) {
        return (
            <Loading />
        );
    }

    if (error) {
        return (
            <ErrorLoadingData message={error.message} />
        );
    }

    return (
        <PageWrapper>
            <Typography variant="h4" gutterBottom>Live Streams</Typography>
            <List>
                {liveStreams?.map((stream) => (
                    <ListItem key={stream.id} disablePadding>
                        <ListItemText
                            primary={stream.stream_title}
                            secondary={
                                <>
                                    <Typography component="span" variant="body2" color="textPrimary">
                                        {stream.stream_description || 'No description available.'}
                                    </Typography>
                                    <br />
                                    <Typography component="span" variant="body2" color="textSecondary">
                                        Scheduled Time: {new Date(stream.scheduled_time).toLocaleString()}
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
