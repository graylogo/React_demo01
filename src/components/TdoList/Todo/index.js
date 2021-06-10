import React, { Component } from 'react'
import './index.css'

export default class Todo extends Component {
    render() {
        return (
            <>
            <div className='todo_todo'>
                <input type='checkbox'/>
                <span>第一件事</span>
                <button>删除</button>
            </div>
            </>
        )
    }
}
