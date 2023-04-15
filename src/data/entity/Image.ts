export default interface Image {
    animated: boolean;
    aspect_ratio: number;
    comment_count: number;
    created_at: string; // Use a Date type for this if you're using a library like moment.js
    deletion_reason: string | null;
    description: string;
    downvotes: number;
    duplicate_of: number | null;
    duration: number;
    faves: number;
    first_seen_at: string; // Use a Date type for this if you're using a library like moment.js
    format: 'gif' | 'jpg' | 'jpeg' | 'png' | 'svg' | 'webm';
    height: number;
    hidden_from_users: boolean;
    id: number;
    intensities: object | null;
    mime_type: 'image/gif' | 'image/jpeg' | 'image/png' | 'image/svg+xml' | 'video/webm';
    name: string;
    orig_sha512_hash: string;
    processed: boolean;
    representations: {
        full: string;
        large: string;
        medium: string;
        small: string;
        tall: string;
        thumb: string;
        thumb_small: string;
        thumb_tiny: string;
    };
    score: number;
    sha512_hash: string;
    size: number;
    source_url: string;
    spoilered: boolean;
    tag_count: number;
    tag_ids: number[];
    tags: string[];
    thumbnails_generated: boolean;
    updated_at: string; // Use a Date type for this if you're using a library like moment.js
    uploader: string;
    uploader_id: number | null;
    upvotes: number;
    view_url: string;
    width: number;
    wilson_score: number;
}

