import { createElement, Component, render } from './toy-react.js'
class MyComponent extends Component {
    constructor(){
        super();
        this.state = {
            a: 1,
            b: 2
        }
    }
    render(){
        return <div>
            <h1>my Component</h1>
            <button onclick={()=>{this.setState({a:this.state.a++})}}>add</button>
            <h1>{this.state.a.toString()}</h1>
            <h1>{this.state.b.toString()}</h1>
            {this.children}
        </div>
    }
}

render(<MyComponent id="a" class="c">
    <p>abc1</p>
    <h2>1</h2>
    <h3>2</h3>
</MyComponent>,document.body)