import React from 'react'
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


import Form from './Form'



class App extends React.Component {

   constructor(props) {
      super(props);

      this.state = {
         items: ['Item 1...', 'Item 2...', 'Item 3...', 'Item 4...']
      }

      this.handleAdd = this.handleAdd.bind(this);
   };

   handleAdd(event) {
     event.preventDefault();
     const newItems = this.state.items.concat(ReactDOM.findDOMNode(this.refs.theInput).value);
      this.setState({items: newItems});
   }

   handleRemove(i) {
      var newItems = this.state.items.slice();
      newItems.splice(i, 1);
      this.setState({items: newItems});
   }

   render() {
      var items = this.state.items.map(function(item, i) {
         return (
            <div key = {item} onClick = {this.handleRemove.bind(this, i)}>
               {item}
            </div>
         );

      }.bind(this));

      return (
         <div>

           <form onSubmit={this.handleAdd.bind(this)}>
             <div className='form-group'>
               <label htmlFor="list-item">Add an item to the list</label>
               <input ref="theInput" type="text" className="form-control" id="list-item" placeholder="Add your item here"/>
             </div>
              <button type="submit" className="btn btn-default">Submit</button>
           </form>

            <ReactCSSTransitionGroup transitionName = "example"
               transitionEnterTimeout = {500} transitionLeaveTimeout = {500}>
               {items}
            </ReactCSSTransitionGroup>
         </div>
      );
   }
}

export default App;
