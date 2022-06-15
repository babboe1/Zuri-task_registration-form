var form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    var error = false;

    if(form['first-name'].value === "") {
        form['first-name'].classList.add('invalid');
        error = true;
    } else {
        form['first-name'].classList.remove('invalid');
    }

    if(form['last-name'].value === "") {
        form['last-name'].classList.add('invalid');
        error = true;
    } else {
        form['last-name'].classList.remove('invalid');
    }

    if(form['email'].value === "") {
        form['email'].classList.add('invalid');
        error = true;
    } else {
        const emailTestRe = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var isValidEmail = emailTestRe.test(String(form['email'].value).toLowerCase());
        
        if(!isValidEmail) {
            form['email'].classList.add('invalid');
            error = true;
        } else {
            form['email'].classList.remove('invalid');
        }
    }

    if(form['password'].value === "") {
        form['password'].classList.add('invalid');
        error = true;
    } else {
        form['password'].classList.remove('invalid');
    }

    if(!error) {
        form.submit();
    }

})