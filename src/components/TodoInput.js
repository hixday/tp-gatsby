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
      <div>
        <div>
        <form onSubmit={this.handleSubmitAdd}>
          <label>
            Task Name:
            <input type="text" name="title" onChange={this.handleChangeAdd} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
        <div>
        <form onSubmit={this.handleSubmitDelete}>
          <label>
            Task ID:
            <input type="text" name="id" onChange={this.handleChangeDelete} />
          </label>
          <button type="submit">Delete</button>
        </form>
      </div>
        <ul>{this.state.post_titles.map(post_title => 
        <li>{post_title.post_title}</li>)}
        </ul>
      </div>
    )
  }
}
