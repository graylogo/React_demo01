import React, { Component } from 'react'
import Todo from '../Todo'
import './index.css'
export default class List extends Component {
    render() {
        const {todoList,handleDelete,handleCheck} = this.props
        return (
            <div  className='todo_lists' >
              { todoList.map(item=>{
                 return  <Todo key={item.id} list= {item} handleDelete={handleDelete} handleCheck={handleCheck}/>
               })}
            </div>
        )
    }
}
