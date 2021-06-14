import React, { Component } from 'react'
import {NavLink,Redirect,Route, Switch} from 'react-router-dom'
import './index.css'

import Title from './Title'
import About from './About'
import Message from './Message'

export default class RouterDemo extends Component {
    render() {
        return (
            <div className='router-demo'>
                <Title/>
                {/* 一般组件与路由组件 */}
                <NavLink to='/about'>About</NavLink>&nbsp;&nbsp;
                <NavLink to='/message'>Message</NavLink>

                {/* 使用Switch包裹，保证匹配完成后就不接着往下匹配了 */}
                <Switch>
                <Route path='/about' component={About}/>
                <Route path='/message' component={Message}/>
                {/* 路由重定向 */}
                <Redirect to='/message'/>
                </Switch>
            </div>
        )
    }
}
