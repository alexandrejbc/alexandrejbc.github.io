//create text input
var textInput = Ti.UI.createTextField({
    borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
    color: '#336699',
    top: 10, left: 10,
    width: 250, height: 60
});
//display text input
let win = Ti.UI.createWindow({
    backgroundColor: '#fff'
});
win.add(textInput);
win.open();
