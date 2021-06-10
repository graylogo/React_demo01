
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PubSub from 'pubsub-js'
// 弟弟组件  订阅消息
export default class Younger extends Component {
    state ={
        topic: '',
        time: 0
    }
    // 销毁组件
    destroyYoung = ()=>{
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }
    componentDidMount(){
        // 订阅消息
        this.token = PubSub.subscribe('GETINFO', (_,data)=>{
            this.setState({topic: data.say,time: data.time})
          });
    }
    componentWillUnmount(){
        PubSub.unsubscribe(this.token)
    }
    render() {
        const {topic,time} = this.state
        return (
            <div className='has_border' id='young'>
                弟弟:传过来的内容=》 {topic}*{time}次
                <button onClick={this.destroyYoung}>销毁跟组件，删除消息订阅</button>
            </div>
        )
    }
}
