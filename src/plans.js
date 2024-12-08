import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import Newplan from './newplan';


class Plans extends React.Component {
  render() {
    if (this.props.plans.length > 0){
    return (
      <div>
        {this.props.plans.map((el) => 
            <Newplan key={el.id} ele={el} deletplan = {this.props.deletplan}/>
        )}
      </div>
    )
    }
    else{
        return (
            (<div><h3>Ничего нет</h3></div>)
        )
    }
  }
}

export default Plans