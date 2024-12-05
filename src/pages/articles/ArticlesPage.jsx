import {Button, Typography} from "@mui/material";
import {useState} from "react";
import Article from "../../components/article/Article.jsx";

export default function ArticlesPage() {
    const [articles, setArticles] = useState([
        {id: 1733331664323, title: 'First article', description: 'First description'},
        {id: 1733331756850, title: 'Second article', description: 'Second description'}
    ])

    return (
        <>
            <Typography variant="h3" className="text-center">List of articles</Typography>
            <div className="d-flex justify-content-end">
                <Button variant="contained">Create</Button>
            </div>

            {articles.map((article) => (
                <Article article={article} key={article.id}/>
            ))}

        </>
    )
}
