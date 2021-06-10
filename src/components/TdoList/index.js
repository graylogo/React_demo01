import React, { Component } from 'react'
//使用nanoid来创建唯一的id
import {nanoid} from 'nanoid'
import './index.css'
import Header from './Header'
import List from './List'
import Footer from './Footer'
export default class TodoList extends Component {
    state = {
        todoList:[
            {
                id: '123',
                todo: '逛超市',
                check: false
            },
            {
                id: '1123',
                todo: '写作业',
                check: true
            }
        ]
    }
    // 添加todo
    addTodo = (e)=>{
        const {keyCode,target} = e
        const isBlack = target.value.trim() === ''
        if(keyCode === 13 && !isBlack){
            const {todoList} = this.state
           const newTodo = [{
                            id: nanoid(),
                            todo: target.value,
                            check: false
                            },...todoList]
           this.setState({todoList:newTodo})
           target.value = ''
        }
        return
    }
    handleDelete = (id)=>{
        const {todoList} = this.state
        return ()=>{
        const newList = todoList.filter(i=>i.id!==id)
        this.setState({todoList: newList})
        }
    }
    handleCheck = (id,check)=>{
        const {todoList} = this.state
        const newList = todoList.map(i=>{
            if(i.id===id){
                //  替换****
                return {...i,check}
            }else{
                return i
            }
        })
        this.setState({todoList: newList})
    }
    checkAll = (e)=>{
        const {todoList} = this.state
        const newList = todoList.map(i=>{
            return {...i,check: e.target.checked}
        })
        this.setState({todoList: newList})
    }
    deleteAll = ()=>{
        const {todoList} = this.state
        if(window.confirm('确定要全部删除吗？')){
        const newList = todoList.filter(i=>!i.check)
        this.setState({todoList: newList})
        }
    }
    render() {
        const {todoList} = this.state
        const all = todoList.length
        const hasChecked = todoList.filter(i=>i.check).length
        return (
            <div className='todo-list'>
               <Header addTodo = {this.addTodo}/>
               <List todoList = {todoList} handleDelete={this.handleDelete} handleCheck={this.handleCheck}/>
               <Footer checkAll={this.checkAll} info = {{all,hasChecked}} deleteAll={this.deleteAll}/>
            </div>
        )
    }
}
