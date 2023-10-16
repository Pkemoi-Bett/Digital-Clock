
const hourEl = document.getElementById("hour")

const minEl  = document.getElementById("minutes")

const  secEl  = document.getElementById("seconds")

const ampmEl = document.getElementById("AmPm")


function updateClock() {
    const date = new Date();
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "Am"
    
    if(h>12){
  
       h=h-12;
       ampm ="Pm";
    }

    h = h<10? "0" + h : h;
    m= m<10? "0" + m : m;
    s = s<10? "0" + s : s;

    hourEl.textContent=h;
    minEl.textContent=m;
    secEl.textContent=s;
    ampmEl.textContent= ampm;
    setTimeout(()=>{
        updateClock()

    }, 1000)
}
updateClock()