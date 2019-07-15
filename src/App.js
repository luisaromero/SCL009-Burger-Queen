import React from 'react';
import './App.css';
import Btn from './Btn'
import Menu from './data/menu.json'
import Order from './Order';


class App extends React.Component{
  
  constructor(props){
    super(props)
    this.state = {list: []};
    this.add = this.add.bind(this);
    this.delete = this.delete.bind(this);
    this.index = 0; //comentar despues que hace esto
  }
  
  add(valueToAdd,nameToAdd){
    this.setState({list: this.state.list.concat([{name : nameToAdd, value:valueToAdd, id:this.index}])});
    this.index ++;
  }

  delete(id){
    let newList = [...this.state.list]
    for( var i = 0; i < newList.length; i++){ 
      if ( newList[i].id === id) {
        newList.splice(i, 1); 
      }
   }
   this.setState({list:newList})
   


  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Pruebita
        </p>
      {Menu.Desayunos.map(btn=><Btn name={btn.name} value={btn.value} add={this.add} key={btn.name}/>)}
      <div>
      <Order  list = {this.state.list} delete={this.delete}/>
      </div>

      </header>

    </div>
  );
}
}

export default App;
