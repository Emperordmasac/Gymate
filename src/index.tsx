import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";
import App from "./App";

//--EXTERNAL IMPORT
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
