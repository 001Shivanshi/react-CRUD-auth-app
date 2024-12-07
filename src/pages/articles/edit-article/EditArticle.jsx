import {Button, Typography} from "@mui/material";
import {useNavigate, useParams} from "react-router-dom";
import {useFormik} from "formik";
import classes from "../new-article/NewArticle.module.css";
import {useContext, useEffect} from "react";
import {ArticleContext} from "../../../contexts/ArticleContext.jsx";

export default function EditArticle() {
    const {articleId} = useParams();
    const { articles, handleEditArticle } = useContext(ArticleContext);
    const navigate = useNavigate();

    const handleEdit = (values) => {
        handleEditArticle(articleId, values);
        navigate('/articles');
    }

    const articleForm = useFormik({
        initialValues: {
            title: '',
            description: ''
        },
        onSubmit: handleEdit
    })

    useEffect(() => {
        const articleObj = articles.find((article) => article.id === parseInt(articleId));
        if (articleObj) {
            articleForm.setValues({
                title: articleObj.title,
                description: articleObj.description
            })
        }
    }, [articleId]);


    return (
        <>
            <Typography variant="h3" className="text-center">Article Id: {articleId}</Typography>
            <form onSubmit={articleForm.handleSubmit} className={classes.formContainer}>
                <div className="form-group my-2">
                    <input
                        type="text"
                        value={articleForm.values.title}
                        name="title"
                        onChange={articleForm.handleChange}
                        className="form-control"
                        placeholder="Enter title"
                    />
                </div>
                <div className="form-group my-2">
                    <input
                        type="text"
                        value={articleForm.values.description}
                        name="description"
                        onChange={articleForm.handleChange}
                        className="form-control"
                        placeholder="Enter description"
                    />
                </div>
                <div className="d-flex justify-content-center">
                    <Button variant="contained" type="submit">Submit</Button>
                </div>
            </form>
        </>
    )
}