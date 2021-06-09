import React, { Component } from 'react'
import Child01 from './Child01'
export default class PropsBasic extends Component {
    render() {
        const p1 = {
            name: 'wang',
            age: 18,
            sex: true
        }
        const say = function(){
            console.log('say');
        }
        return (
            <div style={{border: '1px solid gray'}}>
                <Child01 name='brew' />
                <Child01 {...p1} say={say}/>
            </div>
        )
    }
}
