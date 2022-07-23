// Key Feature: Positive Quote Generator
var quoteBtn = document.getElementById("quoteBtn");
var quoteList = ["You are beautiful", "Never doubt yourself", "You are enough", "Be kind to yourself", "You are capable", "You are smart", "You are successful"];
var counter = 0;

var quoteDisplayed = document.getElementById("quote");

if(quoteBtn)
{
  quoteBtn.addEventListener("click", generateQuote);
}

function generateQuote()
  {
    quoteDisplayed.innerHTML = quoteList[counter];
    counter++;
    if(counter > quoteList.length - 1)
    {
      counter = 0;
    }
  }
