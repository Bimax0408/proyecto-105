Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camara=document.getElementById("camara");

Webcam.attach('#camara');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("resultado").innerHTML='<img id="imagen_capturada" src="'+data_uri+'">';
    });
}

console.log('ml5 version', ml5.version);
classifer=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/wCE2JsuiZ/model.json', modelLoaded);

function modelLoaded() {
    console.log("modelo cargado");
}

function check() {
    img=document.getElementById("imagen_capturada");
    classifier.classify(img,gotResult);
}

function gotResult(error,results) {
    if (error) {
        console.error(error);
    } else {
        console.log(result);
        document.getElementById("objeto_nombre").innerHTML=results[0].label;
        document.getElementById("objeto_presicion").innerHTML=results[0].confidence.toFixed(3);
    }
}

