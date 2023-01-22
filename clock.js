setInterval(() => {
    let d = new Date();

    let hr = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();

    let hrotation = 30*hr + min/2;
    let mrotation = 6*min;
    let srotation = 6*sec;

   hour.style.transform = `rotate(${hrotation}deg)`;
   minute.style.transform = `rotate(${mrotation}deg)`;
   second.style.transform = `rotate(${srotation}deg)`;
}, 1000);