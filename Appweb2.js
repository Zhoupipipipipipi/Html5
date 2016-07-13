/**
 * Created by Administrator on 2016/7/13.
 */

function saveStorage(id){
    var data = document.getElementById(id).value;
    var time = new Date().getTime();   //获取时间
    localStorage.setItem(time,data);
    alert("数据已储存");
    loadStorage('msg');
}

function loadStorage(id){
    var result =  "<table border='1'>";
    for(var i=0;i<localStorage.length;i++){
        var key = localStorage.key(i);    //获取数据
        var value = localStorage.getItem(key);
        var date = new Date();
        date.setTime(key);
        result +="<tr><td>"+value+"</td><td>"+date+"</td></tr>";
    }
    result+="</table>";
    var target = document.getElementById(id);
    target.innerHTML=result;
}

function clearStorage(){
    localStorage.clear();
    alert("数据已经清除");
    loadStorage('msg');
}