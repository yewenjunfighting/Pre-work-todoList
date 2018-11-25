import axios from 'axios'
import qs from 'qs'

const request = axios.create({
    baseURL: 'http://127.0.0.1:8000/', // 设置base url
    timeout: 4000 // 设置请求超时时间
});

request.defaults.withCredentials = true;
request.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';

// request.interceptors.response.use(
//     (res) => {
//         return res
//     },
//     (err) => {
//         return Promise.reject(err)
//     }
// )

// 获取全部的item
function getAllItems() {
    return request({
            url: '/toDos/',
            method: 'GET'
        }
    )
}

// 添加item
function addItem(todo, isDone, expireDate, priority, only) {
    request({
        url: 'toDos/add/',
        method: 'POST',
        data: qs.stringify({
            todo,
            isDone,
            expireDate,
            priority,
            only
        })
    }).then((res => {
        if(res.status === 200) console.log('添加成功');
        else console.log(res)
    })).catch((err) => {
        console.log(err.toString())
    })
}

// 删除数据

function delItem(only) {
    return request({
        url: '/toDos/delete/',
        method: 'DELETE',
        data:{
            only
        }
    })
}

function completeItem(only) {
    return request({
        url: '/toDos/complete/',
        method: 'PATCH',
        data: {
            only
        }
    })
}

export  { getAllItems, addItem, delItem, completeItem }
