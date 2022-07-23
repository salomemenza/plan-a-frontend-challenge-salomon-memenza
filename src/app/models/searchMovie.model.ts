import { Movie } from "./movie.model";

export interface SearchMovie {
    page: Number,
    results: Movie[],
    total_pages: Number,
    total_results: Number
}