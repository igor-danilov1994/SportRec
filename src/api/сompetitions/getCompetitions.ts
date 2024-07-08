import {queryClient} from "../queryClient";
import {FromTypes, getDataWithSupabase} from "../createClient";

export type CompetitionType = {
    id: number;
    name: string;
    description: string | null;
    start_date: string;
    end_date: string;
};

const _fetchCompetitions = async (): Promise<CompetitionType[]> => {
    return getDataWithSupabase<CompetitionType[]>(FromTypes.COMPETITIONS)
};

//For cache data
export const fetchCompetitions = () => {
    return queryClient.fetchQuery<CompetitionType[], Error>(FromTypes.COMPETITIONS, _fetchCompetitions);
};
