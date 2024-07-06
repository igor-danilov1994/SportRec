import {supabase} from "api/createClient";
import {queryClient} from "../queryClient";

export type OrganizationType = {
    id: number;
    name: string;
    description: string | null;
    location: string | null;
    website: string | null;
};

const _fetchOrganizations = async (): Promise<OrganizationType[]> => {
    const { data, error } = await supabase.from<'organisations', OrganizationType>('organisations')
        .select('*')
        .returns<OrganizationType[]>();
    if (error) {
        throw new Error(error.message);
    }
    return data || [];
};

//For cache data
export const fetchOrganizations = () => {
    return queryClient.fetchQuery<OrganizationType[], Error>('organisations', _fetchOrganizations);
};
