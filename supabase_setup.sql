-- ==============================================================================
-- SUPABASE BACKEND SETUP FOR WE ARE YOUTH FOUNDATION
-- Run this entire script in the Supabase SQL Editor
-- ==============================================================================

-- 1. Create Tables

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  message text not null,
  created_at timestamptz default now()
);

CREATE TABLE IF NOT EXISTS gallery_items (
  id uuid primary key default gen_random_uuid(),
  file_name text not null,
  file_url text not null,
  file_type text not null,
  uploaded_at timestamptz default now()
);

CREATE TABLE IF NOT EXISTS volunteer_applications (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  phone text not null,
  age integer not null,
  city text not null,
  area_of_interest text not null,
  availability text not null,
  message text,
  status text default 'pending',
  submitted_at timestamptz default now()
);

-- ==============================================================================
-- 2. Enable Row Level Security (RLS)
-- ==============================================================================

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE volunteer_applications ENABLE ROW LEVEL SECURITY;

-- ==============================================================================
-- 3. RLS Policies
-- ==============================================================================

-- contact_submissions: Anyone can insert, only authenticated users (admins) can view/edit/delete
CREATE POLICY "Allow public insert to contact_submissions" 
ON contact_submissions FOR INSERT TO public WITH CHECK (true);

CREATE POLICY "Allow admins full access to contact_submissions" 
ON contact_submissions FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- volunteer_applications: Anyone can insert, only authenticated users (admins) can view/edit/delete
CREATE POLICY "Allow public insert to volunteer_applications" 
ON volunteer_applications FOR INSERT TO public WITH CHECK (true);

CREATE POLICY "Allow admins full access to volunteer_applications" 
ON volunteer_applications FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- gallery_items: Anyone can view, only authenticated users (admins) can insert/update/delete
CREATE POLICY "Allow public select on gallery_items" 
ON gallery_items FOR SELECT TO public USING (true);

CREATE POLICY "Allow admins full access to gallery_items" 
ON gallery_items FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- ==============================================================================
-- 4. Storage Bucket Setup
-- ==============================================================================

-- Insert the 'gallery' bucket if it doesn't exist
INSERT INTO storage.buckets (id, name, public)
VALUES ('gallery', 'gallery', true)
ON CONFLICT (id) DO NOTHING;

-- Storage Policies for 'gallery' bucket

-- Give public read access
CREATE POLICY "Allow public read access to gallery"
ON storage.objects FOR SELECT TO public USING (bucket_id = 'gallery');

-- Give authenticated users (admins) insert access
CREATE POLICY "Allow admins insert to gallery"
ON storage.objects FOR INSERT TO authenticated WITH CHECK (bucket_id = 'gallery');

-- Give authenticated users (admins) update access
CREATE POLICY "Allow admins update to gallery"
ON storage.objects FOR UPDATE TO authenticated USING (bucket_id = 'gallery');

-- Give authenticated users (admins) delete access
CREATE POLICY "Allow admins delete to gallery"
ON storage.objects FOR DELETE TO authenticated USING (bucket_id = 'gallery');
