import React, { useEffect, useState } from 'react';

function API_Popular() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        let API_KEY = process.env.REACT_APP_API_KEY;

        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=fr-FR&page=1`)
        .then(res => res.json())

        .then(
            (result) => {
                setIsLoaded(true);
                setItems(result.results);

                result.results.forEach((element: any) => {
                    console.log(element.original_title);
                });
            },

            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, []);

    return (
        <div className="API_Popular">
            <h1>API_Popular</h1>
        </div>
    )
}

export default API_Popular;