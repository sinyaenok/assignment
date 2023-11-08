import React from "react";
import ReactDOM from "react-dom/client";

//전역 스타일
import GlobalStyles from "./style/GlobalStyle";

//라우터
import { BrowserRouter } from "react-router-dom";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter>
    <GlobalStyles />
    <App />
  </BrowserRouter>
  // </React.StrictMode>
);
