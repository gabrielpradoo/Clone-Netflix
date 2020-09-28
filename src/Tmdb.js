const API_KEY = '2897aa0e912d3344189f5a2b8efa7c70';
const API_BASE = 'https://api.themoviedb.org/3';

/*
- Originais da netflix
- Recomendados (trending)
- Em alta (top rated)
- Ação
- Comédia
- Terror
- Romance
- Documentários
*/ 

const basicFetch = async (endpoint) => {
   const req = await fetch(`${API_BASE}${endpoint}`);
   const json = await req.json();
   return json;
}

export default {
   getHomeList: async () => {
      return [
         {
            slug: 'originals',
            title: 'Originais do Netflix',
            items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
         },
         {
            slug: 'trending',
            title: 'Recomendados para Você',
            items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
         },
         {
            slug: 'top_rated',
            title: 'Em Alta',
            items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
         },
         {
            slug: 'Action',
            title: 'Ação',
            items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
         },
         {
            slug: 'Comedy',
            title: 'Comedia',
            items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
         },
         {
            slug: 'Horror',
            title: 'Terror',
            items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
         },
         {
            slug: 'Romance',
            title: 'Romance',
            items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
         },
      ]
   },

   getMovieInfo: async (movieId, type) => {
      let info = {};

      if (movieId) {
         // eslint-disable-next-line default-case
         switch (type) {
            case 'movie':
               info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`)
            break;
            case 'tv':
               info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`)
            break;
         }
      }

      return info;
   }
}