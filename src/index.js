import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import Plans from './plans';
import Addplan from './Addplan';
import './index.css'

class Sex extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    plan : [
    {  id : 1,
        name : 'pp',
        manage : 1
    }
    ]
  }
    this.addplan = this.addplan.bind(this)
    this.deletplan = this.deletplan.bind(this)
}
  render() {
    return (<div>
      <div>
        <Plans plans={this.state.plan} deletplan = {this.deletplan}/>
      </div>
      <p>
        <Addplan onAdd={this.addplan}/>
      </p>
      </div>
    )
  }
  addplan(plans){
    const id = this.state.plan.length + 1
    this.setState({plan : [...this.state.plan, {id, ...plans}]})
  }
  deletplan(id){
    this.setState({plan : this.state.plan.filter((el) => el.id !== id)})
  }
}



const ele = ReactDOMClient.createRoot(document.getElementById("1"))
ele.render(<Sex />)
