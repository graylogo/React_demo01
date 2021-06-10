import React, { Component } from 'react'
import First from './state/first'
import Second from './state/second'
import PropsBasic from './props/PropsBasic'
import RefOld from './refs/RefOld'
import GetByNo from './GetValue/GetByNo'
import GetByYes from './GetValue/GetByYes'
import FuncReturnFunc from './GetValue/FuncReturnFunc'
export default class Home extends Component {
    render() {
        return (
            <div>
                <First/>
                <Second/>
                <PropsBasic/>
                <RefOld/>
                <GetByNo/>
                <GetByYes/>
                <FuncReturnFunc/>
            </div>
        )
    }
}
