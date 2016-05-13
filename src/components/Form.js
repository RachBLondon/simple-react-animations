import React, { Component } from 'react';


export default class Form extends Component {
  render(){
    console.log("this props", this.props);
    return (
      <form onSubmit={this.props.handleAdd}>
        <div className='form-group'>
          <label htmlFor="list-item">Add an item to the list</label>
          <input type="text" className="form-control" id="list-item" placeholder="Add your item here"/>
        </div>
         <button type="submit" className="btn btn-default">Submit</button>
      </form>
    )
  }
}
