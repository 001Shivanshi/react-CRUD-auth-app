import {createBrowserRouter} from "react-router-dom";
import NavigationPage from "./pages/navigation/NavigationPage.jsx";
import ArticlesPage from "./pages/articles/ArticlesPage.jsx";
import NewArticle from "./pages/articles/new-article/NewArticle.jsx";
import {ArticleContext, ArticleContextProvider} from "./contexts/ArticleContext.jsx";
import EditArticle from "./pages/articles/edit-article/EditArticle.jsx";

const router= createBrowserRouter([
    {path: '/', element: <NavigationPage/>},
    {path: '/articles', element: (
        <ArticleContextProvider>
            <ArticlesPage/>
        </ArticleContextProvider>
        )},
    {path: '/articles/new', element: (
        <ArticleContextProvider>
            <NewArticle/>
        </ArticleContextProvider>
        )},
    {path: '/articles/edit-article/:articleId', element: (
        <ArticleContextProvider>
            <EditArticle/>
        </ArticleContextProvider>
        )}
]);

export default router;