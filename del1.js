/*
function additionlist()
{
    const newdiv = document.createElement("div");
    const att = document.createAttribute("class");
    att.value = "col-12";
    document.getElementsById("")[0].setAttributeNode(att);

    const newh3 = document.createElement("h3");
    const newform = document.createElement("form");
    const newinput = document.createElement("input");

 
    
}
*/
function additionlist()

{
    document.getElementById("frez").style.display = "inline";
 


}
function goooo()
{
    document.getElementById("frez1").style.display = "none";
    document.getElementById("frez").style.display = "none";
    document.getElementById("frez2").style.display = "inline";


 
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    a = parseInt(num1);
    b = parseInt(num2);
    c = a + b;
    document.getElementById("result").innerHTML = c;
}
