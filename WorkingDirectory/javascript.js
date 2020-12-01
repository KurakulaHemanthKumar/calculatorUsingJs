function getHistoryValue(){
    return document.getElementById('history-value').innerHTML;
}
function printHistory(num){
    document.getElementById("history-value").innerHTML = num;
}

function getOutput(){
    return document.getElementById("output-value").innerHTML
}

function printOutput(num){
    if(num == ""){
        document.getElementById("output-value").innerHTML = num;
    }
    else{
        document.getElementById("output-value").innerHTML = getFormatedNumber(num);

    }

}

function reverseNumberFormat(num){
    return Number(num.replace(/,/g,""));
}

function getFormatedNumber(num){
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value
}

var operator = document.getElementsByClassName("operator");
for(var i=0;i<operator.length;i++){
    operator[i].addEventListener('click',function(){
        if(this.id == "clear"){
            printHistory("");
            printOutput("");
        }
        else if(this.id == "backspace"){
            var output = reverseNumberFormat(getOutput()).toString();
            if(output){
                output = output.substr(0,output.length-1);
                printOutput(output);
            }
        }

    });
}

var number = document.getElementsByClassName("number");
for(var i=0;i<number.length;i++){
    number[i].addEventListener('click',function(){
        var output = reverseNumberFormat(getOutput());
        if(output != NaN){
            output = output + this.id;
            printOutput(output);
        }
    });
}