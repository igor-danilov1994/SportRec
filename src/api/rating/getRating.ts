import {supabase} from "api/createClient";
import {queryClient} from "../queryClient";

export interface RatingType {
    id: number;
    object_id: number;
    rating_value: number;
}

const _fetchRatings = async (): Promise<RatingType[]> => {
    const { data, error } = await supabase.from<'ratings', RatingType>('ratings').select('*').returns<RatingType[]>();
    if (error) {
        throw new Error(error.message);
    }
    return data || [];
};


//For cache data
export const fetchRatings = () => {
    return queryClient.fetchQuery<RatingType[], Error>('ratings', _fetchRatings);
};
