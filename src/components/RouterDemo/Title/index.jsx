import React, { Component } from 'react'
import { withRouter } from 'react-router';
 class Title extends Component {
    back = ()=>{
        this.props.history.goBack()
    }
    forward = ()=>{
        this.props.history.goForward()
    }
    go = ()=>{
        this.props.history.go(-2)
    }
    componentDidMount(){
    }
    render() {
        return (
            <div>
                这是个一般组件，直接使用。<br/>
                下面是路由组件，需要在注册路由时候使用<br/>
                <button onClick={this.back}>back</button>
                <button onClick={this.forward}>forward</button>
                <button onClick={this.go}>go(-2)</button>
            </div>
        )
    }
}

export default withRouter(Title)