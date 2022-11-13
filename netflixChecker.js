var btn = document.getElementById('btn');
var data = document.getElementById('input');

function checkEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
console.log(data)
//put data into array, separator is |
//return new object that is a array of arrays (mail, password)
function parseData(data) {
    //line break
    var lines = data.split('\r');
//
    //split by |
    var parsed = lines.map(function (line) {
        return line.split('|');
    });
    //return array of arrays
    return parsed;
}
//test parseData
document.createElement('p').innerHTML = "zizizi";
btn.addEventListener('click', function () {
    console.log(parseData(data.value));
});


