import React, { Component } from 'react'

const news = [{
    id:'1',
    title: '新闻一',
    content: '内容一'
},{
    id:'2',
    title: '新闻二',
    content: '内容二'
},{
    id:'3',
    title: '新闻三',
    content: '内容三'
}]
export default class Detail extends Component {
    render() {
        const {id} = this.props.match.params
        // 注意区分字符串和数字的ID
        const {title,content} = news.find(i=>i.id===id)
        return (
            <div>
                <ul>
                    <li>ID:{id}</li>
                    <li>标题: {title}</li>
                    <li>内容: {content}</li>
                </ul>
            </div>
        )
    }
}
