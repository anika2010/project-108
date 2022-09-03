function start(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/KlcuzqeDc/model.json',modelLoaded);

}
function modelLoaded(){
    classifier.classify(gotResult);
}

function gotResult(error,result){
    if(error){
    console.error(error);
    }
    else{
  console.log(result);
  red=Math.floor(Math.random()*255)+1;
  green=Math.floor(Math.random()*255)+1;
  blue=Math.floor(Math.random()*255)+1;
    document.getElementById("text_1").innerHTML="Detected Voice is of-  "+result[0].label;
    img1=document.getElementById("img_1");
    if(result[0].label=="Roar"){
        img1.src='lion.jpg';
    }
    if(result[0].label=="mooing"){
        img1.src='cow.jpg';
    }  
    if(result[0].label=="meowing"){
        img1.src='cat.jpg';
    }
    if(result[0].label=="Barking"){
        img1.src='dog.jpg';
    }
    
}
}