import React, { Component } from 'react'
import PubSub from 'pubsub-js'
// 哥哥组件  发布消息
export default class Brother extends Component {
    state = {
        time: 0,
        say: '呼叫弟弟！'
    }
    publish=()=>{
        this.setState({time: this.state.time+1})
        // 发布消息
        PubSub.publish('GETINFO', {...this.state});
    }
    render() {
        return (
            <div className='has_border'>
                哥哥
                <button onClick={this.publish}>发布消息</button>
            </div>
        )
    }
}
