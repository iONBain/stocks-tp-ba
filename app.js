const initial = document.getElementById("initial")
const quant = document.getElementById("quant")
const current = document.getElementById("current")
const submitBtn = document.getElementById("submit")
const refreshBtn = document.getElementById("refresh")
const output = document.getElementById("output")

function classRemover(){
    output.classList.remove("green")
    output.classList.remove("red")
}


function calcProfitOrLoss(){
    var initialValue = initial.value;
    var quantValue = quant.value;
    var currentValue = current.value;

    if(initialValue>0 && quantValue>0 && currentValue>0){
        var valuee = (currentValue-initialValue)*quantValue
        var percentagee = (valuee*100)/initialValue
        var percentageeFixed = Math.abs(percentagee.toFixed(2));
        var valueFixed = Math.abs( valuee.toFixed(2));
        if(valuee>0){
            classRemover();
            output.classList.add("green")
            output.innerText = `Your Profit is Rs.${valueFixed} and Profit% is ${percentageeFixed}%`
        }
        else if(valuee<0){
            classRemover();
            output.classList.add("red")
            output.innerText = `You made a Loss of Rs.${valueFixed} and Loss% is ${percentageeFixed}%`
        }
        else{
            classRemover();
            output.innerText = `No Profit No Loss, You are the BOSS !`
        }
        // output.innerText = "Yayy"
        // console.log("working")
    }
    else if((initialValue) === "" || (quantValue) === "" || (currentValue) === "" ){
        classRemover();
        output.innerText = `One of the fields is not populated.`
    }
    else{
        classRemover();
        output.innerText = `Please Enter Valid Values`
        
    }

}

function refresh(){
    location.reload();
}


submitBtn.addEventListener("click", calcProfitOrLoss)
refreshBtn.addEventListener("click", refresh)