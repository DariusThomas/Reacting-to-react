import React, {Component} from "react"

/*
function App(props) {
return(
    <h1>{props.text}</h1>
)
}
*/

class App extends Component{
    constructor(){
        super();
        this.state={
            text: "Welcome to my first React app.",
            placeHolder: "Enter text here",
            inputText: '',
            hasLoaded: false,
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleClick=this.handleClick.bind(this);
    }
    handleChange(e){
        this.setState({
            inputText: e.target.value
        })
    }
    handleClick(){
        if(this.state.hasLoaded){
            this.setState({
                hasLoaded: false
            })
        } else if(!this.state.hasLoaded){
            this.setState({
                hasLoaded:true
            })
        }
    }

    render(){
        if(this.state.hasLoaded){
        return(
            <React.Fragment>
            <h1>{this.props.text} {this.state.text}</h1>
            <input type = "text" value={this.state.inputText} onChange ={this.handleChange} placeholder={this.state.placeHolder}/>
            <h2>{this.state.inputText}</h2>
            <button onClick={this.handleClick}>Load</button>
            </React.Fragment>
        )
    }else if(!this.state.hasLoaded){
        return(
            <React.Fragment>
                <h1>Loading...</h1>
                <button onClick={this.handleClick}>Load</button>
            </React.Fragment>
        )
    }
    }
}


export default App 