import React,{ Component } from 'react'
import ToDoInput from './ToDoInput/index.js'
import ToDoItem from './ToDoItem/index.js';
import checkInputData  from '../../utils/checkData.js'
import { getAllItems, addItem, delItem, completeItem } from "../../request/request";

import './index.css'
class ToDoContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isEdit: 0, // 当它为1时,标志用开始编辑操做
            editContent: null
        }
    }

    componentDidMount() { // 初始化items
        getAllItems().then((res) => {
            console.log(res.data);
            if(res.status === 200) { // 请求成功初始化数据
                this.setState({
                    items: res.data
                })
            }
        }).catch((err) => {
            console.log(err.toString())
        })
    }

    addToDoItem(todo, isDone, expireDate, pri) {
        let priority = pri.value;
        const only = new Date().getTime().toString(); // 生成时间戳，作为唯一标识
        if(!checkInputData(todo)) return; // 如果输入为空就给出提醒
        this.setState(({ items }) => ({ // 更新状态
            items: [{ fields: { todo, isDone, expireDate, priority, only} }, ...items]
        }));
        // 给后端发送请求,使得在数据库里添加内容
        addItem(todo, isDone, expireDate, priority, only)
    }

    findPos(items, only) { // 定位
        for( let index in items) {
            if(items[index].fields.only === only) return index
        }
    }

    deleteItem(only) {
        this.setState({ // 使得用户编辑
            isEdit: 0
        })
        const nowItems = this.state.items;
        let st = this.findPos(this.state.items, only);
        console.log('st: ', typeof st);
        let end = st === '0' ? 1 : st;
        console.log(st, end);
        nowItems.splice(st, end);
        this.setState({
            items: nowItems
        });
        // 向后端发送请求删除only对应的数据
        delItem(only).then((res) => {
            if(res.status === 200) {
                console.log('删除成功');
            }
        }).catch((err) => {
            console.log(err.toString());
        })
    }

    doneItem(only) {
        let pos = this.findPos(this.state.items, only);
        console.log(pos);
        const nowItems = this.state.items;
        nowItems[pos].fields.isDone = 1;
        this.setState({
            items: nowItems
        });
        // 向后端发送请求把isDone字段置为1
        completeItem(only).then((res) => {
            if(res.status === 200){
                console.log('更新成功')
            }
        }).catch((err) => {
            console.log(err.toString())
        })
    }

    editItem(only) {
        let pos = this.findPos(this.state.items, only);
        let editContent = this.state.items[pos];
        switch(editContent.fields.priority){
            case 1:
                editContent.fields.priority = { value: 1, label: 'not important and not urgent'};
                break;
            case 2:
                editContent.fields.priority = { value: 2, label: 'not urgent but important' };
                break;
            case 3:
                editContent.fields.priority = { value: 3, label: 'urgent but not important' };
                break;
            case 4:
                editContent.fields.priority = { value: 4, label: 'urgent and important' }
                break;
            default:
                break;
        }
        this.setState({
            isEdit: 1,
            editContent: editContent
        })
        this.deleteItem(only)
        console.log(this.state.items[pos])
    }
    render() {
        const items = this.state.items;
        const isEdit = this.state.isEdit;
        const editContent = this.state.editContent;
        return (
            <div className="ToDoContent">
                <ToDoInput
                    addToDoItem={ this.addToDoItem.bind(this) }
                    isEdit={ isEdit }
                    editContent={ editContent }
                />
                <ToDoItem
                    deleteItem={ this.deleteItem.bind(this) }
                    doneItem={ this.doneItem.bind(this) }
                    editItem={ this.editItem.bind(this) }
                    items={ items }
                />
            </div>
        )
    }
}

export default ToDoContent;
