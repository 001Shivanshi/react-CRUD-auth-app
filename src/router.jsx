import {createBrowserRouter} from "react-router-dom";
import NavigationPage from "./pages/navigation/NavigationPage.jsx";
import ArticlesPage from "./pages/articles/ArticlesPage.jsx";
import NewArticle from "./pages/articles/new-article/NewArticle.jsx";

const router= createBrowserRouter([
    {path: '/', element: <NavigationPage/>},
    {path: '/articles', element: <ArticlesPage/>},
    {path: '/articles/new', element: <NewArticle/>}
]);

export default router;