const heading=React.createElement("h2",{
    id:"heading",axy:"abc"
},"Hello World in  React Without Using React ") //This is just and object
// Create nested react structure
const parent=React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"Hi I am h1 tag"),
        React.createElement("h2",{},"I am h2 tag")
    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"This is another h1"),
        React.createElement("h2",{},"This is another h2")
    ])
])
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(parent) //Take the object and put it over there