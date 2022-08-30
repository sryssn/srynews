import { useEffect, useState } from "react";

export default function CariBerita() {
    const [search, setSearch] = useState('');
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [notFound, setNotFound] = useState(false);

    useEffect(function() {
        document.title = 'Cari Berita';
    },[]);
    
    function addToDoHandler(event) {
        event.preventDefault();
        setLoading(true);
        setNotFound(false);
        async function getArticles() {
            const request = await fetch(`https://newsapi.org/v2/top-headlines?q=${search}&country=id&apiKey=89b7e6e201254e0693855f267536386e`);
            const responseArticles = await request.json();
            const totalResults = responseArticles.totalResults;
            if(totalResults === 0) {
                setLoading(false);
                return setNotFound(true);
            }
            const response = responseArticles.articles;
            console.log(response);
            setArticles(response);
            setLoading(false);
        }
        getArticles();
    }

    return (
        <section className="container">
            <h2 className="my-3">Cari Berita</h2>
            <div className="container col-lg-4 col-md-6 mb-4">
                <form
                    className="d-flex justify-content-center mx-3"
                    role="search"
                    onSubmit={(event) => addToDoHandler(event)}
                    >
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Cari Berita"
                        aria-label="Cari Berita"
                        onChange={function(event) {
                            setSearch(event.target.value);
                        }}></input>
                    <button className="btn btn-outline-info" type="submit">Cari</button>
                </form>
            </div>
            {loading ? (
                <div className="spinner-border text-info" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            ) : notFound ? (<h3>Maaf, berita tidak ditemukan.</h3>) : (
                <div className="row row-cols-1 row-cols-md-3 g-4 mx-3">
                {articles.map(function (article) {
                                    return (
                                        <div className="col">
                                            <div className="card" key={article.publishedAt}>
                                                <a href={article.url} target="_blank" rel="noreferrer">
                                                    <img src={article.urlToImage} className="card-img-top img-fluid" alt={articles.title} loading="lazy"></img>
                                                </a>
                                                <div className="card-body">
                                                    <a href={article.url} target="_blank" rel="noreferrer" className="link-light">
                                                        <h5 className="card-title text-dark">{article.title}</h5>
                                                    </a>
                                                    <div className="card-footer bg-white">
                                                        <small className="text-muted">{new Date(article.publishedAt).toString()}</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                            })}
                </div>
            )
            }
        </section>
        )
}