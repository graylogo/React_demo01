import React, { Component } from 'react'
//非受控组件
// 就形式上来说，受控组件就是为某个form表单组件添加value属性；非受控组件就是没有添加value属性的组件
export default class GetByNo extends Component {
    handleLogin = (e)=>{
    // 阻止表单默认提交
    e.preventDefault();
    //  非受控组件现用现取值
    const {username,passwd} = this
    console.log(username.value,passwd.value);
    }
    render() {
        return (
            <div style={{border: '1px solid green'}}>
                <span>非受控组件</span>
                <form action='' onSubmit={this.handleLogin}>
                    用户名：<input ref={c=>this.username = c} type='text' name='username'></input>
                    密码：<input ref={c=>this.passwd = c}  type='password' name='passwd'></input>
                    <button>登录</button>
                </form>
            </div>
        )
    }
}
