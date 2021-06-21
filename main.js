var names=[];
function submit(){
var name1=document.getElementById("student_1").value;
var name2=document.getElementById("student_2").value;
var name3=document.getElementById("student_3").value;
var name4=document.getElementById("student_4").value;
names.push(name1);
names.push(name2);
names.push(name3);
names.push(name4);
document.getElementById("sub_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
document.getElementById("display").innerHTML=names;
}
function sorting(){
    names.sort();
    document.getElementById("display").innerHTML=names;
}