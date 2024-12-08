import React from 'react';
import * as ReactDOMClient from 'react-dom/client';


class Newplan extends React.Component {
    render() {
      return (
        <div>
          <h3>{this.props.ele.name}</h3>
          <button id ="be" type='button' onClick={() => this.props.deletplan(this.props.ele.id)}>Удалить</button>
          <div>{this.props.ele.manage}</div>
          <p>-----------------------</p>
        </div>
      )
    }
  }
export default Newplan