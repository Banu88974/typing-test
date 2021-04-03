let lessons = ["You need to verify your account to be able to download tracks. Verify your account in the email sent to you.","A collection of tracks with our favorite guilty pleasure: Claps & Snaps! Browse through this mix of mid and high energy tracks full of driving percussions, rousing rhythms, and progressive-edgy beats. This album is full of attitude, a pinch of darkness and will take your productions to the next level.",`You are off to great places, today is your day. Your mountain is waiting, so get on
your way.`,`You always pass failure on the way
to success.`,`Winning does not always mean being first. Winning means you are doing better than you have
done before.`,`“You’re braver than you believe, and stronger than you seem, and smarter than you think.`,`Once you replace negative thoughts with positive ones, you will start having positive results.`,`“Positive thinking will let you do everything better than negative thinking will.`]






let originalTextTag = document.querySelector("#original-text");
let inputTextTag = document.querySelector("#text-box");
let minTag = document.querySelector("#minutes");
let secTag= document.querySelector("#seconds");
let milliSecTag= document.querySelector("#milli-seconds");
let greetTag= document.querySelector("#greet");
let claps = document.querySelector("#claps");
let resetBtn = document.querySelector("#reset");

let minutes = 0;
let seconds = 0;
let milliSeconds = 0;
let timeRunning = false;
let count = 0;
let interval=null;

let startTimer = () =>
{
	count++;
	minutes = Math.floor((count/100)/60);
	seconds = Math.floor((count/100)-(minutes*60));
	milliSeconds = Math.floor(count - (seconds*100) - (minutes*6000));

	minTag.innerText = leadingZero(minutes);
	secTag.innerText = leadingZero(seconds);
	milliSecTag.innerText = leadingZero(milliSeconds);
} 

let leadingZero = (time) =>
{
	if (time <=9) 
	{
		return "0"+time;
	}
	else
	{
		return time;
	}
}



inputTextTag.addEventListener('keyup',function()
 {

	if (!timeRunning)
	{	
		
		interval=setInterval(startTimer,10);
		timeRunning = true;
	}
	let originalText = originalTextTag.innerText;
let textEntered = inputTextTag.value;
let partialText = originalText.substring(0,textEntered.length);
evaluate(originalText,textEntered,partialText);

});




let evaluate = (originalText,textEntered,partialText) =>
{
	if(textEntered === "")
	{
		style('grey');

		

	}
	else if (textEntered === originalText) 
	{
		style('green');	
		claps.play();
		clearInterval(interval);
		greetTag.style.display = "block";


	}
	else if (textEntered === partialText)
	{
		style('orange');

	}
	else
	{
		style('red');

	}
}





let style = (color,border) =>
{
	inputTextTag.style.borderColor = color;
	inputTextTag.style.boxShadow = 	`0px 0px 10px ${color}`;
}


resetBtn.addEventListener('click',function()
{
	minutes=0;
	seconds=0;
	milliSeconds=0;
	count=0;
 	clearInterval(interval);
	minTag.innerText = "0"+minutes;
	secTag.innerText = "0"+seconds;
	milliSecTag.innerText = "0"+milliSeconds;



})



let changeText =(index)=>
{
	originalTextTag.innerText = lessons[index];
}