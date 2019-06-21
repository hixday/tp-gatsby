import React from "react"
import Axios from 'axios'
export default class TodoInput extends React.Component {



/**
 * SHOW ALL
 */
constructor(props) {
  super(props);
  this.state = {
    post_titles: []
  }
}

async componentDidMount() {
  const {data} = await Axios.get('http://localhost/wordpress/wp-json/project_manager/v1/manager')
  this.setState({post_titles: data})
  
}



/**
 * DELETE
 */

state = {
  id: '',
}

handleChangeDelete = event => {
  this.setState({ id: event.target.value });
}

handleSubmitDelete = event => {
  event.preventDefault();

  Axios.delete(`http://localhost/wordpress/wp-json/project_manager/v1/manager/${this.state.id}`)
    .then(res => {
      console.log(res);
      console.log(res.data);
      console.log(this.state.id);
    })
}



/**
 * CREATE
 */
state = {
  title: '',
}

handleChangeAdd = event => {
  this.setState({ title: event.target.value });
}

handleSubmitAdd = event => {
  event.preventDefault();

  const task = {
    title: this.state.title
  };

  Axios.post(`http://localhost/wordpress/wp-json/project_manager/v1/manager`, { task })
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
}
  


  
  render() {
    return ( 
      <div className="taskManager">
      <div>
        <form onSubmit={this.handleSubmitAdd}>
            <input className="addInput" type="text" name="title" onChange={this.handleChangeAdd} placeholder="Insérer la description de la nouvelle tâche"/>
          <button className="btn btn-primary" type="submit">
            Ajouter
          </button>
        </form>
      </div>
      <div>
        <ul>
          {this.state.post_status.map(post_status => (
            <div className="list" key="id">{post_status.post_status}</div>
          ))}
        </ul>
        <form onSubmit={this.handleSubmitDelete}>
            <input className="deleteInput" type="text" name="id" onChange={this.handleChangeDelete} placeholder="Insérer le ID de la tâche à enlever"/>
          <button className="deleteTask" type="submit">
            Enlever
          </button>
        </form>
      </div>
    </div>
    )
  }
}
