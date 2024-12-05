import {Typography} from "@mui/material";
import classes from "./Article.module.css";

export default function Article({ article }) {
    return (
        <div className={classes.articleContainer}>
            <Typography variant="h4">{article.title}</Typography>
            <Typography variant="p">{article.description}</Typography>
        </div>
    )
}