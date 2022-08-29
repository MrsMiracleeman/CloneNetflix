import axios, { Axios } from 'axios'
 

const apiKey = "f4e359f79f35012fed38f794dd123ba0"
const apiBase = "https://api.themoviedb.org/3"


/*
    - Originais da Netflix
    - Recomendados para você (trending)
    - Em alta (top rated)
    - Comédia
    - Terror
    - Romance
    - Documentários
*/

const basicUrl = async (endpoint) =>{
    const req = await fetch(`${apiBase}${endpoint}`)
    const resposta = await req.json()
    return resposta
}




export default {
    getBase : async () =>{
        return [
            {
                slug:'originals',
                title: 'Originais Netflix',
                items:await basicUrl(`/discover/tv?with_network=213&language=pt-BR&api_key=${apiKey}`)
            },
            {
                slug:'trending',
                title: 'Recomentados para você',
                items:await basicUrl(`/trending/all/week?language=pt-BR&api_key=${apiKey}`)
            },
            {
                slug:'toprated',
                title: 'Em alta',
                items:await basicUrl(`/movie/top_rated?language=pt-BR&api_key=${apiKey}`)
            },
            {
                slug:'comedy',
                title: 'Comédia',
                items: await basicUrl(`/discover/movie?with_genres=35&language=pt-BR&api_key=${apiKey}`)
            },
            {
                slug:'action',
                title: 'Ação',
                items: await basicUrl(`/discover/movie?with_genres=28&language=pt-BR&api_key=${apiKey}`)
            },
            {
                slug:'horror',
                title: 'Terror',
                items: await basicUrl(`/discover/movie?with_genres=27&language=pt-BR&api_key=${apiKey}`)
            },
            {
                slug:'romance',
                title: 'Romance',
                items: await basicUrl(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${apiKey}`)
            },
            {
                slug:'documentary',
                title: 'Documentarios',
                items: await basicUrl(`/discover/movie?with_genres=99&language=pt-BR&api_key=${apiKey}`)
            },

        ]    
    },
    getMovieInfo : async(movieId,type) =>{
        let info = {}
        if(movieId){
            switch(type){
                case 'movie':
                    info = await basicUrl(`/movie/${movieId}?language=pt-BR&api_key=${apiKey}`)
                break;

                case 'tv' :
                    info = await basicUrl(`/tv/${movieId}?language=pt-BR&api_key=${apiKey}`)
                break;
            
            }
        }
    }

}