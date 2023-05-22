import { Suspense } from "react";
import {BrowserRouter} from "react-router-dom";
import React from "react";

export const withRouter = (component: () => React.ReactNode) => () => (
    <BrowserRouter>
        <Suspense fallback="Loading...">
            {component()}
        </Suspense>
    </BrowserRouter>
);