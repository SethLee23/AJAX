
button.addEventListener('click',(e)=>{
let request = new XMLHttpRequest()
request.onreadystatechange = function(){
    if(request.readyState === 4){
        console.log('請求响应完毕')
        if(request.status >= 300 && request.status < 400){
            console.log('请求失败')
        }else if(request.status >= 200){
            console.log('成功')
        }
    }
}
request.open('GET',"http://jack.com:8002/isxml")
request.send()
})