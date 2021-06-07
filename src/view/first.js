// 标准的类组件的使用   state  this   事件
import React, { Component } from 'react'

// 创建类组件
export default class First extends Component {
    // 构造器  可选
    // constructor(){}
    constructor(props){
        super(props)
        // state必须为对象
        this.state = {
            isHot: 'name'
        }
        // 解决changeWeather中this丢失的问题
        this.changeWeather = this.changeWeather.bind(this)
    }
    // render必须写  而且需要return
    render() {
        const arr = [1,2,3]
        // console.log(this);   this指向该实例对象（First）
        // render 放在该类（First）的原型对象（__proto__）上 ，供实例使用
        return (
            // 行内样式的写法  外层花括号表示值绑定  内层表示传入一个对象
            <div style={{border: '1px solid red'}}>
                {arr}
                <ul>
                   {arr.map((i,index)=><li key={index}>{i}</li>)}
                </ul>
                {/*  在React中的事件被重写为驼峰式*/}
                <h2 onClick={this.changeWeather}>今天天气很{this.state.isHot?"炎热":'凉爽'}</h2>
                {/* 由于changeWeather是作为onClick的回调，所以并不是通过实例调用的，是直接调用，导致this为undefined（因为class回开启局部的严格模式，在严格模式中，this为undefined，在非严格模式中为window） */}
            </div>
        )
    }
    changeWeather(){
        const {isHot} = this.state
        // 状态并不能直接更改 要使用内置api(setState)来更改
        // this.state.isHot = !isHot  //错误
        this.setState({isHot:!isHot})   //这个改变是合并并不是覆盖  也就是说state的其他值不会丢失
    }
}
