import React, { Component } from 'react'

export class TwentyFour_componentDidMount extends Component {

    constructor()
    {
        super()
        this.state={name:'anil'}
        console.warn('constructor')
    }

    componentDidMount()
    {
        console.warn('componentDidMount')
    }

    shouldComponentUpdate()
    {
      console.warn('shouldComponentUpdate')
      return true;
    }

    componentDidUpdate()
    {
      console.warn('componentDidUpdate')
    }

    render() {
        console.warn('render')
    return (
      <div>
            <h3>Hii {this.state.name}</h3>
            <br/><br/>
           <button onClick = {()=>this.setState({name:"shidhu"})}>Here</button>
      </div>
    )
    }
}

export default TwentyFour_componentDidMount