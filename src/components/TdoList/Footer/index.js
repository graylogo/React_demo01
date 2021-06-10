import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
    render() {
        return (
            <div className='todo_footer'>
               <span>已完成 2 /共 5条</span>
               <button>清除已完成</button>
            </div>
        )
    }
}
