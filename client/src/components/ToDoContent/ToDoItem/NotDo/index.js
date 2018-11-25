import React from 'react'
import { change } from "../../../../utils/change";

import './index.css'

class NotDo extends React.Component {
    changeSvg(event) { // 利用事件委托来更换svg图片
       change(event)
    }

    originSvg(event) {
        change(event)
    }

    changeItem(event) {
        console.log(event.target.className)
        if (event.target.className === 'change-del')
            this.props.deleteItem(this.props.item.fields.only) // 把唯一标识传出去
        else if(event.target.className === 'change-done')
            this.props.doneItem(this.props.item.fields.only)
        else if(event.target.className === 'change-edit')
            this.props.editItem(this.props.item.fields.only)
    }
    render() { // 数据要从父级获取
        let starNum = [1, 2, 3, 4]
        starNum = starNum.splice(0,this.props.item.fields.priority)
        console.log(this.props.item)
        return (
            <div className="NotDo">
                <div className="NotDo-thing">
                    <div>{this.props.item.fields.todo}</div>
                    <div className="todo-svg-set"
                         onMouseOver={ this.changeSvg }
                         onMouseOut={ this.originSvg }
                         onClick={ this.changeItem.bind(this) }
                    >
                        <span className="del"></span>
                        <span className="done"></span>
                        <span className="edit"></span>
                    </div>
                </div>
                <div className="todo-date-pri">
                    <span>{this.props.item.fields.expireDate}</span>
                    <div className="star">
                    {
                        starNum.map((item, index) => (
                            <span key={index}></span>
                        ))
                    }
                    </div>
                </div>
            </div>
        )
    }
}

export default NotDo
