// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://kwibkgzrzvudttfkbrcv.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt3aWJrZ3pyenZ1ZHR0ZmticmN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU1Mzc2NjUsImV4cCI6MjA1MTExMzY2NX0.6_XCQdBlyrzBjKJZCTD6p5I1-Vt29w5aqKTKBkrnwo4";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);