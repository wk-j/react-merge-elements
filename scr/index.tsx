import React from "react"
import ReactDOM from "react-dom"

var el = document.getElementById("root")

class App extends React.Component<{}, {}> {
    render() {
        var c = true
        var a = c ?
            [
                <h1>4</h1>
            ] : [
                <h1>4</h1>,
                <h1>5</h1>
            ]
        var elements = [
            <h1>1</h1>,
            <h1>2</h1>,
            <h1>3</h1>,
            ...a
        ]
        return elements;
    }
}

ReactDOM.render(<App />, el);