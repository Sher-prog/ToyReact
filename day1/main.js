import { createElement, Component, render } from './toy-react.js'
class MyComponent extends Component {
    render(){
        return <div>
            <h1>my Component</h1>
            {this.children}
        </div>
    }
}

// todo:1
// let a = <div id="b" class="c"/>
// todo:2
// window.a = <div id="b" class="c">
//     <div>abc</div>
//     <div></div>
// </div>
// todo:3
// document.body.appendChild(<div id="b" class="c">
//     <div>abc</div>
//     <div></div>
// </div>)
// todo:4
// document.body.appendChild(<myComponent id="b" class="c">
//     <div>abc</div>
//     <div></div>
// </myComponent>)
// todo:5
render(<MyComponent id="a" class="c">
    <p>abc1</p>
    <h2>1</h2>
    <h3>2</h3>
</MyComponent>,document.body)