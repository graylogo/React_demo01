import React, { Component } from 'react'
import News from './News'
import ConnectMe from './ConnectMe'
import { NavLink, Redirect, Route , Switch } from 'react-router-dom'
export default class Message extends Component {
    render() {
        return (
            <div>
                <NavLink to='connect' >ConnectMe</NavLink>&nbsp;&nbsp;
                {/* 两种写法都可以，注意前面一种不能有 /  */}
                <NavLink to='/message/news' >News</NavLink>
                <Switch>
                    <Route path='/message/connect' component={ConnectMe}/>
                    <Route path='/message/news' component={News}/>
                    <Redirect to='/message/connect'/>
                </Switch>
            </div>
        )
    }
}
