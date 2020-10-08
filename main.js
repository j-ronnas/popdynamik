var rabbitCount = 20
var foxCount = 20


var rabbitR = 0.5
var rfint = 0.025
var foxDeathRate = 0.25



var timeStep = 0.1

var iteration = 0


function iterate(){
    updateView()

    for(let i = 0; i < 1/timeStep; i++){
        deltaRabbits = (rabbitCount*rabbitR - rabbitCount*foxCount*rfint)
        deltaFoxes = (-foxCount*foxDeathRate + rabbitCount * foxCount*rfint)

        rabbitCount += timeStep*deltaRabbits
        foxCount += timeStep*deltaFoxes
    }   

    iteration+=1
    
}


function updateView(){
    document.querySelector("#fox-count").innerHTML = "Rävar: " + foxCount.toFixed(0)
    document.querySelector("#rabbit-count").innerHTML = "Kaniner: " + rabbitCount.toFixed(0)
    document.querySelector("#data-list").innerHTML += iteration +"\t" +rabbitCount.toFixed(0)+ "\t" + foxCount.toFixed(0) + "<br>"
    
}


var rabbitRSlider = document.querySelector("#rabbit-rep")
var rabbitRSliderDisp = document.querySelector("#rabbit-rep-disp")

rabbitRSlider.oninput = function(){
    rabbitR = parseFloat(rabbitRSlider.value)
    rabbitRSliderDisp.innerHTML = rabbitR
}



var rfintSlider = document.querySelector("#rabbit-fox-interaction")
var rfintSliderDisp = document.querySelector("#rabbit-fox-interaction-disp")

rfintSlider.oninput = function(){
    rfint = parseFloat(rfintSlider.value)
    rfintSliderDisp.innerHTML = rfint
}

var foxDRslider = document.querySelector("#fox-deathrate")
var foxDRsliderDisp = document.querySelector("#fox-deathrate-disp")

foxDRslider.oninput = function(){
    foxDeathRate = parseFloat(foxDRslider.value)
    foxDRsliderDisp.innerHTML = foxDeathRate
}

var foxStartPopSlider = document.querySelector("#fox-startpop")
var foxStartPopSliderDisp = document.querySelector("#fox-startpop-disp")

foxStartPopSlider.oninput = function(){
    foxStartPopSliderDisp.innerHTML = parseFloat(foxStartPopSlider.value)
}

var rabbitStartPopSlider = document.querySelector("#rabbit-startpop")
var rabbitStartPopSliderDisp = document.querySelector("#rabbit-startpop-disp")

rabbitStartPopSlider.oninput = function(){
    rabbitStartPopSliderDisp.innerHTML = parseFloat(rabbitStartPopSlider.value)
}


function reset(){
    rabbitCount = parseFloat(rabbitStartPopSlider.value)
    foxCount =parseFloat(foxStartPopSlider.value)
    iteration = 0
    updateView()
    document.querySelector("#data-list").innerHTML = ""
}




reset();