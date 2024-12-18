import {Button, Typography} from "@mui/material";
import {useFormik} from "formik";
import classes from "./NewArticle.module.css";
import {useContext} from "react";
import {ArticleContext} from "../../../contexts/ArticleContext.jsx";
import {useNavigate} from "react-router-dom";

export default function NewArticle() {
    const { handleAddArticle } = useContext(ArticleContext);
    const navigate = useNavigate();
    const initialValues = {
        title: '',
        description: ''
    };

    const handleFormSubmit = (values) => {
        console.log(values);
        handleAddArticle(values);
        navigate('/articles');
    }

    const articleForm = useFormik({
        initialValues: initialValues,
        onSubmit: handleFormSubmit
    });

    return (
        <>
            <Typography variant="h3">New Article</Typography>
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