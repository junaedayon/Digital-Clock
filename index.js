function clock () {

    let hour = document.getElementById("hour");
    let min = document.getElementById("min");
    let sec = document.getElementById("sec");

let clock = new Date();

let h = clock.getHours();
let m = clock.getMinutes();
let s = clock.getSeconds();

hour.innerHTML = h ;
min.innerHTML = m ;
sec.innerHTML = s;

}
clock()

setInterval((clock) , 1000);

