  import { createClient } from "https://esm.sh/@supabase/supabase-js";

const supabaseUrl = 'https://sgyvxblwmkzzdnbgoeaj.supabase.co';
const supabaseKey = 'sb_publishable_v1xIGfGuo8sqAh8nMKdErg_tlcRuvbQ';
const supabase = createClient(supabaseUrl, supabaseKey);

 export default supabase;