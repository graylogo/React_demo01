import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
    render() {
        const {info,checkAll,deleteAll} = this.props
        return (
            <div className='todo_footer'>
               <span>
                   <input type='checkbox' checked={info.hasChecked===info.all && info.hasChecked!==0} onChange={checkAll}></input>
                   <span>已完成 {info.hasChecked} /共 {info.all}条</span>
                </span>
               <button onClick={deleteAll}>清除已完成</button>
            </div>
        )
    }
}
