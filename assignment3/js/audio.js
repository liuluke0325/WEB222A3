// Data for the "HTML Audio" Page

var audio = {
    controls: true, 
    source: [
        {src: "https://scs.senecac.on.ca/~tanvir.alam/shared/fall-2018/web222/Track03.mp3", type: "audio/mpeg"},
        {src: "https://scs.senecac.on.ca/~tanvir.alam/shared/fall-2018/web222/Track03.ogg", type: "audio/ogg"}
    ]
};




window.onload=function(){  // for dom   


var mycontainer = document.querySelector("#audiojs");   // create a variable "mycontainer" for dom   
var mymusic = "<figure>";   // create a variable to hold string 

    if(audio.controls == true)
    {mymusic+= "<audio controls>"} else {mymusic += "<audio>"}       // if controls is true, then print out <audio controls>, otherwise withoout controls in html
    
for(var i = 0; i<audio.source.length;i++){  // use the for loop to create <source> tag in html, and put the whole string into mymusic


mymusic+= '<source src="'+audio.source[i].src+'" type="'+audio.source[i].type+'">';

}

mycontainer.innerHTML+=mymusic+"</audio></figure>";  // for dom       , and set the "mymusic" to "mycontainer" 
 
}