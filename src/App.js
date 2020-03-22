import React from 'react'
import logo from './logo.svg'
import './App.css'

class App extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      newItem: '',
      list: []
    }
  }

  addItem(todoValue){

    if(todoValue !== ''){
      const newItem = {
        id: Date.now(),
        value: todoValue
      }

      const list= [...this.state.list]
      list.push(newItem)

      this.setState({
        list,
        newItem: ''
      })

    }
  }
  
  deleteItem(id){
    
    const list = [...this.state.list]

    const updatedList = list.filter(item => item.id !== id)

    this.setState({
      list: updatedList
    })

  }

  updateInput(input){
    this.setState({
      newItem: input
    })
  }

  render(){
    return(
      <div>
        <img src={logo} className="rounded mx-auto d-block" height="100" width="100"></img>
        <h1 className="text-center text-white">My ToDo App</h1>
        <div className="container">
          <br/>
          <center>
            <div class="input-group mb-3">
              <input required type="text" value={this.state.newItem} class="form-control" placeholder="Write a TODO" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={e => this.updateInput(e.target.value)}/>
              <div class="input-group-append">
                <button disabled={!this.state.newItem.length} onClick={() => this.addItem(this.state.newItem)} class="btn btn-light" type="button" id="button-addon2">Add ToDo</button>
              </div>
            </div>
            <div className="container">
              <ul className="list-group">
                
                {this.state.list.map(item => {
                  return(
                    <li className="list-group-item" key={item.id}>
                      <div class="container">
                        <span className="font-weight-bolder float-left m-1">{item.value}</span>
                        <button className="btn btn-danger float-right" onClick={() => this.deleteItem(item.id)}>Delete</button>
                      </div>
                    </li>
                  )
                })}
              
              </ul>
            </div>
          </center>
        </div>
      </div>
    )
  }
}

export default App