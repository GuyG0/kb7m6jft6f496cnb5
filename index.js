window.onload = function(){
    document.body.style.zoom="390%"
    var t =0;
    var s =new Date();
    var v = s.getUTCFullYear();
    var f =s.getDay()
    var a = s.getHours();
    var c = s.getMinutes();
    var b = s.getSeconds();
    var t = document.getElementsByClassName("h")
    var q = ["Sunday","Monday","Tuesday", "Wednesday","Thursday","Friday","Saturday"]
    t[1].innerHTML = "Today is: " + q[f]
    if(5<a & a<10){
        t[0].innerHTML ="Good morning"
    }
    if(10<a & a<17){
        t[0].innerHTML ="Good afternoon"
    }
    if(17<a & a<21){
        t[0].innerHTML ="Good evening"
    }
    if(21<a & a<5){
        t[0].innerHTML ="Good night"
    }
    if (a>12){
        t[2].innerHTML ="Corrent time:"+" "+ (a-12)+":"+c+":"+b+" PM"
    }
    else{
        t[2].innerHTML ="Corrent time:"+" "+ a+":"+c+":"+b+" AM"
    }
    var er =0

    if (window.pageYOffset<er){
        document.getElementById("2").style.position ="fixed";
        document.getElementById("2").style.top = er-window.pageYOffset+"px";
        document.getElementById("4").style.top = er-window.pageYOffset+"px";
    if (er-window.pageYOffset>20){
        er = 20+window.pageYOffset;
        }
    }
    else{
        document.getElementById("2").style.top ="0px" ;
        document.getElementById("4").style.top ="0px" ;
        er = window.pageYOffset;
    }
}

    
    var er =0
    function s(){
        if (window.pageYOffset<er){
            
            document.getElementById("2").style.position ="fixed";
            document.getElementById("2").style.top = er-window.pageYOffset+"px";
            document.getElementById("4").style.top = er-window.pageYOffset+"px";
            if (er-window.pageYOffset>20){
                er = 20+window.pageYOffset;
            }
        }
        else{
            document.getElementById("2").style.top ="0px" ;
            document.getElementById("4").style.top ="0px" ;
            er = window.pageYOffset;
            if (er-window.pageYOffset>20){
                er = 20+window.pageYOffset;
            }
            
        }
    }   
window.onscroll=function(){s()}
document.getElementsByClassName("dropdown-content").style.display ="none";
    var er =0
    function s(){
        if (window.pageYOffset<er){
            if (er-window.pageYOffset>20){
                er = 20+window.pageYOffset;
            }
            document.getElementById("2").style.position ="fixed";
            document.getElementById("2").style.top = er-window.pageYOffset+"px";
            document.getElementById("4").style.top = er-window.pageYOffset+"px";
           
    }

    else{
        document.getElementById("2").style.top ="0px" ;
        document.getElementById("4").style.top ="0px" ;
        document.getElementById("myDropdown").classList.remove("show");
        er = window.pageYOffset;
        if (er-window.pageYOffset>20){
            er = 20+window.pageYOffset;
            }
        }
        if (window.pageYOffset >=70){
            document.getElementById("myBtn").style.opacity="1"}
        else{
            document.getElementById("myBtn").style.opacity ="0" 
        }
    
    }
    
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}   
function k(){
    document.getElementById("1").style.backgroundColor=  "rgb(255, 241, 181)";
    document.getElementById("1").style.boxShadow= "0x 0px 4px rgba(2, 2, 2, 0.01)"; 
}
function kk(){
    document.getElementById("1").style.backgroundColor=  "beige";
    document.getElementById("1").style.boxShadow= "1x 1px 3px rgba(2, 2, 2, 0.192)"; 
}
function kkk(){
    document.getElementById("6").style.backgroundColor=  "rgb(255, 241, 181)";
    document.getElementById("6").style.boxShadow= "0x 0px 4px rgba(2, 2, 2, 0.01)"; 
}
function kkkk(){
    document.getElementById("6").style.backgroundColor=  "white";
    document.getElementById("6").style.boxShadow= "1x 1px 3px rgba(2, 2, 2, 0.192)"; 
}
function kkkkk(){
    document.getElementById("7").style.backgroundColor=  "rgb(255, 241, 181)";
    document.getElementById("7").style.boxShadow= "0x 0px 4px rgba(2, 2, 2, 0.01)"; 
}
function kkkkkk(){
    document.getElementById("7").style.backgroundColor=  "white";
    document.getElementById("7").style.boxShadow= "1x 1px 3px rgba(2, 2, 2, 0.192)"; 
}
function kkkkkkk(){
    document.getElementById("8").style.backgroundColor=  "rgb(255, 241, 181)";
    document.getElementById("8").style.boxShadow= "0x 0px 4px rgba(2, 2, 2, 0.01)"; 
}
function kkkkkkkk(){
    document.getElementById("8").style.backgroundColor=  "white";
    document.getElementById("8").style.boxShadow= "1x 1px 3px rgba(2, 2, 2, 0.192)"; 
}
function kkkkkkkkk(){
    document.getElementById("4").style.backgroundColor=  "rgb(255, 241, 181)";
    document.getElementById("4").style.boxShadow= "0x 0px 4px rgba(2, 2, 2, 0.01)"; 
    
}
function kkkkkkkkkk(){
    document.getElementById("4").style.backgroundColor=  "white";
    document.getElementById("4").style.boxShadow= "1x 1px 3px rgba(2, 2, 2, 0.192)"; 
    
}


function check(){
    var h = 0

    var i;
    var r = document.getElementsByClassName("e")
    var n = document.getElementById("i").value
    if (n.length!=10){
        r[0].innerHTML ="Please enter 10 digits"
        h=1
    }
    else{
        for (i = 0; i < n.length; i++)
        {
            if (n.charCodeAt(i)<48 | n.charCodeAt(i)>57){
                r[0].innerHTML ="Please only enter numbers"
                h=1
            }
        }
    }
    
    if (h==0){
        r[0].innerHTML ="Accepted"
    }


}

