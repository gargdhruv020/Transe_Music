-- ====================================================================
-- DATABASE MIGRATION: 002_user_liked_songs.sql
-- Description: User-specific, isolated "Liked Songs" mapping with RLS.
-- ====================================================================

-- 1. Create table mapping authenticated user IDs to their personal liked songs
CREATE TABLE IF NOT EXISTS user_liked_tracks (
    id SERIAL PRIMARY KEY,
    user_id UUID NOT NULL,
    track_id INTEGER NOT NULL REFERENCES tracks(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT uq_user_track_like UNIQUE (user_id, track_id)
);

-- 2. Indexes for high-performance lookups
CREATE INDEX IF NOT EXISTS idx_user_liked_tracks_user_id ON user_liked_tracks(user_id);
CREATE INDEX IF NOT EXISTS idx_user_liked_tracks_track_id ON user_liked_tracks(track_id);

-- 3. Row-Level Security (RLS) Policy to ensure complete privacy & isolation
ALTER TABLE user_liked_tracks ENABLE ROW LEVEL SECURITY;

-- Allow users to SELECT only their personal likes
CREATE POLICY "user_select_own_likes"
    ON user_liked_tracks
    FOR SELECT
    USING (
        user_id = auth.uid() 
        OR user_id = NULLIF(current_setting('request.jwt.claim.sub', true), '')::uuid
    );

-- Allow users to INSERT likes only for themselves
CREATE POLICY "user_insert_own_likes"
    ON user_liked_tracks
    FOR INSERT
    WITH CHECK (
        user_id = auth.uid() 
        OR user_id = NULLIF(current_setting('request.jwt.claim.sub', true), '')::uuid
    );

-- Allow users to DELETE only their personal likes
CREATE POLICY "user_delete_own_likes"
    ON user_liked_tracks
    FOR DELETE
    USING (
        user_id = auth.uid() 
        OR user_id = NULLIF(current_setting('request.jwt.claim.sub', true), '')::uuid
    );
