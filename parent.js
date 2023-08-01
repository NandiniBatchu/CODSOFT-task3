import React, {Component} from 'react';
export class Parent extends Component{
    constructor(props){
        super(props)
        this.state={
            inp:" "
        }
    }
    render(){
     return(
        <div class="box">
            <div class="con1">
            <input type='text' value={this.state.inp}/>
            </div>
            <br></br>
            <div class="con2">
            <button onClick={()=>{this.setState({inp:this.state.inp+'1'})}}>1</button>
            <button onClick={()=>{this.setState({inp:this.state.inp+'2'})}}>2</button>
            <button onClick={()=>{this.setState({inp:this.state.inp+'3'})}}>3</button>
            <br></br>
            <button onClick={()=>{this.setState({inp:this.state.inp+'4'})}}>4</button>
            <button onClick={()=>{this.setState({inp:this.state.inp+'5'})}}>5</button>
            <button onClick={()=>{this.setState({inp:this.state.inp+'6'})}}>6</button>
            <br></br>
            <button onClick={()=>{this.setState({inp:this.state.inp+'7'})}}>7</button>
            <button onClick={()=>{this.setState({inp:this.state.inp+'8'})}}>8</button>
            <button onClick={()=>{this.setState({inp:this.state.inp+'9'})}}>9</button>
            <br></br>
            <button onClick={()=>{this.setState({inp:eval(this.state.inp)})}}>=</button>
            <button onClick={()=>{this.setState({inp:this.state.inp+'0'})}}>0</button>
            <button onClick={()=>{this.setState({inp:this.state.inp+'+'})}}>+</button>
            <br></br>
            <button onClick={()=>{this.setState({inp:this.state.inp+'-'})}}>-</button>
            <button onClick={()=>{this.setState({inp:this.state.inp+'*'})}}>*</button>
            <button onClick={()=>{this.setState({inp:this.state.inp+'/'})}}>/</button> 
            </div>
            </div>
            
         
     ) ;  
    }
}
export default Parent