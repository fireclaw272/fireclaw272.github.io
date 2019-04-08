window.addEventListener('load', main);
function main(){
    var button = document.getElementById("button");
    var textBox = document.getElementById("answerBox");
    var targetURL = "https://fireclaw272.github.io/SEA_Admit/letter/";
    
    function checkAnswer(){
        var value = answerBox.value;
        //Hello, if you are ooking to the answer to the question, it is right here. I was to lazy to make the answer invisible so have fun, but the letter I wrote for my sister is just a joke letter, so you probably don't even want to read it.
        if(value == "johnny" || value == "Johnny"){
           window.location = targetURL;
        }
        else{
            answerBox.value = "";
            var paragraph = document.createElement("p");
            paragraph.classList.add('error');
            var node = document.createTextNode("Try Again");
            paragraph.appendChild(node);
            
            var div = document.getElementById("container");
            div.insertBefore(paragraph,textBox);
        }
    }
    
    button.addEventListener("click", checkAnswer);
}
