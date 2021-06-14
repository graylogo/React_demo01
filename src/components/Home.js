import React, { Component } from 'react'
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css'
import First from './state/first'
import Second from './state/second'
import PropsBasic from './props/PropsBasic'
import RefOld from './refs/RefOld'
import GetByNo from './GetValue/GetByNo'
import GetByYes from './GetValue/GetByYes'
import FuncReturnFunc from './GetValue/FuncReturnFunc'
import TodoList from './TdoList'
import Proxy from './Proxy'
import PubSub from './PubSub'
import RouterDemo from './RouterDemo'
import { Link, Route, Switch } from 'react-router-dom';

const { Header, Content, Footer } = Layout;
export default class Home extends Component {
    render() {
        const title = [
            // t odoList的页面
            {
                title: 'TodoList',
                component: TodoList,
                path: '/todolist'
            },
            // 基础部分的页面
            {
                title: 'First',
                component: First,
                path: '/first'
            },
            {
                title: 'Second',
                component: Second,
                path: '/second'
            },
            {
                title: 'PropsBasic',
                component: PropsBasic,
                path: '/propsBasic'
            },
            {
                title: 'RefOld',
                component: RefOld,
                path: '/refold'
            },
            {
                title: 'GetByNo',
                component: GetByNo,
                path: '/getbyno'
            },
            {
                title: 'GetByYes',
                component: GetByYes,
                path: '/getbyyes'
            },
            {
                title: 'FuncReturnFunc',
                component: FuncReturnFunc,
                path: '/funcreturnfunc'
            },
            {
                title: 'Proxy',
                component: Proxy,
                path: '/proxy'
            },
            {
                title: 'PubSub',
                component: PubSub,
                path: '/pubsub'
            },
            {
                title: 'RouterDemo',
                component: RouterDemo,
                path: '/routerdemo'
            },
        ]
        return (
            <div>
            <Layout className="layout">
            <Header>
              <div className="logo" />
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                {title.map((i, index) => {
                  const key = index + 1;
                  return  <Menu.Item key={key}>
                      <Link to={i.path}>
                            {i.title}
                      </Link>
                        </Menu.Item>;
                })}
              </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
              <div className="site-layout-content">
                    {/* 基础部分的页面 */}
                    {/* <First/>
                    <Second/>
                    <PropsBasic/>
                    <RefOld/>
                    <GetByNo/>
                    <GetByYes/>
                    <FuncReturnFunc/>
                    <Proxy/> */}
               {/* todoList的页面 */}
               {/* <div>
                   <TodoList/>
                   <PubSub/>
                   <RouterDemo/>
               </div> */}
                <Switch>
                    {title.map((i)=>{
                        return <Route key={i.title} path={i.path} component={i.component}/>
                    })}
                </Switch>
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>React Demo</Footer>
          </Layout>
          
            </div>
        )
    }
}
