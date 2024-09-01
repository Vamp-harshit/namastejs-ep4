const parent = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, React.createElement("h1", {
    id: "heading2"
}, "I AM AN H1 TAG")));
const heading = React.createElement("h1", {
    id: "heading"
}, "hello word from react");
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map
