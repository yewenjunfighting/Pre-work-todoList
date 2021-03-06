import React from "react"
import NotDo from "./NotDo/index.js"
import Done from "./Done/index.js"

import "./index.css"
class ToDoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sortComment: 0
        }
    }
    sortItems(event) {
        this.setState({
            sortComment: 1
        });
        if(event.target.className === 'dateUp') {
            this.props.items.sort((x, y) => {
               return new Date(y.fields.expireDate).getTime() - new Date(x.fields.expireDate).getTime();
            });
        }else if(event.target.className === 'priUp'){
            this.props.items.sort((x, y) => y.fields.priority - x.fields.priority);
        }else if(event.target.className === 'dateDown') {
            this.props.items.sort((x, y) => {
                return new Date(x.fields.expireDate).getTime() - new Date(y.fields.expireDate).getTime();
            });
        }else if(event.target.className === 'priDown'){
            this.props.items.sort((x, y) => x.fields.priority - y.fields.priority);
        }
        console.log(this.props.items)
    }

    render() {

        console.log('渲染');
        const delItem =  (only) => {
            this.props.deleteItem(only);
        };

        const doItem = (only) => {
            this.props.doneItem(only);
        };

        const edItem = (only) => {
            this.props.editItem(only);
        };

        console.log(this.props.items);
        // 筛选出已完成的事项
        let done = this.props.items.filter((item) => {
                if (item.fields.isDone === 1) return item;
                else return false;
            },
        );

        // 筛选出未完成的事项
        let todo = this.props.items.filter((item) => {
            if(item.fields.isDone === 0) return item;
            else return false
        });

        console.log(todo, done);
        return (
          <div>
                <div className="toDo">
                   <div className="toDo-header">
                       <h5>wait to do</h5>
                       <div className="sort-svg" onClick={this.sortItems.bind(this)}>
                           <span className="dateUp" title="按截止时间升序排列"></span>
                           <span className="priUp" title="按优先级升序排列"></span>
                           <span className="dateDown" title="按截止时间降序排列"></span>
                           <span className="priDown" title="按优先级降序排列"></span>
                       </div>
                   </div>
                    {todo.map(function(item, index) {
                        return (
                            <NotDo
                                key={ index.toString() }
                                item={item}
                                deleteItem={ delItem }
                                doneItem={ doItem }
                                editItem={ edItem }
                            />
                        )
                    })}
                </div>
              <div className="haveDone">
                  <h5>have done</h5>
                  {done.map(function(item, index) {
                        return (
                            <Done
                                key={index}
                                item={item}
                                deleteItem={ delItem }
                            />
                        )
                    })
                  }
              </div>
          </div>
        );
    }
}

export default ToDoItem;
