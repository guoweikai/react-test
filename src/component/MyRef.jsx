import React,{PureComponent} from"react";

export default class MyComponentRef extends PureComponent {
    render(){
        console.log(this)
        return <div>我是儿子2</div>
    }
}