import 'react-native-url-polyfill/auto'
import { createClient } from '@supabase/supabase-js'

const url = process.env.EXPO_PUBLIC_URL
const apiKey = process.env.EXPO_PUBLIC_AUTHKEY
const smoothieAPI = process.env.EXPO_PUBLIC_SMOOTHIEAPI
const smoothieURL = process.env.EXPO_PUBLIC_SMOOTHIEURL
export const supabase = createClient(url, apiKey, smoothieAPI, smoothieURL)