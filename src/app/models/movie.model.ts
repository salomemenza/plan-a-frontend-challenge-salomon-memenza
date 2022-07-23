export interface Movie {
    adult:                 boolean;
    backdrop_path:         null;
    belongs_to_collection: null;
    budget:                number;
    genres:                any[];
    homepage:              string;
    id:                    number;
    imdb_id:               null;
    original_language:     string;
    original_title:        string;
    overview:              string;
    popularity:            number;
    poster_path:           null;
    production_companies:  any[];
    production_countries:  any[];
    release_date:          Date;
    revenue:               number;
    runtime:               number;
    spoken_languages:      any[];
    status:                string;
    tagline:               string;
    title:                 string;
    video:                 boolean;
    vote_average:          number;
    vote_count:            number;
}