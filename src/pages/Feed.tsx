import {useQuery} from 'react-query';

import {Box, Typography} from '@mui/material';
import {fetchFeeds, PostType} from '../api';
import {ErrorLoadingData, Loading, PageWrapper} from 'components';
import {FromTypes} from "../api/createClient";

export const Feed = () => {
  const { data: feeds, error, isLoading } = useQuery<PostType[] | null, Error>(FromTypes.POSTS, fetchFeeds);

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
        <Typography variant="h4" gutterBottom>Feed Page</Typography>
        <Box>
          {feeds?.map((post) => (
              <Box key={post.id} sx={{ mb: 3, border: '1px solid #ddd', borderRadius: '4px', p: 2 }}>
                <Typography variant="h6">{post.title}</Typography>
                <Typography variant="body1" sx={{ mt: 1, mb: 2 }}>{post.content}</Typography>
                <Typography variant="body2">
                  Published at: {new Date(post.published_at).toLocaleString()}
                </Typography>
              </Box>
          ))}
        </Box>
      </PageWrapper>
  );
};
