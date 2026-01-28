-- Create users table to store leaderboard participants
CREATE TABLE IF NOT EXISTS users (
    id BIGSERIAL PRIMARY KEY,
    display_name TEXT NOT NULL,
    username TEXT UNIQUE NOT NULL,
    stats JSONB NOT NULL DEFAULT '{"totalSolved": 0, "easy": 0, "medium": 0, "hard": 0}',
    last_updated TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    added_date TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Create policy for public access
CREATE POLICY "Allow all operations on users" ON users
    FOR ALL USING (true);