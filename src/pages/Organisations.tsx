import {useQuery, UseQueryResult} from 'react-query';
import {Box, Typography} from '@mui/material';

import {fetchOrganizations, OrganizationType} from '../api';
import {ErrorLoadingData, Loading, PageWrapper} from 'components';
import {FromTypes} from "../api/createClient";

export const Organisations = () => {
    const { data: organizations, error, isLoading }: UseQueryResult<OrganizationType[], Error> = useQuery(
       FromTypes.ORGANISATIONS,
        fetchOrganizations
    );

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
            <Typography variant="h4" gutterBottom>Organizations List</Typography>
            <Box component="ul" sx={{ listStyleType: 'none', padding: 0 }}>
                {organizations?.map((organization) => (
                    <Box component="li" key={organization.id}
                         sx={{ my: 2, border: '1px solid #ddd', borderRadius: '4px', p: 2 }}
                    >
                        <Typography variant="h6">{organization.name}</Typography>
                        <Typography variant="body1" sx={{ mt: 1, mb: 2 }}>
                            {organization.description || 'No description available.'}
                        </Typography>
                        {organization.location && (
                            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                                Location: {organization.location}
                            </Typography>
                        )}
                        {organization.website && (
                            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                                Website: <a href={organization.website} target="_blank" rel="noopener noreferrer">
                                {organization.website}
                            </a>
                            </Typography>
                        )}
                    </Box>
                ))}
            </Box>
        </PageWrapper>
    );
};
