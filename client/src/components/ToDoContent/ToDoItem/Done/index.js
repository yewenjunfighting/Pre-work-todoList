import React from 'react'
import { change } from "../../../../utils/change";

import './index.css'
class Done extends React.Component{

   changeSvg(event) { // 利用事件委托来更换svg图片
        change(event)
    }

   originSvg(event) {
        change(event)
    }

    changeItem(event) {
        if (event.target.className === 'change-del')
            this.props.deleteItem(this.props.item.fields.only) // 把唯一标识传出去
    }

    render() {
        let starNum = [1, 2, 3, 4];
        starNum = starNum.splice(0,this.props.item.fields.priority);
        return (
            <div className="have-done">
                <div className="done-thing">
                    <div>{ this.props.item.fields.todo }</div>
                    <div
                        className="svg-set"
                        onClick={ this.changeItem.bind(this) }
                    >
                        <span className="del" onMouseOver={ this.changeSvg } onMouseOut={ this.originSvg }></span>
                        <span className="change-done"></span>
                    </div>
                </div>
                <div className="done-date-pri">
                    <span>{ this.props.item.fields.expireDate }</span>
                    <div className="star">
                        {
                            starNum.map((item, index) => (
                                <span key={ index }></span>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Done;
