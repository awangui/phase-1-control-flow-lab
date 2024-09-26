function scuberGreetingForFeet(distance){
  // Write your code here!
  let message;
  if (distance > 2500){
    message = 'No can do.';
  }
  else if(distance <= 400){
   message= 'This one is on me!';
  }
  else if(distance > 400 && distance <= 2000){
    message= "That will be twenty bucks.";
  }
  else if(distance > 2000 ){
    message="I will gladly take your thirty bucks.";
  }
  return message;
}

function ternaryCheckCity(city){
  // Write your code here!
  return city === 'NYC'? 'Ok, sounds good.': 'No go.';
  }

function switchOnCharmFromTip(tip){
  // Write your code here!
  if (tip==="generous")
    {
      return "Thank you so much.";
    }
  else if (tip==="not as generous"){
    return "Thank you.";
  }
  else{
    return "Bye.";
  }
}