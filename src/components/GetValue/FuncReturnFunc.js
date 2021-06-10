import React, { Component } from 'react'

// ① 高阶函数:
// 如果一个函数符合下面两个规范中的任何一个,那该函数就是高阶函数
    // 若A函数,接受的参数是一个函数,那么A就可以称之为高阶函数
    // 若A函数,调用的返回值依然是一个函数,那么A就可以称之为高阶函数
    // 常见的高阶函数有:Promise、setTimeout、arr.map()等等

// ② 函数的柯里化
    // 通过函数调用继续返回函数的方式,实现对此接受参数最后统一处理的函数编码形式
// function sum(a){ return (b)=>{return c=>{ return a+b+c} }}

export default class FuncReturnFunc extends Component {
    state = {
        username: '',
        passwd: '',
        sex:''
    }
    // 函数返回函数
    // inputVal = function(type){
    //     return (e)=>{
    //         this.setState({[type]:e.target.value})
    //     }
    // }
    inputVal = (type)=>{
        return (e)=>{
            this.setState({[type]:e.target.value})
        }
    }
    handleLogin = e=>{
        e.preventDefault();
        const {username,passwd,sex} = this.state
        console.log(username,passwd,sex);
    }
    // ③ 不用函数柯里化实现事件的绑定
        // 直接使用回调函数,因为他本身就是以一个函数为返回值
     // <input onChange={event => this.saveFormData('username',event) } type="text" name="username"/>
     saveFormData = (type,e)=>{
        this.setState({[type]: e.target.value})
    }
    render() {
        return (
            <div style={{border: '1px solid #abc223'}}>
                <span>函数的柯里化</span>
                <form action='' onSubmit={this.handleLogin}>
                    用户名：<input onChange={this.inputVal('username')}  type='text' name='username'></input>
                    密码：<input  onChange={this.inputVal('passwd')} type='password' name='passwd'></input>
                    {/* 不使用函数柯里化 */}
                    sex:<input onChange={event => this.saveFormData('sex',event) } type="text" name="sex"/>
                    <button>登录</button>
                </form>
            </div>
        )
    }
}
