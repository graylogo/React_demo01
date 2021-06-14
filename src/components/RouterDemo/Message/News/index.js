import React, { Component } from 'react'
import { Link,Route } from 'react-router-dom';
import Detail from './Detail'

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
export default class News extends Component {
    render() {
        return (
            <div>
                <ul>
                    {news.map(i=>{
                        return <Link key={i.id} to={`${i.id}`}>{i.title}</Link>
                    })}
                </ul>
               <Route path='/message/news/:id' component={Detail}/>
            </div>
        )
    }
}
