import React, { Component } from 'react'
import Brother from './Child/Brother'
import Younger from './Child/Younger'
import './index.css'
// 消息发布与订阅
export default class PubSub extends Component {
    state = {
        obj: {
            com:{
                id:'最终答案'
            }
        }
    }
    componentDidMount(){
        // 连续的解构赋值
        const {obj:{com:{id}}} = this.state
        const {obj:{com:{id:renameId}}} = this.state
        console.log(id,renameId);
    }
    render() {
        return (
            <div>
                <Brother/>
                <Younger/>
            </div>
        )
    }
}
