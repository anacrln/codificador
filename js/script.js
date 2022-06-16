let choices = document.querySelector("#choices");
let button = document.querySelector("#button");

choices.addEventListener("change", function (event) {
    event.preventDefault();

    let hide = document.getElementById("hide");

    if (event.target.value == "cipherC") {
        hide.style.display = "block";
    }
    else {
        hide.style.display = "none";
    }
});


let rb = document.querySelectorAll('input[name="codeOrDecode"]');

rb.forEach((radio) => {
    radio.addEventListener("change", function (event) {
        event.preventDefault();


        if (event.target.value == "decode") {
            button.innerHTML = "Decodificar ";

        } else {
            button.innerHTML = "Codificar";

        }
    });
});

function click() {

    if (choices.value == "cipherC") {
        cipher();
    }

    else {
        base();
    }

}


let form = document.forms.form

form.addEventListener('submit', function (event) {
    event.preventDefault();

    let text = form.text.value;
    let choices = form.choices.value;
    let number = form.number.value;
    let rb = form.codeOrDecode.value;
    let message = '';

    if (choices == 'cipherC') {
        message = cipher(rb, text, number);
    }

    else {
        message = base(rb, text);
    }

    let resposta = document.getElementById('message');
    resposta.innerHTML = `<p>${message}</p>`;



    form.text.focus();
});

/*BASE64*/
function base(codeOrDecode, text) {
    if (codeOrDecode == 'code') {
        return btoa(text);
    }

    else {
        return atob(text);
    }
}

/*Cifra de César*/
function cipher(rb, text, number) {
    number = Number(number);

    let results = '';

    for (let i = 0; i < text.length; i++) {
        let letter = text[i];
        let code = letter.charCodeAt();

        if (rb == 'code') {
            code += number;
        }

        else {
            code -= number;
        }

        results += String.fromCharCode(code);
    }

    return results;
}



