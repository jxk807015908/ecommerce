/**
 * Created by Administrator on 17-7-17.
 */
    //无缝滚动
var oCf = document.getElementById('show');
var ocPrev = document.getElementById("leftbutton");
var ocNext =document.getElementById("rightbutton");
var oUl = oCf.getElementsByTagName('ul')[0];
var aLi = oUl.getElementsByTagName('li');
//alert(aLi.length);
var iNow = 0;
oUl.innerHTML +=oUl.innerHTML;
oUl.style.width =  aLi.length * aLi[0].offsetWidth + 'px';
//alert(aLi.length);
ocPrev.onclick = function(){
    if(iNow==0){
        iNow=aLi.length/2;
        oUl.style.left = -oUl.offsetWidth/2 + 'px';
    }
    moveAll(oUl,-iNow*aLi[0].offsetWidth,-(iNow-1)*aLi[0].offsetWidth)
    iNow--;
}
ocNext.onclick = function(){
    if(iNow == aLi.length/2){
        iNow = 0;
        oUl.style.left = 0;
    }
    moveAll(oUl,-iNow*aLi[0].offsetWidth,-(iNow+1)*aLi[0].offsetWidth);
    iNow++;
};

function moveAll(el,old,iTarget){
    // 防止，你上一个动没有结束，又执行下一个动作
    clearInterval(el.timer);
    el.timer = setInterval(function(){
        var iSpeed = (iTarget - old)/10;
        iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
        if(iTarget == old){
            clearInterval(el.timer);
        }
        else{
            old += iSpeed;
            el.style.left = old + 'px';
        }
    },30);
}
//下拉选择菜单
var oselectgroup=document.getElementById("selectgroup");
var oli=oselectgroup.getElementsByTagName("li");
var otriangle1=document.getElementById("triangle1");
var otriangle2=document.getElementById("triangle2");
var otriangle3=document.getElementById("triangle3");
var oa=oselectgroup.getElementsByTagName("a");
var num1=0;
var num2=0;
var num3=0;
otriangle1.onclick=function(){
    if(num1==0){
        oli[0].className = "";
        oli[1].className = "";
        oli[2].className = "";
        this.parentNode.className="active";
        num1++;
    }
    else {
        oli[0].className = "";
        oli[1].className = "";
        oli[2].className = "";
        num1 = 0;
    }
};
otriangle2.onclick=function(){
    if(num2==0){
        oli[0].className = "";
        oli[1].className = "";
        oli[2].className = "";
        this.parentNode.className="active";
        num2++;
    }
    else {
        oli[0].className = "";
        oli[1].className = "";
        oli[2].className = "";
        num2 = 0;
    }
};
otriangle3.onclick=function(){
    if(num3==0){
        oli[0].className = "";
        oli[1].className = "";
        oli[2].className = "";
        this.parentNode.className="active";
        num3++;
    }
    else {
        oli[0].className = "";
        oli[1].className = "";
        oli[2].className = "";
        num3 = 0;
    }
};
for(var k=0;k<oa.length;k++){
    oa[k].onclick=function(){
      //  alert(this.innerHTML);
      //  alert(this.parentNode.parentNode.firstChild.nextSibling.innerHTML);
        this.parentNode.parentNode.firstChild.nextSibling.value=this.innerHTML;
      //  this.parentNode.parentNode.firstChild.nextSibling.value="dsfsd";
    };
}

//页切换
var oPage=document.getElementById("page");
var oProduct=document.getElementById("product");
var oProductUl=oProduct.getElementsByTagName("ul");
var oPageA=oPage.getElementsByTagName("a");
var nowpage=1;
for(var i=0;i<oPageA.length;i++){
    oPageA[i].onclick=function(){
        for(var j=0;j<oProductUl.length-1;j++){
            oProductUl[j].style.display="none";
        }
        for(var k=0;k<oPageA.length;k++) {
            oPageA[k].className = "";
        }
        if(this.innerHTML=="NEXT&gt;"){
            nowpage++;
            if(nowpage>oPageA.length-2){
                nowpage--;
                oPageA[nowpage-1].className="active";
                oProductUl[nowpage-1].style.display="block";
                alert("没有下一页了！");
            }
        }
        else if(this.innerHTML=="LAST&gt;&gt;"){
            nowpage=oPageA.length-2;
        }
        else{
            nowpage=this.innerHTML;
            //alert(this.innerHTML);
        }
        oPageA[nowpage-1].className="active";
        oProductUl[nowpage-1].style.display="block";
    };
}

//轮播（淡入淡出）
var oframe1=document.getElementById("frame1");
var oframe1li=frame1.getElementsByTagName("li");
var fadetimer1=null;
var fadetimer2=null;
var nowpic=0;
var alpha=0;
function autofadeplay(){
    clearInterval(fadetimer1);
    fadetimer1=setInterval(function(){
        if(nowpic==oframe1li.length-1){
            nowpic=0;
        }
        else{
            nowpic++;
        }
        fadeshow(nowpic);
    },3000);
}
function fadeshow(num){
    for(var i=0;i<oframe1li.length;i++){
        oframe1li[i].style.opacity=0;
        oframe1li[i].style.filter="alpha(opacity=0)";
    }
    alpha=0;
    fadetimer2=setInterval(function(){
        alpha+=2;
        oframe1li[num].style.opacity=alpha/100;
        oframe1li[num].style.filter="alpha(opacity="+alpha+")";
        if(alpha==100){
            clearInterval(fadetimer2);
        }
    },1);
}
autofadeplay();



































