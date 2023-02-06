// AuthPage.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://pyhurtrdrdnbehkndyjh.supabase.co'
const supabaseKey = process.env.REACT_APP_SUPA_KEY
const supabase = createClient(
    supabaseUrl,
    supabaseKey
)

export default supabase;
