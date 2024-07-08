import {FromTypes, getDataWithSupabase} from "../createClient";
import {queryClient} from "../queryClient";

export type PostType = {
    id: number;
    title: string;
    content: string;
    published_at: string;
};

const _getFeeds = async (): Promise<PostType[]> => {
    return getDataWithSupabase<PostType[]>(FromTypes.POSTS)
};

//For cache data
export const fetchFeeds = () => {
    return queryClient.fetchQuery<PostType[], Error>(FromTypes.POSTS, _getFeeds);
};
