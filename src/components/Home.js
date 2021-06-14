import React, { Component } from 'react'
import First from './state/first'
import Second from './state/second'
import PropsBasic from './props/PropsBasic'
import RefOld from './refs/RefOld'
import GetByNo from './GetValue/GetByNo'
import GetByYes from './GetValue/GetByYes'
import FuncReturnFunc from './GetValue/FuncReturnFunc'
import TodoList from './TdoList'
import Proxy from './Proxy'
import PubSub from './PubSub'
import RouterDemo from './RouterDemo'
export default class Home extends Component {
    render() {
        return (
            <div>
                {/* 基础部分的页面 */}
               <div style={{display: 'none'}}>
               <First/>
                <Second/>
                <PropsBasic/>
                <RefOld/>
                <GetByNo/>
                <GetByYes/>
                <FuncReturnFunc/>
                   <Proxy/>
               </div>
               {/* todoList的页面 */}
               <div>
                   <TodoList/>
                   <PubSub/>
                   <RouterDemo/>
               </div>
            </div>
        )
    }
}
