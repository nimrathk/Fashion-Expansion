// Key Feature: Personalize It --> Brand Message 
var message1 = document.getElementById("message1");
var message2 = document.getElementById("message2");
var message3 = document.getElementById("message3");

var inputBtn = document.getElementById("inputBtn");
if(inputBtn)
{
  inputBtn.addEventListener("click", display);
}

function display()
  {
    var inputName = document.getElementById("inputName").value;
    var inputIssue = document.getElementById("inputIssue").value;

    message1.innerHTML = "Dear " + inputName + ",";
    message2.innerHTML = "As a concerned citizen & member of the fashion community, I would like to inform you about an issue I noticed regarding your brand. I observed this issue: " + inputIssue + ". I feel that your brand can do better to promote a more equal, diverse, and inclusive world. Please help do your part to create a fashion industry that represents everyone.";
    message3.innerHTML = "Thank you for your time and have a nice day.";
  }
