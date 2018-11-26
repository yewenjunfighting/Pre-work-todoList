import React from "react";
import DatePicker from "react-datepicker"; // 使用DatePicker组件
import Select from 'react-select'; // 使用react-select组件

import "react-datepicker/dist/react-datepicker.css";
import './index.css';

const priority = [ // 设置优先级选项, value越大优先级越高
    { value: 4, label: 'urgent and important' },
    { value: 3, label: 'urgent but not important' },
    { value: 2, label: 'not urgent but important' },
    { value: 1, label: 'not important and not urgent'}
];

class ToDoInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expireDate: new Date(), // 初始化截止时间
            selectedPriority:   { value: 1, label: 'not important and not urgent'}, //初始的优先级
            isAdd: false
        };
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.editContent) {
            console.log('next', nextProps.editContent.fields.todo);
            this.toDoInput.value = nextProps.editContent.fields.todo;
        }
    }

    setExpireDate(expireDate) { // 设置截至日期
        this.setState({
            expireDate: expireDate
        });
    };

    setPriority(selectedPriority) { // 设置优先级
        this.setState({
            selectedPriority: selectedPriority
        })
    }

    saveToDoValue() {
        let deadLine = new Date(this.state.expireDate).toLocaleDateString();  //把截至事件转化为月/日/年的格式
        let pri = this.state.selectedPriority === null ? {value: 0, label: ''} : this.state.selectedPriority;  // 处理用户没有选择优先级的情况
        this.props.addToDoItem(this.toDoInput.value, 0, deadLine, pri); // 把todo事项, 是否完成, 截止日期, 优先级传给父级组件
        this.toDoInput.value = '';
        this.setState({
            isAdd: true,
        });
    }

    render() {
        const { selectedPriority } = this.state;
        return (
          <div className="ToDoInput">
              <input className="inputToDo"
                     type="text"
                     placeholder='do something'
                     ref={(input) => {
                         this.toDoInput = input
                     }}
              />
              <DatePicker
                className="pickDate"
                selected={ this.props.isEdit === 1 ?  new Date(this.props.editContent.fields.expireDate) : this.state.expireDate }
                onChange={ this.setExpireDate.bind(this) }
                dropdownMode="scroll"
              />
              <Select
                className="selectPr"
                value={ this.props.isEdit === 1 ? this.props.editContent.fields.priority : selectedPriority }
                onChange={ this.setPriority.bind(this) }
                options={priority}
              />
              <button
                  className="bt"
                  onClick={ this.saveToDoValue.bind(this) }
              >Add Task</button>
          </div>
        );
    }
}

export default ToDoInput;
