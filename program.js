document.addEventListener("DOMContentLoaded",function(){
    var count = 1900;
    var speed = 500;

    timer(); 
    
    function timer() {
        count++;
        if (count > 2026) {
            return;
        }
        document.getElementById("yearcountdiv").innerHTML = "<b>" +count +"</b>";

        speed = speed - count * 20;

        setTimeout(timer, speed);
}
});

document.addEventListener("DOMContentLoaded",function(){

        const openbutton = document.getElementById("glass-button");
        const popupwindows = document.getElementById("mypopup-detailsdiv");
        const closebtn = document.querySelector(".close");
        var x = 0;
        openbutton.addEventListener('click',() => {
        popupwindows.style.display = 'none';
        if (popupwindows.style.display = 'block'){
            document.getElementById("glass-button").onclick = function(){
                popupwindows.style.display = 'none';
                x=1;
            }
        }
        if(x===1){
            document.getElementById("glass-button").onclick = function(){
                popupwindows.style.display = 'block';
                x=0;
            }
        }
    });

    closebtn.addEventListener('click',() => {
    popupwindows.style.display = 'none';
    x=1;
    });
});

