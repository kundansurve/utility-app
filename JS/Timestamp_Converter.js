function toHumanDate(epoch) {
    const myDate = new Date(epoch * 1000);
    return myDate.toGMTString() + "\n" + myDate.toLocaleString();
}


function toEpochConverter(year, month, date, hours, minutes, seconds) {
    const humanDate = new Date(year, month - 1, date, hours, minutes, seconds);
    const val = Math.floor(humanDate.getTime() / 1000);
    return val;
}
const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
button1.onclick = event => {

    const obj = document.querySelector('#epoch');
    document.querySelector('#Output_humandate').textContent = toHumanDate(obj.value);
}
button2.onclick = event2 => {

    const obj = document.querySelectorAll('.human_date');
    document.querySelector('#Epoch_output').textContent = toEpochConverter(obj[0].value, obj[1].value, obj[2].value, obj[3].value, obj[4].value, obj[5].value);
}