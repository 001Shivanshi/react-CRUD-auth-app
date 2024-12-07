import {Button, Typography} from "@mui/material";
import {useContext, useEffect, useState} from "react";
import Article from "../../components/article/Article.jsx";
import {Link} from "react-router-dom";
import {ArticleContext} from "../../contexts/ArticleContext.jsx";


export default function ArticlesPage() {
    const {articles, setArticles} = useContext(ArticleContext);

    useEffect(() => {
        setArticles([
            {id: 1733331664323, title: 'First article', description: 'First description'},
            {id: 1733331756850, title: 'Second article', description: 'Second description'}
        ])
    }, []);

    return (
        <>
            <Typography variant="h3" className="text-center">List of articles</Typography>
            <div className="d-flex justify-content-end">
                <Link to="/articles/new">
                    <Button variant="contained">Create</Button>
                </Link>
            </div>

            {articles.map((article) => (
                <Article article={article} key={article.id}/>
            ))}

        </>
    )
}
