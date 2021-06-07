// state简化操作  消除构造器constructor
import React,{Component} from 'react'

export default class Second extends Component{
    state = {
        isHot: false
    }
    render(){
        return(
            <div style={{border: '1px solid green'}}>
                <span>Second</span>
                <h2 onClick={this.changeWeather}>今天天气很{this.state.isHot?"炎热":'凉爽'}</h2>
            </div>
        )
    }
    // 不能使用普通函数   使用箭头函数 本身没有this，寻找外层的this
    changeWeather = ()=>{     // 自定义方法
        const {isHot} = this.state
        this.setState({isHot:!isHot})
    }
}