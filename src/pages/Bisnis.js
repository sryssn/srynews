import { useEffect, useState } from "react";

export default function Bisnis() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(function () {
        document.title = 'Bisnis';
        async function getArticles() {
            const request = await fetch('https://newsapi.org/v2/top-headlines?country=id&category=business&apiKey=89b7e6e201254e0693855f267536386e');
            const responseArticles = await request.json();
            const response = responseArticles.articles;

            setArticles(response);
            setLoading(false);
        }
        getArticles();
    }, []);

    return (
        <section className="container">
            <h2 className="my-3">Bisnis</h2>
            {loading ? (
                <div className="spinner-border text-info" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            ) : ( 
                <>
                    <div id="carouselExampleDark" class="carousel carousel-dark slide mb-4" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                        {articles.map(function(article, index) {
                            if( index < 3 ) {
                                if( index === 0 ) {
                                    return (
                                        <div class="carousel-item active">
                                            <a href={article.url} target="_blank" rel="noreferrer">
                                                <img src={article.urlToImage} className="w-100" alt={article.title} loading="lazy"></img>    
                                            </a>
                                            <div class="carousel-caption">
                                            <a href={article.url} target="_blank" rel="noreferrer" className="link-light">
                                                <h5 className="text-bg-light p-1">{article.title}</h5>
                                            </a>
                                            </div>
                                        </div>
                                    )
                                } else if( index === 1 || index === 2 ) {
                                    return (
                                        <div class="carousel-item">
                                            <a href={article.url} target="_blank" rel="noreferrer">
                                                <img src={article.urlToImage} className="w-100" alt={article.title} loading="lazy"></img>    
                                            </a>
                                            <div class="carousel-caption">
                                            <a href={article.url} target="_blank" rel="noreferrer" className="link-light">
                                                <h5 className="text-bg-light p-1">{article.title}</h5>
                                            </a>
                                            </div>
                                        </div>
                                    )
                                } 
                            } 
                        })}
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div className="row row-cols-1 row-cols-md-3 g-4 mx-3">
                        {articles.map(function (article, index) {
                            if( index > 2 ) {
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
                            }
                        })}
                    </div>
                </>
            )
        }
        </section>
    );
}