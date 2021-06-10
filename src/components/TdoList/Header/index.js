import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class Header extends Component {
    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }
    render() {
        const {addTodo} = this.props
        return (
            <div className='todo_header'>
                <input type='text' placeholder='请输入待办事项,点击Enter添加。。。' onKeyUp={addTodo}/>
            </div>
        )
    }
}
