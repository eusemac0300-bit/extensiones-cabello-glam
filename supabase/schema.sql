-- Create the MarketingCampaigns table
CREATE TABLE IF NOT EXISTS MarketingCampaigns (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    campaign_name VARCHAR(255),
    source_image_url TEXT NOT NULL,
    hair_technique VARCHAR(50) NOT NULL, -- Enum: 'Punto Americano', 'Microchip', etc.
    content_type VARCHAR(50) NOT NULL,   -- Enum: 'Reel_Script', 'Carousel_Transform', etc.
    generated_content JSONB,             -- Structured response from OpenAI
    status VARCHAR(20) DEFAULT 'Generated'
);

-- Optional: Enable Row Level Security (RLS) if needed
ALTER TABLE MarketingCampaigns ENABLE ROW LEVEL SECURITY;

-- Allow anonymous access for the demo if preferred (or restrict to service role)
CREATE POLICY "Allow public select access" ON MarketingCampaigns FOR SELECT USING (true);
CREATE POLICY "Allow service role insert" ON MarketingCampaigns FOR INSERT WITH CHECK (true);
