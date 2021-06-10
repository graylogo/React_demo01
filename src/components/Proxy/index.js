import React, { Component } from 'react'
import axios from 'axios'
// 对跨域的处理
export default class Proxy extends Component {
    fetchData = ()=>{
        // 方法一  简单代理
        // 简单代理:在package.json中追加如下配置 :"proxy":"http://localhost:8008"
        // 接口地址： template下的EasyNode项目  localhost:8080
        // 但是要注意接口的端口要改成前端请求的接口
        // axios.get('http://localhost:8008/api/blog/list').then(res=>{
        //     console.log(res.data);
        // })
        // 注意要改接口
        // axios.get('http://localhost:3000/api/blog/list').then(res=>{
        //     console.log(res.data);
        // })

        // 方法二 配置多个代理
        //   注意地址加了api1区分不同的端口，后面会在setupProxy.js中去除
        axios.get('http://localhost:3000/api1/api/blog/list').then(res=>{
            console.log(res.data);
        })
    }
    fetchData2 = ()=>{
        // 方法二: 在src下创建配置文件：src/setupProxy.js
        // 可以配置多种代理  注意api2  区分发往不同的端口
        axios.get('http://localhost:3000/api2/api/blog/list').then(res=>{
            console.log(res.data);
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.fetchData}>获取8008上的数据</button>
                <button onClick={this.fetchData2}>获取另外一个端口上的数据</button>
            </div>
        )
    }
}
