/**
 * <div>
 * <div>child<div>
 * <h1>heading</h1>
 * <div>child2</div>
 * <h2></h2>
 * <div>
 */


const parent = React.createElement("div",{id :'parent'},
[React.createElement('div',{id: 'child'},
[React.createElement('h1',{id:'heading'}, "I am h1 tag"),
React.createElement('h2',{id:'heading2'}, "I am h2 tag")])
)

const heading = React.createElement("h1",{id: 'heading'},"Hello from react")
    const root = ReactDOM.createRoot(document.getElementById("root"))
    root.render(parent)
    console.log(parent)

