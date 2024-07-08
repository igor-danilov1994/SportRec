import {createClient} from "@supabase/supabase-js";

const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL || '';
const SUPABASE_KEY = process.env.REACT_APP_SUPABASE_KEY || '';

export const _supabase =  createClient(SUPABASE_URL, SUPABASE_KEY);

export enum FromTypes {
    POSTS = 'posts',
    LIVE_STREAM = 'live_streams',
    MARKETPLACE = 'marketplace',
    ORGANISATIONS = 'organisations',
    RATINGS = 'ratings',
    COMPETITIONS = 'competitions'
}

export async function getDataWithSupabase<T> (from: FromTypes, filter = '*'): Promise<T | []>  {
    const { data, error } = await _supabase.from(from).select(filter).returns<T>();
    if (error) {
        throw new Error(error.message);
    }

    return data ?? [] ;
}
