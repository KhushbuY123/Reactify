import React from "react";
import  ReactDOM  from "react-dom/client";

//React.CreateElement=> ReactElement.JS object =HTMLElement(rendor)

// const heading =React.createElement("h1",{id:"heading"},"Namaste React 🚀")
// const root=ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)

// JSX =>React.CreateElement

// JSX (transpile before it reaches the js engine) by parcel -babel job(package)

const JsxHeading=()=>{
<h1 className="head" tabIndex="5">
    Namaste React Using JSX 🚀
</h1>
};
// root.render(jsxHeading)


// Functional Component 
const HeadingComponent=()=>
   (
    <div id="container">
        {/* // Another way to render */}
        {JsxHeading()}  
        <h1 className="heading">React Functional Component</h1>
    </div>
   );

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>)
// Also we can write it as :

// const New=()=><h1>hi</h1>


// const parent=React.createElement("div",{id:"parent"},[[
//     React.createElement("h1",{key:"i1"},"hi react"),
//     React.createElement("h2",{key:"i2"},"hye react2")
// ],
// [
//     React.createElement("h1",{key:"i3"},"hi react"),
//     React.createElement("h2",{key:"i4"},"hye react2")
// ]
// ]);
// const root=ReactDOM.createRoot(document.getElementById("root"))
// root.render(parent)