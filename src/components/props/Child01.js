import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Child01 extends Component {
    // 增加类型校验
    static propTypes = {
        name: PropTypes.string.isRequired,
        age: PropTypes.number,
        sex: PropTypes.bool,
        say: PropTypes.func
    }
    // 设置默认值
    static defaultProps = {
        sex: true,
        age: 19
    }
    render() {
        const {name,age,sex,say} = this.props
        // 注意⚠： 不能直接修改prop的值
        // name++
        return (
            <div>
                <span>{name}{age+1}{sex?'男':'女'}</span>
               <button onClick={say}>say</button>
            </div>
        )
    }
}