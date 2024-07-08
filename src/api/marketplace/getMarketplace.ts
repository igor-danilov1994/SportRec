import {FromTypes, getDataWithSupabase} from "api/createClient";
import {queryClient} from "../queryClient";

export type ProductType = {
    id: number;
    product_name: string;
    description?: string;
    price: number;
    available: boolean;
};

const _fetchMarketplace = async (): Promise<ProductType[]> => {
    return getDataWithSupabase<ProductType[]>(FromTypes.MARKETPLACE)
};

//For cache data
export const fetchMarketplace = () => {
    return queryClient.fetchQuery<ProductType[], Error>(FromTypes.MARKETPLACE, _fetchMarketplace);
};
