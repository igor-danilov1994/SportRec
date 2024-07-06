import {supabase} from "api/createClient";
import {queryClient} from "../queryClient";

export type ProductType = {
    id: number;
    product_name: string;
    description?: string;
    price: number;
    available: boolean;
};

const _fetchMarketplace = async (): Promise<ProductType[]> => {
    const { data, error } = await supabase.from<'marketplace', ProductType>('marketplace').select('*').returns<ProductType[]>();
    if (error) {
        throw new Error(error.message);
    }
    return data || [];
};

//For cache data
export const fetchMarketplace = () => {
    return queryClient.fetchQuery<ProductType[], Error>('marketplace', _fetchMarketplace);
};
