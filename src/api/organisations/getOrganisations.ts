import {FromTypes, getDataWithSupabase} from "api/createClient";
import {queryClient} from "../queryClient";

export type OrganizationType = {
    id: number;
    name: string;
    description: string | null;
    location: string | null;
    website: string | null;
};

const _fetchOrganizations = async (): Promise<OrganizationType[]> => {
    return getDataWithSupabase<OrganizationType[]>(FromTypes.ORGANISATIONS)
};

//For cache data
export const fetchOrganizations = () => {
    return queryClient.fetchQuery<OrganizationType[], Error>(FromTypes.ORGANISATIONS, _fetchOrganizations);
};
