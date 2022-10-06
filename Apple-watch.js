
function doData() {
    let date = new Date()
    let year = new Date()
    let optionsData = {
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    }
    let optionsYear = {
        year: "numeric"
    }
    document.getElementById('time').innerText = date.toLocaleString("ru", optionsData)
    document.getElementById('year').innerText = year.toLocaleString("ru", optionsYear)
}

let time = setInterval(doData, 1000);

doData();
