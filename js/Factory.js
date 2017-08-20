/**
 * Created by Administrator on 2017/8/20.
 */
//Operation 运算类
function Operation() {
    Operation.prototype.getResult=function () {
        var result=0;
        return result;
    }
}
Object.defineProperties(Operation.prototype,{
    _numberA:{
        writable:true,
        value:0
    },
    _numberB:{
        writable:true,
        value:0
    },
    numberA:{
        get:function () {
            return this._numberA;
        },
        set:function (newValue) {
            this._numberA=newValue;
        }
    },
    numberB:{
        get:function () {
            return this._numberB;
        },
        set:function (newValue) {
            this._numberB=newValue;
        }
    }
});
//加减乘除类 继承运算类
//加法
function OperationAdd() {
}
OperationAdd.prototype=new Operation();//继承Operation
//重写getResult方法
OperationAdd.prototype.getResult=function () {
    var result=this.numberA+this.numberB;
    return result;
}
//减法
function OperationSub() {
}
OperationSub.prototype=new Operation();//继承Operation
//重写getResult方法
OperationSub.prototype.getResult=function () {
    var result=this.numberA-this.numberB;
    return result;
}
//乘法
function OperationMulti() {
}
OperationMulti.prototype=new Operation();//继承Operation
//重写getResult方法
OperationMulti.prototype.getResult=function () {
    var result=this.numberA*this.numberB;
    return result;
}
//除法
function OperationDiv() {
}
OperationDiv.prototype=new Operation();//继承Operation
//重写getResult方法
OperationDiv.prototype.getResult=function () {
    var result;
    if(this.numberB==0)
    {
        result=0;
    }else{
        result=this.numberA/this.numberB;
    }
    return result;
}
//模
function OperationMod() {
}
OperationMod.prototype=new Operation();//继承Operation
//重写getResult方法
OperationMod.prototype.getResult=function () {
    var result=this.numberA%this.numberB;
    return result;
}
//简单运算工厂类
var OperationFactory={
    createOperate:function (operate) {
        var oper=null;
        switch (operate){
            case "+":oper = new OperationAdd();
            break;
            case "-":oper = new OperationSub();
                break;
            case "*":oper = new OperationMulti();
                break;
            case "/":oper = new OperationDiv();
                break;
            case "%":oper = new OperationMod();
                break;
        }
        return oper;
    }
};
// var oper=OperationFactory.createOperate("+");
// oper.numberA=5;
// oper.numberB=2;
// console.log(oper.getResult());