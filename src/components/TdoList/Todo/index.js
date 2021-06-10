import React, { Component } from 'react'
import './index.css'

export default class Todo extends Component {
    state = {
        isMouse: false
    }
    mouseEvent = (type)=>{
        // 鼠标移入
        if(type === 'mouseover'){
            this.setState({isMouse: true})
        }
        // 鼠标移出
        if(type === 'mouseleave'){
            this.setState({isMouse: false})
        }
    }
    render() {
        const {id,todo,check} = this.props.list
        const {handleDelete,handleCheck } = this.props
        const {isMouse} = this.state
        return (
            <>
            <div className='todo_todo' onMouseOver={(e)=>this.mouseEvent(e.type)} onMouseLeave={(e)=>this.mouseEvent(e.type)}>
                <input type='checkbox' checked={check} onChange={e=>handleCheck(id,e.target.checked)}/>
                <span>{todo}</span>
                <button style={{display: isMouse?'block':'none'}} onClick={handleDelete(id)}>删除</button>
            </div>
            </>
        )
    }
}
