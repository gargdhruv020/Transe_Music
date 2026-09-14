-- ====================================================================
-- DATABASE MIGRATION: 001_enforce_unique_songs.sql
-- Description: Audit and enforce strict uniqueness constraints on songs.
-- Deduplicates existing duplicate records and prevents future duplicates.
-- ====================================================================

-- 1. Create tracks table if not exists with proper types
CREATE TABLE IF NOT EXISTS tracks (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    artist VARCHAR(255) NOT NULL,
    film VARCHAR(255) DEFAULT 'Remix',
    slug VARCHAR(255) NOT NULL,
    youtube_id VARCHAR(64),
    audio_url TEXT,
    start_seconds INTEGER DEFAULT 0,
    is_spatial BOOLEAN DEFAULT FALSE,
    is_global BOOLEAN DEFAULT FALSE,
    is_goa BOOLEAN DEFAULT FALSE,
    is_remix BOOLEAN DEFAULT FALSE,
    is_ktrance BOOLEAN DEFAULT FALSE,
    is_indo_house BOOLEAN DEFAULT FALSE,
    is_sufi BOOLEAN DEFAULT FALSE,
    is_afro BOOLEAN DEFAULT FALSE,
    is_ea_afro BOOLEAN DEFAULT FALSE,
    is_x BOOLEAN DEFAULT FALSE,
    is_club BOOLEAN DEFAULT FALSE,
    is_hustle BOOLEAN DEFAULT FALSE,
    hustle_season VARCHAR(16),
    hustle_num INTEGER,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. Clean up & Deduplicate existing records:
-- Merge playlist flags and delete duplicate records, keeping the oldest/primary record
WITH duplicates_to_merge AS (
    SELECT 
        slug,
        BOOL_OR(is_spatial) AS merged_spatial,
        BOOL_OR(is_global) AS merged_global,
        BOOL_OR(is_goa) AS merged_goa,
        BOOL_OR(is_remix) AS merged_remix,
        BOOL_OR(is_ktrance) AS merged_ktrance,
        BOOL_OR(is_indo_house) AS merged_indo_house,
        BOOL_OR(is_sufi) AS merged_sufi,
        BOOL_OR(is_afro) AS merged_afro,
        BOOL_OR(is_ea_afro) AS merged_ea_afro,
        BOOL_OR(is_x) AS merged_x,
        BOOL_OR(is_club) AS merged_club,
        BOOL_OR(is_hustle) AS merged_hustle,
        MIN(id) AS primary_id
    FROM tracks
    GROUP BY slug
    HAVING COUNT(*) > 1
)
UPDATE tracks t
SET 
    is_spatial = m.merged_spatial,
    is_global = m.merged_global,
    is_goa = m.merged_goa,
    is_remix = m.merged_remix,
    is_ktrance = m.merged_ktrance,
    is_indo_house = m.merged_indo_house,
    is_sufi = m.merged_sufi,
    is_afro = m.merged_afro,
    is_ea_afro = m.merged_ea_afro,
    is_x = m.merged_x,
    is_club = m.merged_club,
    is_hustle = m.merged_hustle
FROM duplicates_to_merge m
WHERE t.id = m.primary_id;

-- Delete duplicate rows (retaining the primary row with MIN(id) for each slug)
DELETE FROM tracks
WHERE id NOT IN (
    SELECT MIN(id)
    FROM tracks
    GROUP BY slug
);

-- Deduplicate any duplicate audio source entries (YouTube video ID)
DELETE FROM tracks
WHERE youtube_id IS NOT NULL AND id NOT IN (
    SELECT MIN(id)
    FROM tracks
    WHERE youtube_id IS NOT NULL
    GROUP BY youtube_id
);

-- 3. Enforce Unique Constraints & Indexes:
-- Prevent duplicate song titles/slugs from ever being inserted again
CREATE UNIQUE INDEX IF NOT EXISTS uq_tracks_slug ON tracks (slug);

-- Prevent duplicate audio sources / YouTube video IDs
CREATE UNIQUE INDEX IF NOT EXISTS uq_tracks_youtube_id ON tracks (youtube_id) 
WHERE youtube_id IS NOT NULL AND youtube_id != '';

-- 4. Sample Query Enforcement:
-- Fetch distinct songs per playlist tab with deduplication:
-- SELECT DISTINCT ON (slug) * FROM tracks WHERE is_club = TRUE ORDER BY slug, id ASC;
