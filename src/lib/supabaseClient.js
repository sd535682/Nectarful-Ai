import 'react-native-url-polyfill/auto';
import {createClient} from '@supabase/supabase-js';
import Config from 'react-native-config';

const url = Config.SUPABASE_URL;
const apiKey = Config.SUPABASE_KEY;
export const supabase = createClient(url, apiKey);
