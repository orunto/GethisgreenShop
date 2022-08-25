window.onload=function (){
    var menu = document.getElementById("menu");
    var dropdown = document.getElementById("dropdown");

    menu.addEventListener("click", drop);

    function drop () {
        dropdown.style.height= "195px";
        dropdown.style.padding= "85px 0 0 30px";
        menu.removeEventListener("click", drop);
        menu.addEventListener("click", pullup);
    }

    function pullup () {
        dropdown.style.height= "50px";
        dropdown.style.padding= "0";
        menu.removeEventListener("click", pullup);
        menu.addEventListener("click", drop);
    }

    
    var onespan = document.getElementById("onespan");
    var threespan = document.getElementById("threespan");
    var sel = document.getElementById("counter");
    var sele = document.getElementById("counter2");
    var inkbutton = document.getElementById("inkbutton");
    var inkpicker = document.getElementById("inkpicker");
    var redink = document.getElementById("redink");
    var greenink = document.getElementById("greenink");
    var blackcolor = document.getElementById("blackcolor");
    var bluecolor = document.getElementById("bluecolor");
    var greencolor = document.getElementById("greencolor");
    var redcolor = document.getElementById("redcolor");
    var feature = document.getElementById("feature");
    var dimension = document.getElementById("dimension");
    var writing = document.getElementById("writing");
    var featcontent = document.getElementById("featcontent");
    var dimcontent = document.getElementById("dimcontent");
    var writecontent = document.getElementById("writecontent");
    var last = document.getElementById("last");
    var blackblock = document.getElementById("blackblock");
    var blueblock = document.getElementById("blueblock");
    var greenblock = document.getElementById("greenblock");
    var redblock = document.getElementById("redblock");
    

    onespan.addEventListener("click", thick);
    threespan.addEventListener("click", thick2);
    inkbutton.addEventListener("click", appear);
    inkpicker.addEventListener("click", conjure);
    feature.addEventListener("click", featunder);
    writing.addEventListener("click", writeunder);
    dimension.addEventListener("click", dimunder);
    blackcolor.addEventListener("mouseover", blackappear);
    blackcolor.addEventListener("mouseleave", blackdisappear);
    bluecolor.addEventListener("mouseover", blueappear);
    bluecolor.addEventListener("mouseleave", bluedisappear);
    redcolor.addEventListener("mouseover", redappear);
    redcolor.addEventListener("mouseleave", reddisappear);
    greencolor.addEventListener("mouseover", greenappear);
    greencolor.addEventListener("mouseleave", greendisappear);

    blackink.addEventListener("mouseover", blackinkappear);
    blackink.addEventListener("mouseleave", blackinkdisappear);
    blueink.addEventListener("mouseover", blueinkappear);
    blueink.addEventListener("mouseleave", blueinkdisappear);
    redink.addEventListener("mouseover", redinkappear);
    redink.addEventListener("mouseleave", redinkdisappear);
    greenink.addEventListener("mouseover", greeninkappear);
    greenink.addEventListener("mouseleave", greeninkdisappear);

    function blackappear() {
        blackblock.style.display= "block";
    }

    function blackdisappear() {
        blackblock.style.display= "none";
    }

    
    function blackinkappear() {
        blackinkblock.style.display= "block";
    }

    function blackinkdisappear() {
        blackinkblock.style.display= "none";
    }

    function redappear() {
        redblock.style.display= "block";
    }

    function reddisappear() {
        redblock.style.display= "none";
    }


    function redinkappear() {
        redinkblock.style.display= "block";
    }

    function redinkdisappear() {
        redinkblock.style.display= "none";
    }
    
    function blueappear() {
        blueblock.style.display= "block";
    }

    function bluedisappear() {
        blueblock.style.display= "none";
    }

    function blueinkappear() {
        blueinkblock.style.display= "block";
    }

    function blueinkdisappear() {
        blueinkblock.style.display= "none";
    }
    
    function greenappear() {
        greenblock.style.display= "block";
    }

    function greendisappear() {
        greenblock.style.display= "none";
    }

    function greeninkappear() {
        greeninkblock.style.display= "block";
    }

    function greeninkdisappear() {
        greeninkblock.style.display= "none";
    }

    function thick () {
        onespan.style.border = "2px solid black";
        threespan.style.border = "1px solid #676767";
        onespan.removeEventListener("click", thick);
        onespan.addEventListener("click", cleanslate);
    }

    function thick2 () {
        threespan.style.border = "2px solid black";
        onespan.style.border = "1px solid #676767";
        threespan.removeEventListener("click", thick2);
        threespan.addEventListener("click", cleanslate);
    }

    function cleanslate () {
        threespan.style.border = "1px solid #676767";
        onespan.style.border = "1px solid #676767";
        onespan.addEventListener("click", thick);
        threespan.addEventListener("click", thick2);
    }

    function appear () {
        greenink.style.display= "block";
        redink.style.display= "block";
        setTimeout(
            function () {
            greenink.style.opacity= "1";
            redink.style.opacity= "1";
            }
        , 500)
        inkbutton.removeEventListener("click", appear);
        inkbutton.addEventListener("click", disappear);
    }

    function disappear () {
        greenink.style.opacity= "0";
        redink.style.opacity= "0";
        setTimeout(
            function () {
                greenink.style.display= "none";
                redink.style.display= "none";
            }
        , 500)
        inkbutton.removeEventListener("click", disappear);
        inkbutton.addEventListener("click", appear);
    }

    function conjure () {
        greencolor.style.display= "block";
        redcolor.style.display= "block";
        blackcolor.style.display= "block";
        bluecolor.style.display= "block";
        setTimeout(
            function () {
                greencolor.style.opacity= "1";
                redcolor.style.opacity= "1";
                blackcolor.style.opacity= "1";
                bluecolor.style.opacity= "1";
            }
        , 500)
        inkpicker.removeEventListener("click", conjure);
        inkpicker.addEventListener("click", disconjure);
    }

    function disconjure () {
        greencolor.style.opacity= "0";
        redcolor.style.opacity= "0";
        blackcolor.style.opacity= "0";
        bluecolor.style.opacity= "0";
        setTimeout(
            function () {
                greencolor.style.display= "none";
                redcolor.style.display= "none";
                blackcolor.style.display= "none";
                bluecolor.style.display= "none";
            }
        , 500)
        inkpicker.removeEventListener("click", disconjure);
        inkpicker.addEventListener("click", conjure);
    }

    for(var i = 1;i<101;i++){
        sel[i] = new Option( i,i);	
    }

    for(var i = 1;i<101;i++){
        sele[i] = new Option( i,i);	
    }


    function normalcy () {
        feature.style.top= "195px";
        writing.style.top = "237px";
        dimension.style.top = "279px";
        last.style.top = "321px";
        setTimeout(
            function() {
                featcontent.style.opacity = "0";
                writecontent.style.opacity = "0";
                dimcontent.style.opacity = "0";
            }
        , 500);
        featcontent.style.display= "none";
        dimcontent.style.display = "none";
        writecontent.style.display = "none";
        featimg.style.transform = "rotate(0deg)";
        writeimg.style.transform = "rotate(0deg)";
        dimimg.style.transform = "rotate(0deg)";
        feature.addEventListener("click", featunder);
        writing.addEventListener("click", writeunder);
        dimension.addEventListener("click", dimunder);
    }
    function featunder () {
        feature.style.top= "195px";
        writing.style.top = "400px";
        dimension.style.top = "440px";
        last.style.top = "480px";
        featcontent.style.display = "block";
        setTimeout(
            function() {
                featcontent.style.opacity = "1";
            }
        , 500);
        featimg.style.transform = "rotate(180deg)";
        writeimg.style.transform = "rotate(0deg)";
        dimimg.style.transform = "rotate(0deg)";
        feature.removeEventListener("click", featunder);
        feature.addEventListener("click", normalcy);
    }

    function writeunder () {
        feature.style.top= "195px";
        writing.style.top = "237px";
        dimension.style.top = "440px";
        last.style.top = "480px";
        writecontent.style.display = "block";
        setTimeout(
            function() {
                writecontent.style.opacity = "1";
            }
        , 500);
        featimg.style.transform = "rotate(0deg)";
        writeimg.style.transform = "rotate(180deg)";
        dimimg.style.transform = "rotate(0deg)";
        writing.removeEventListener("click", writeunder);
        writing.addEventListener("click", normalcy);
    }


    function dimunder () {
        feature.style.top= "195px";
        writing.style.top = "237px";
        dimension.style.top = "279px";
        last.style.top = "480px";
        dimcontent.style.display = "block";
        setTimeout(
            function() {
                dimcontent.style.opacity = "1";
            }
        , 500);
        featimg.style.transform = "rotate(0deg)";
        writeimg.style.transform = "rotate(0deg)";
        dimimg.style.transform = "rotate(180deg)";
        dimension.removeEventListener("click", dimunder);
        dimension.addEventListener("click", normalcy);
    }
}