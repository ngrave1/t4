import React from 'react';
import * as ReactDOMClient from 'react-dom/client';


class Addplan extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
        name : '',
        manage : ''
    }
}
    render() {
      return (
        <form ref={(el) => this.Form = el}>
          <input placeholder='Что нужно сделать' onChange={(a) => this.setState({ name : a.target.value })}/>
          <p></p>
          <input placeholder='План' onChange={(a) => this.setState({ manage : a.target.value })}/>
          <p></p>
          <button type="button" onClick={() => 
          { 
            this.Form.reset()
            this.props.onAdd(
            {
                name : this.state.name,
                manage : this.state.manage
            }
          )}}>сделать запись</button>
        </form>
      )
    }
  }

  export default Addplan