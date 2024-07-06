import {supabase} from "api/createClient";
import {queryClient} from "../queryClient";

export type LiveStreamType = {
    id: number;
    stream_title: string;
    stream_description?: string;
    stream_url: string;
    scheduled_time: string;
    is_live: boolean;
};

const _fetchLiveStreams = async (): Promise<LiveStreamType[]> => {
    const { data, error } = await supabase.from<'live_streams',LiveStreamType>('live_streams')
        .select('*')
        .returns<LiveStreamType[]>();
    if (error) {
        throw new Error(error.message);
    }
    return data || [];
};

//For cache data
export const fetchLiveStreams = () => {
    return queryClient.fetchQuery<LiveStreamType[], Error>('live_streams', _fetchLiveStreams);
};
