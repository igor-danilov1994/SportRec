import {queryClient} from "../queryClient";
import {supabase} from "../createClient";

export type CompetitionType = {
    id: number;
    name: string;
    description: string | null;
    start_date: string;
    end_date: string;
};

const _fetchCompetitions = async (): Promise<CompetitionType[]> => {
    const { data, error } = await supabase.from<'competitions', CompetitionType>('competitions').select('*').returns<CompetitionType[]>();
    if (error) {
        throw new Error(error.message);
    }
    return data || [];
};

//For cache data
export const fetchCompetitions = () => {
    return queryClient.fetchQuery<CompetitionType[], Error>('competitions', _fetchCompetitions);
};
