import {Button, Typography} from "@mui/material";
import classes from "./Article.module.css";
import {useContext} from "react";
import {ArticleContext} from "../../contexts/ArticleContext.jsx";
import {useNavigate} from "react-router-dom";

export default function Article({ article }) {
    const {handleDeleteArticle} = useContext(ArticleContext);
    const navigate = useNavigate();

    const deleteArticle = () => {
        if (confirm('Are you sure you want to delete this article')) {
            handleDeleteArticle(article.id);
        }
    }

    const redirectToEditArticlePage = (articleId) => {
        navigate(`/articles/edit-article/${articleId}`)
    }

    return (
        <div className={classes.articleContainer}>
            <div>
                <Typography variant="h4">{article.title}</Typography>
                <Typography variant="p">{article.description}</Typography>
            </div>

            <div>
                <Button
                    variant="contained"
                    color="error"
                    onClick={deleteArticle}
                    className="mx-2"
                >Delete</Button>
                <Button
                    variant="contained"
                    onClick={() => redirectToEditArticlePage(article.id)}
                >Edit</Button>
            </div>
        </div>
    )
}