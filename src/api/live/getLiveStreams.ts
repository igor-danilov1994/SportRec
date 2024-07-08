import {FromTypes, getDataWithSupabase} from "api/createClient";
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
    return getDataWithSupabase<LiveStreamType[]>(FromTypes.LIVE_STREAM)
};

//For cache data
export const fetchLiveStreams = () => {
    return queryClient.fetchQuery<LiveStreamType[], Error>(FromTypes.LIVE_STREAM, _fetchLiveStreams);
};
