import {Button, Typography} from "@mui/material";
import {useFormik} from "formik";
import classes from "./NewArticle.module.css";

export default function NewArticle() {
    const initialValues = {
        title: '',
        description: ''
    };

    const handleFormSubmit = (values) => {
        console.log(values);
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
                        value={articleForm.title}
                        name="title"
                        onChange={articleForm.handleChange}
                        className="form-control"
                        placeholder="Enter title"
                    />
                </div>
                <div className="form-group my-2">
                    <input
                        type="text"
                        value={articleForm.description}
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