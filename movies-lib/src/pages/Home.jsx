import { useState, useEffect } from "react";

const moviesUrl = import.meta.env.VITE_API
const apIKey = import.meta.env.VITE_API_KEY

export const Home = () => {

    const [topMovies, setTopMovies] = useState([])

    const getTopRatedMovies = async (url) => {

        const res = await fetch(url)
        const data = await res.json()

        console.log(data.results);
    };

    useEffect(() => {

        const topRatedUrl = `${moviesUrl}top_rated${apiKey}`

        console.log(topRatedUrl)

    }, [])

    return(

        <div>
            {topMovies && topMovies.map((movie) => <p>{movie.title}</p>)}
        </div>

    )

}