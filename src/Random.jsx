import React, { Component } from 'react'

export default class Random extends Component {

  constructor(props){
    super(props)
    console.log(props);


    this.state ={cname:'Alto'}
  }

  change(data){
    this.setState({cname:data})
  }

  render() {
    return (
     <>
        <div>Random</div>
        <p>Data shared is : {this.props.uname}</p>
        <p>Car is : {this.state.cname}</p>

        <button className='btn btn-primary' onClick={()=>this.change('Swift')}>Click</button>
     </>
    )
  }
}
