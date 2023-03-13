// Write your code here
import {Component} from 'react'
import './index.css'

class TodoItem extends Component {
  render() {
    const {todo, deleteTodo} = this.props
    const {title, id} = todo
    const onDeleteTodo = () => {
      deleteTodo(id)
    }
    return (
      <li className="todo">
        <p className="todo-title">{title}</p>
        <button type="button" className="delete-button" onClick={onDeleteTodo}>
          Delete
        </button>
      </li>
    )
  }
}

export default TodoItem
