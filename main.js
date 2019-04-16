
button.addEventListener('click',(e)=>{
let request = new XMLHttpRequest()
request.onreadystatechange = function(){
    if(request.readyState === 4){
        console.log('請求响应完毕')
        if(request.status >= 200 && request.status < 300){
            console.log('请求成功')
            let string = request.responseText
            let object = window.JSON.parse(string)
            console.log(object)
        }else if(request.status >= 300){
            console.log('请求失败')
        }
    }
}
request.open('GET',"http://jack.com:8002/isxml")
request.send()
})