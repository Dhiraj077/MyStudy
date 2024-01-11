const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock')

// Above both syntax can be used

setInterval(function () {
    let date = new Date()
    // console.log(date.toLocaleTimeString);
    clock.innerHTML = date.toLocaleTimeString()
}, 1000)
