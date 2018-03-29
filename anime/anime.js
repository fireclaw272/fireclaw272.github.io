window.onload = function(){
    var W;
    var H;
    
    var video = document.getElementById("video");
    var audio = document.getElementById("audio");
    var playPauseBtn = document.getElementById("playPause");
    var forwardBtn = document.getElementById("forwardBtn");
    var backBtn = document.getElementById("backBtn");
    var title = document.getElementById("name");
    var author = document.getElementById("author")
    var shuffleBtn = document.getElementById("shuffle");
    var loopBtn = document.getElementById("loop");
    var controller = document.getElementById("controller");
    var volume = document.getElementById("volume");
    var volumeContainer = document.getElementById("volumeContainer");
    var currentVolume = document.getElementById("currentVolume");
    var timeBar = document.getElementById("timeBar");
    var currentTime = document.getElementById("currentTime");
    var maxTime = document.getElementById("maxTime");
    
    var playing = false;
    var looping = false;
    var volumePercent =1;
    
    var start;
    var list = [];
    var currentlyPlaying = 0; // the index of the currently playing song
    
    addSong("Yumetourou", "RADWIMPS", "assets/yumetourou.mp3","assets/kimiNoNaWa.mp4");
    addSong("Nandemonaiya", "RADWIMPS", "assets/nandemonaiya.mp3", "assets/kimiNoNaWa.mp4");
    addSong("Zen Zen Zense", "RADWIMPS", "assets/zenzenzense.mp3", "assets/kimiNoNaWa.mp4");
    addSong("Sparkle", "RADWIMPS", "assets/sparkle.mp3", "assets/kimiNoNaWa.mp4");
    addSong("Chiisana Boukensha", "Aqua, Darkness, Megumin", "assets/chiisanaBoukensha.mp3", "assets/konosuba.mp4");
    addSong("Ouchi Ni Kaeritai", "Aqua, Darkness, Megumin", "assets/ouchiNiKaeritai.mp3", "assets/konosuba.mp4");
    
    console.log(list);
    
    resize();
    updatePlayer();
    
    function resize(){
        W = window.innerWidth;
        H = window.innerHeight;
        video.style.width = W+"px";
        video.style.height = H+"px";
    };
    
    function addSong(name,authorName,musicLink,videoLink){
        list.push({
            name: name,
            author: authorName,
            music: musicLink,
            video: videoLink,
        })
    };
    
    function playPause(){
        console.log("clicked");
        if(audio.paused){
            audio.play();
            playPauseBtn.setAttribute("src","assets/pause.png");
            playing = true;
        }
        else{
            audio.pause();
            playPauseBtn.setAttribute("src","assets/play.png");
            playing = false;
        }
    };
    
    function updatePlayer(){
        title.innerHTML = list[currentlyPlaying].name;
        author.innerHTML = list[currentlyPlaying].author;
        audio.setAttribute("src", list[currentlyPlaying].music);
        console.log(video.src);
        console.log(list[currentlyPlaying].video);
        
        if(playing){
            audio.play();
        }

        if(audio.paused){
            playPauseBtn.setAttribute("src","assets/play.png");
        }
        else{
            playPauseBtn.setAttribute("src","assets/pause.png");
        }
        
        if(video.src.includes(list[currentlyPlaying].video)){
            return;
        }
        else{
            video.setAttribute("src", list[currentlyPlaying].video);
        }
    };
    
    function forwardSong(){
        if(currentlyPlaying >= list.length-1){
            currentlyPlaying =0;
        }
        else{
            currentlyPlaying ++;
        }
        updatePlayer();
    }
    
    function forwardSongLoop(){ // when loop is active
        if(looping){
            updatePlayer();
        }
        else{
            forwardSong();
        }
    }
    
    function backSong(){
        if(currentlyPlaying <= 0){
            currentlyPlaying = list.length -1; 
        }
        else{
            currentlyPlaying --;
        }
        updatePlayer();
    }
    
    function shuffle(){
        var current = list[currentlyPlaying]; // set var to currently playing 
        console.log(current);
        list.splice(currentlyPlaying,1);// removes currently playing from the list
        list.sort(function(a,b){return 0.5-Math.random()});// shuffles list
        list.unshift(current);
        currentlyPlaying =0
        console.log("shuffled");
        console.log(list);
    }
    
    function loop(){
        console.log("loop clicked")
        if(looping){
            looping = false;
            loopBtn.style.filter = "invert(0)";
        }
        else{
            looping = true;
            loopBtn.style.filter = "invert(0.75)";
        }
        
    }
    
    function showVolume(){
        volumeContainer.style.opacity = 1;
        currentVolume.style.opacity = 1;
    }
    
    function hideVolume(){
        volumeContainer.style.opacity = 0;
        currentVolume.style.opacity = 0;
        console.log("timeout started");
    }
    
    function convertToMin(seconds){
        var param = Math.floor(seconds);
        var min = (param-(param%60))/60;
        var sec = (param % 60);
        if(sec<10){
            sec = "0" + sec.toString();
        }
        var time = min+":"+sec;
        return time;
    }
    
    function updateTime(){
            var currentSec =Math.floor(audio.currentTime);
            var currentInMin = convertToMin(currentSec);
            var duration = Math.floor(audio.duration);
            var max = convertToMin(duration);
            maxTime.innerHTML = max;
            timeBar.setAttribute("min","0");
            timeBar.setAttribute("max",duration);
            timeBar.value = currentSec;
            currentTime.innerHTML = currentInMin;
    }
    
    function changeTime(){// change timeBar when user slides/ clicks on a time
        var clickValue = timeBar.value;
        audio.currentTime = clickValue;
        updateTime();
    }
    
    
    timeBar.addEventListener("input", changeTime);
    timeBar.addEventListener("mousedown",function(){audio.pause()});//while sliding pause music
    timeBar.addEventListener("mouseup",function(){audio.play()});//when let go continue music
    var startTimeBar = setInterval(updateTime,500);
    loopBtn.addEventListener("click", loop)
    shuffleBtn.addEventListener("click", shuffle);
    audio.addEventListener("ended",forwardSongLoop);
    backBtn.addEventListener("click", backSong);
    playPauseBtn.addEventListener("click", playPause);
    forwardBtn.addEventListener("click", forwardSong);
    window.addEventListener("resize", resize);
//    volume.addEventListener("mouseover",showVolume);
//    volume.addEventListener("mouseleave", hideVolume);
    
    

    
    controller.addEventListener('wheel', function(e){
        if (e.deltaY < 0) {
            showVolume();
            clearTimeout(start);
            console.log('scrolling up');
            if(audio.volume < 1){
                for(var i= 0; i<5; i++){
                    audio.volume = Math.round((audio.volume + 0.01)*100)/100;
                    console.log(audio.volume);
                    volumePercent = audio.volume * 100;
                    console.log(volumePercent);
                    currentVolume.style.height = volumePercent + "%";
                }
            }
            start = setTimeout(hideVolume,1000)
        }
        if (e.deltaY > 0) {
            showVolume();
            clearTimeout(start);
            console.log('scrolling down');
            if(audio.volume>0){
                for(var i=0;i<5;i++){
                    audio.volume = Math.round((audio.volume - 0.01)*100)/100;
                    console.log(audio.volume);
                    volumePercent = audio.volume * 100;
                    console.log(volumePercent);
                    currentVolume.style.height = volumePercent + "%";
                }
                
                
            }
            start = setTimeout(hideVolume,1000)
        }
    });
    
    
    
    
}