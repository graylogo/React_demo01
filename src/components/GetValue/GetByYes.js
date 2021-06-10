import React, { Component } from 'react'
//受控组件
// 就形式上来说，受控组件就是为某个form表单组件添加value属性；非受控组件就是没有添加value属性的组件
export default class GetByYes extends Component {
    state = {
        username: '',
        passwd: ''
    }
        //  受控维护状态值
    inputName = (e)=>{
        this.setState({username:e.target.value})
    }
    inputPwd = e=>{
        this.setState({passwd:e.target.value})
    }

    handleLogin = (e)=>{
    // 阻止表单默认提交
    e.preventDefault();
    // 受控组件用值的时候直接取
    const {username,passwd} = this.state
    console.log(username,passwd);
    }

    render() {
        return (
            <div style={{border: '1px solid green'}}>
                <span>受控组件</span>
                <form action='' onSubmit={this.handleLogin}>
                    用户名：<input onChange={this.inputName}  type='text' name='username'></input>
                    密码：<input  onChange={this.inputPwd} type='password' name='passwd'></input>
                    <button>登录</button>
                </form>
            </div>
        )
    }
}
