window.addEventListener('load', start);
function start(){
    var colors = ["red","orange","yellow","green","blue","indigo","violet"];
    var rainbow = document.getElementById('rainbow');
    var counter = 0;
    
    function changeColor(){
        var first = colors[counter];
        if(counter + 1 > 6){
           var second = colors[counter+1-7];
        }
        else{
            var second = colors[counter+1];
        }
        
        if(counter + 2 > 6){
           var third = colors[counter+2-7];
        }
        else{
            var third = colors[counter+2];
        }
        
        if(counter + 3 > 6){
           var fourth = colors[counter+3-7];
        }
        else{
            var fourth = colors[counter+3];
        }
        
        if(counter + 4 > 6){
           var fifth = colors[counter+4-7];
        }
        else{
            var fifth = colors[counter+4];
        }
        
        if(counter + 5 > 6){
           var sixth = colors[counter+5-7];
        }
        else{
            var sixth = colors[counter+5];
        }
        
        if(counter + 6 > 6){
           var seventh = colors[counter+6-7];
        }
        else{
            var seventh = colors[counter+6];
        }
        var attribute = "linear-gradient(to bottom right,"+first+","+second+","+third+","+fourth+","+fifth+","+sixth+","+seventh+")"
        
        //rainbow.setAttribute("background-image", attribute);
        rainbow.style.backgroundImage=attribute;
        if(counter == 6){
           counter =0;
        }
        else{
           counter++;
        }
        console.log(attribute);
        console.log("changed");
    }
    
    var cycle = setInterval(changeColor,100);
    
}