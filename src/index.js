import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";

import * as ReactDOMClient from "react-dom/client";
import { FormProvider } from "./Context/FormContext";

const container = document.getElementById("root");

const root = ReactDOMClient.createRoot(container);
root.render(
  <FormProvider>
    <App />
  </FormProvider>
);
