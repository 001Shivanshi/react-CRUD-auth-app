import {createContext, useState} from "react";
import {generateUniqueId} from "../utils.js";

const ArticleContext = createContext();

const ArticleContextProvider = ({children}) => {
    const [articles, setArticles] = useState([]);

    const handleAddArticle = (articleData) => {
        setArticles((prevState) => {
            const temp = {id: generateUniqueId(), ...articleData}
            return [
                ...prevState,
                temp
            ]
        })
    }

    const handleDeleteArticle = (articleId) => {
        setArticles((prevState) => {
            const temp = [...prevState];
            return temp.filter((article) => article.id !== articleId)
            // return prevState.filter((article) => article.id !== articleId)
        })
    }

    const handleEditArticle = (articleId, updatedArticleObj) => {
        setArticles((prevState) => {
            const temp = [...prevState];
            const index = temp.findIndex((article) => article.id === parseInt(articleId));
            temp[index].title = updatedArticleObj.title;
            temp[index].description = updatedArticleObj.description;
            return temp;
        })
    }
    return (
        <ArticleContext.Provider value={{articles, setArticles, handleAddArticle, handleDeleteArticle, handleEditArticle}}>
            {children}
        </ArticleContext.Provider>
    )
}

export {ArticleContext, ArticleContextProvider};