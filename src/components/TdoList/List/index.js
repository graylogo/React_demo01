import React, { Component } from 'react'
import Todo from '../Todo'
import './index.css'
export default class List extends Component {
    render() {
        return (
            <div  className='todo_lists' >
               <Todo/>
            </div>
        )
    }
}
