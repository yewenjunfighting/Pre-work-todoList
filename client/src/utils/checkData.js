function checkInputData(inputValue) {
    inputValue = inputValue.trim();
    if(inputValue === '') {
        alert('输入不能为空');
        return false;
    }else return true;
}

export default checkInputData;
