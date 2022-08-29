import React from "react";
import './filmeDestaque.css'

export default ({item})=>{

    let firstDate = new Date(item.first_air_date)
    let genres = []
    for(let i in item.genres){
        genres.push(item.genres[i].name)
    }


    return(
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }} >
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{item.original_name}</div>
                    <div className="featured--info">
                        <div className="featured--points">{item.vote_average} Pontos</div>
                        <div className="featured--year">Primeira exibição: {firstDate.getFullYear()}</div>
                        <div className="featured--seasons">Popularidade: {item.popularity}</div>                       
                    </div>
                    <div className="featured--description">{item.overview}</div>
                    <div className="featured--buttons">
                        <a href="" className="featured--watchbutton">► Assistir</a>
                        <a href="" className="featured--mylist">+ Minha lista</a>
                    </div>

                </div>
                
            </div>
        </section>
    )

}