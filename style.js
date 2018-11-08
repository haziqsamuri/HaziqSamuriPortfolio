console.log("js owrking");
var right=document.getElementById('image').style.height;
var left=document.getElementById('text').style.height;
console.log(right);
if(left>right)
{
    document.getElementById('image').style.height=left;
}
else
{
    document.getElementById('text').style.height=right;
}