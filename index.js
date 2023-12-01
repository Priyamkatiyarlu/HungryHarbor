import React from "react";
import ReactDOM from "react-dom";

const parent=React.createElement("div",{className: "child"},[
    React.createElement("h1",{},"Teast heading"),
    React.createElement("h2",{},"Working Properly")
]);
const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);