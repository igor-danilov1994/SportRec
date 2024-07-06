import {useQuery} from 'react-query';
import {List, ListItem, ListItemText, Typography} from '@mui/material';

import {fetchMarketplace, ProductType} from 'api';
import {ErrorLoadingData, Loading, PageWrapper} from 'components';


export const MarketPlace = () => {
    const { data: products, error, isLoading } = useQuery<ProductType[], Error>('marketplace', fetchMarketplace);

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
            <Typography variant="h4" gutterBottom>Marketplace</Typography>
            <List>
                {products?.map((product) => (
                    <ListItem key={product.id} disablePadding>
                        <ListItemText
                            primary={product.product_name}
                            secondary={
                                <>
                                    <Typography component="span" variant="body2" color="textPrimary">
                                        {product.description || 'No description available.'}
                                    </Typography>
                                    <br />
                                    <Typography component="span" variant="body2" color="textSecondary">
                                        Price: ${product.price.toFixed(2)} | Available: {product.available ? 'Yes' : 'No'}
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
