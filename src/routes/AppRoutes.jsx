import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import Layout from '../Layout';
import Home from "../pages/Home";
import Contato from "../pages/Contato";
import Projetos from "../pages/Projetos";
import SobreMim from "../pages/SobreMim";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: "contato", element: <Contato /> },
            { path: "projetos", element: <Projetos /> },
            { path: "sobremim", element: <SobreMim /> }
        ]
    }
])