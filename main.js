function clock(){
    let data = new Date;
    let hours = data.getHours();
    let mintues = data.getMinutes();
    let secound = data.getSeconds();
    let flag = "AM";

    if(hours == 0 ){
        hours = 12;
    }
    if(hours > 12){
        hours = hours - 12;
        flag = "PM";
    }
    if(hours < 10 ) hours = "0" + hours ;
    if(mintues < 10) mintues = "0" + mintues;
    if(secound < 10 )secound = "0" + secound;
    document.querySelector("h1").innerHTML = `${hours} : ${mintues} : ${secound} : ${flag}`;
    setTimeout(function(){    clock();   } , 1000)
}
clock();