import React, { Component } from 'react'
export default class RefOld extends Component {
    // 字符串形式的ref
    // showData = ()=>{
    //     const {input1} = this.refs
    //     alert(input1.value)
    // }
    // //展示右侧输入框的数据
    // showData2 = ()=>{
    //     const {input2} = this.refs
    //     alert(input2.value)
    // }

    // 第二种
    // showData = ()=>{
    //     const {input1} = this
    //     alert(input1.value)
    // }
    // showData2 = ()=>{
    //     const {input2} = this
    //     alert(input2.value)
    // }
    // 第三种
    // createRef API来创建
    input1 = React.createRef()
    input2 = React.createRef()
    showData = ()=>{
        console.log(this.input1.current.value);
        const {input1} = this
        alert(input1.current.value)
    }
    showData2 = ()=>{
        const {input2} = this
        alert(input2.current.value)
    }
    render() {
        return (
            <div>
                {/* // 展示字符串形式的ref，比较老，不推荐  已经被弃用 */}
                {/* <input ref="input1" type="text" placeholder="点击按钮提示数据"/>&nbsp;
				<button onClick={this.showData}>点我提示左侧的数据</button>&nbsp;
				<input ref="input2" onBlur={this.showData2} type="text" placeholder="失去焦点提示数据"/> */}

                {/* 第二种 回调形式   这个会有个小问题   当reload出发的时候会执行两次，第一次输出null，第二次才有结果（不影响使用）*/}
                {/* 可以把函数写在外面，再调用 */}
                {/* <input ref={c=>this.input1=c} type="text" placeholder="点击按钮提示数据"/>&nbsp;
				<button onClick={this.showData}>点我提示左侧的数据</button>&nbsp;
				<input ref={c=>this.input2 = c} onBlur={this.showData2} type="text" placeholder="失去焦点提示数据"/> */}

                {/* 第三种  createRef 来创建 */}
                <input ref={this.input1} type="text" placeholder="点击按钮提示数据"/>&nbsp;
				<button onClick={this.showData}>点我提示左侧的数据</button>&nbsp;
				<input ref={this.input2} onBlur={this.showData2} type="text" placeholder="失去焦点提示数据"/>
            </div>
        )
    }
}
