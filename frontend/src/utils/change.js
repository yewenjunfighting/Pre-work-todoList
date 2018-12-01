/**
 * 根据前缀和类型两个参数创建className
 * */
const makeClass = (prefix, kind) => {
    prefix = (prefix === 'change-') ? '' : 'change-'
    return prefix + kind
}

/**
 * 如果目标dom的class有change前缀，就把class设为无change前缀
 * */
const  change = (event) => { // 根据dom的class进行svg变换
    let targetClass = event.target.className // 取出源对象的类名
    let targetDom = event.target
    let prefix = (targetClass.indexOf('change') === -1) ? '' : 'change-' // 如果类名没有change前缀就取空值
    switch(targetClass) {
        case prefix + 'del':
            targetDom.className = makeClass(prefix, 'del');
            break;
        case prefix + 'done':
            targetDom.className = makeClass(prefix, 'done');
            break;
        case prefix + 'edit':
            targetDom.className = makeClass(prefix, 'edit');
            break;
        default:
            break;
    }
}


export { change }
