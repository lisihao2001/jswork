function goldbach() {
    var value = document.getElementById('odd').value
    if(value%2!==0){
        alert("请输入偶数")
    }
    //判断是否为质数
    let goldbach = document.getElementById('goldbach')
    var arr=[]
    var a=0;
    for(var i =2;i<value;i++){
        a=0
        for(var j=2;j<i;j++){
            if(i%j==0){
                a++
            }
        }
        if(a==0){
            arr.push(i)
        }
    }
    //判断输入的偶数是否可以拆分为两质数之和
    var str = ''
    console.log(value)
    for (let i=0;i<(arr.length)/2;i++){
        for(let j=0;j<arr.length;j++){
            if((arr[i]+arr[j])===Number(value)){
                str +='<div>'+value+"可以拆分为两个质数"+arr[i]+"与"+arr[j]+"的和"+'</div>'
                console.log(value + "可拆分为两个质数"+arr[i]+"与"+arr[j]+"的和")
            }
        }
    }
    goldbach.innerHTML =str
}