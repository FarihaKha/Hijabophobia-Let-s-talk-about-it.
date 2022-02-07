// define the variable quoteList as an array of quotes
var quoteList = [
  "There are many different interpretations of what a hijab is, so a hijab does not always have to be a headscarf. A hijab is a symbol of modesty.", /*0*/
  "In Arabic, a hijab means a barrier or curtain.", /*1*/
  "The hijab is NOT a symbol of oppression. It actually shows empowerment.", /*2*/
  "The hijab is for everyone, not just women. Everyone has to dress modestly.", /*3*/
  "The hijab does not have to be worn in front of members of a person's immediate family.", /*4*/
  "Hijabophobia has caused many Muslims to be harassed, fired from their jobs, and so many other incidents of discrimination." /*5*/
];

// create variables for button, fact, and count, and add event listener
var myBtn = document.getElementById("myBtn");
var quote = document.getElementById("quote");
var count = 0;

myBtn.addEventListener("click", displayQuote);

// create function displayQuote
function displayQuote(){
  quote.innerHTML = quoteList[count];
  count += 1;
  console.log(count)
  if (count == quoteList.length){
    count = 0;
  }
}

// script
var displayScript = document.getElementById("scriptReturned");
var scriptBtn = document.getElementById("scriptBtn");

scriptBtn.addEventListener("click", generateScript);

function generateScript() {
  console.log("hello");
  var name = document.getElementById("name").value;
  var location = document.getElementById("location").value;
  var reasons = document.getElementById("reasons").value;
  displayScript.innerHTML = "Hello, my name is " + name + " and I live in " + location + ". I am calling to ask you to stop passing bills that ban people from being able to wear the hijab. You need to stop these bans because " + reasons + ". Please take my thoughts into consideration. Thank you.";
}


// feedback form
var submitBtn = document.getElementById("submit-button");
var submittedMsg = document.getElementById("submitted-msg");

if (submitBtn) {
  submitBtn.on("click", sendSumbittedMsg);
}

function sendSumbittedMsg() {
  var firstName = document.getElementById("first-name").value;
  var lastName = document.getElementById("last-name").value;
  var emailAddress = document.getElementById("email-address").value;
  var rateExperience = document.getElementById("rate-experience").value;
  var questionsComments = document.getElementById("questions-comments").value;

  submittedMsg.innerHTML = "Thank you, " + first-name + last-name + "! I appreciate your feedback!";
}
