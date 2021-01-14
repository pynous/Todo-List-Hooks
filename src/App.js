import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      newItem: '',
      list:[]
    }
  }
UpdateInput(key,value){
  this.setState({
    [key]: value
  })
}

  addItem(){
       const newItem = {
         id: 1 + Math.random(),
         value: this.state.newItem.slice()
       };
       const list = [...this.state.list];
       
       list.push(newItem);

       this.setState({
         list,
         newItem:""
       });
      
  }
  deleteItem(id){
     const list = [...this.state.list];

     const updatelist = list.filter(item => item.id !== id);

     this.setState({ list : updatelist });
  }

 render(){
  return (
    <div>

      <h1 className="app-title">TODO LIST</h1>

      <div className="container">
        <div
          style={{
            padding: 30,
            textAlign: "left",
            maxWidth: 500,
            margin: "auto"
          }}
        >
          <h3>Add list... </h3>
       
       <input type="text" 
       placeholder="Type Item Here...." 
       value={this.state.newItem}
       onChange={e => this.UpdateInput("newItem", e.target.value)}
       />
       <button onClick={()=> this.addItem()} className="m-btn" disabled={!this.state.newItem.length}>+</button>
        <br/>
        <ul>
         {this.state.list.map(item =>{
           return(
             <li key={item.id}> 
              {item.value}
              <button className="btn btn-floating" onClick={() => this.deleteItem(item.id)}><i class="material-icons">x</i></button>
             </li>
           );
         })}

        </ul>



     </div>

    </div>
</div>

  );

  }
}

export default App;