/**
 * Created by Administrator on 2017/8/20.
 */
window.onload=function () {
    // 点击“=”触发运算
    // 运算前，检测运算是否符合格式（正则表达式）一个数字或者一个数字 运算符 另一个数字
    // 如果符合，则开始运算，运算结果显示在结果框中
    // 如果不符合，则提示重新输入

    document.getElementById("sum").onclick=function () {
      var reg=/([0-9]+\.?[0-9]*)([\*|\+|\-|\/|\%])([0-9]+\.?[0-9]*)/gi;
        var str=arr.join('');//转换成字符串
        var a=reg.exec(str);
        if(a==null){
            alert("温馨提示：使用时请完整输入运算表达式，运算结果将不保存！");
            arr.length=0;
            showIn(arr);
        }else{
            var oper=OperationFactory.createOperate(a[2]);
            oper.numberA=a[1];
            oper.numberB=a[3];
            document.getElementById("result").innerHTML=oper.getResult();
            arr.length=0;//归0
        }
    };
    // 接收输入，用数组存储
    // 点击“AC”，数组清空
    // 点击“退格”，数组减一
    // 点击除以上之外的值，存入数组，并且实时显示在输入框中

    var arr=[];//声明一个空数组，用来存放输入的值
    //将输入的值显示在输入框中
    function showIn(array) {
        var str=array.join('');//转换成字符串
        document.getElementById("content").innerHTML=str;
        document.getElementById("result").innerHTML=0;
    }
    document.getElementById("AC").onclick=function () {
        arr.length=0;
        showIn(arr);
    };
    document.getElementById("bk").onclick=function () {
        arr.pop();
        showIn(arr);
    };
    document.getElementById("mod").onclick=function () {
        arr.push("%");
        showIn(arr);
    };
    document.getElementById("add").onclick=function () {
        arr.push("+");
        showIn(arr);
    };
    document.getElementById("sub").onclick=function () {
        arr.push("-");
        showIn(arr);
    };
    document.getElementById("multi").onclick=function () {
        arr.push("*");
        showIn(arr);
    };
    document.getElementById("div").onclick=function () {
        arr.push("/");
        showIn(arr);
    };
    document.getElementById("one").onclick=function () {
        arr.push("1");
        showIn(arr);
    };
    document.getElementById("two").onclick=function () {
        arr.push("2");
        showIn(arr);
    };
    document.getElementById("three").onclick=function () {
        arr.push("3");
        showIn(arr);
    };
    document.getElementById("four").onclick=function () {
        arr.push("4");
        showIn(arr);
    };
    document.getElementById("five").onclick=function () {
        arr.push("5");
        showIn(arr);
    };
    document.getElementById("six").onclick=function () {
        arr.push("6");
        showIn(arr);
    };
    document.getElementById("seven").onclick=function () {
        arr.push("7");
        showIn(arr);
    };
    document.getElementById("eight").onclick=function () {
        arr.push("8");
        showIn(arr);
    };
    document.getElementById("nine").onclick=function () {
        arr.push("9");
        showIn(arr);
    };
    document.getElementById("zero").onclick=function () {
        arr.push("0");
        showIn(arr);
    };
    document.getElementById("point").onclick=function () {
        arr.push(".");
        showIn(arr);
    };
    document.getElementById("pi").onclick=function () {
        arr.push("3.1415926");
        showIn(arr);
    };
}