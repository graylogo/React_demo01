import React, { Component } from 'react'
import './index.css'

export default class Header extends Component {
    render() {
        const {addTodo} = this.props
        return (
            <div className='todo_header'>
                <input type='text' placeholder='请输入待办事项,点击Enter添加。。。' onKeyUp={addTodo}/>
            </div>
        )
    }
}
