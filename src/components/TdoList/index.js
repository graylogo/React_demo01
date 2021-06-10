import React, { Component } from 'react'
import './index.css'
import Header from './Header'
import List from './List'
import Footer from './Footer'
export default class TodoList extends Component {
    render() {
        return (
            <div className='todo-list'>
               <Header/>
               <List/>
               <Footer/>
            </div>
        )
    }
}
