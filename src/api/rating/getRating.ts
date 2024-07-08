import {FromTypes, getDataWithSupabase} from "api/createClient";
import {queryClient} from "../queryClient";

export interface RatingType {
    id: number;
    object_id: number;
    rating_value: number;
}

const _fetchRatings = async (): Promise<RatingType[]> => {
    return getDataWithSupabase<RatingType[]>(FromTypes.RATINGS)
};

//For cache data
export const fetchRatings = () => {
    return queryClient.fetchQuery<RatingType[], Error>(FromTypes.RATINGS, _fetchRatings);
};
