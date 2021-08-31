export interface BPost{
    id: string,
    user: string,
    picture: string,
    likes: Number,
    rating: Number,
    description: String,
    location: String,
    liked?: Boolean
}