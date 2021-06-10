import React, { Component } from 'react'
import  PropTypes from 'prop-types'
import Todo from '../Todo'
import './index.css'
export default class List extends Component {
    // 增加prop类型限制
    static propTypes = {
        todoList: PropTypes.array
    }
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
