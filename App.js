import React from "react";
import ReactDOM from "react-dom/client";

// JSX (transpiled before it reaches the JS) - PARCEL - Babel

// JSX => Babel transpiled it to React.creatElement => ReactElement-JS Object => HTMLElements(render)

const jsxHeading = (
    <h1 className="head" tabIndex="5">
        Created using JSX
    </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
