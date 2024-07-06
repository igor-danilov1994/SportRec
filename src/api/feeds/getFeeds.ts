import {supabase} from "../createClient";
import {queryClient} from "../queryClient";

export type PostType = {
    id: number;
    title: string;
    content: string;
    published_at: string;
};

const _getFeeds = async (): Promise<PostType[]> => {
    const { data, error } = await supabase.from('posts').select('*').returns<PostType[]>();
    if (error) {
        throw new Error(error.message);
    }

    return data
};

//For cache data
export const fetchFeeds = () => {
    return queryClient.fetchQuery<PostType[], Error>('posts', _getFeeds);
};
