
function check() {
    let  login = document.getElementById("inputLogin").value;
    let  password = document.getElementById("inputPassword").value;
    let  email = document.getElementById("inputEmail").value;
    let  otvet = document.getElementById("inputOtvet").value;
    if (login == "") {
        alert('Ваш логин не заполнен. Пожалуйста, проверьте всё ещё раз и заполните.');
    } 
    else if (password == "") {
        alert('Ваш пароль не заполнен. Пожалуйста, проверьте всё ещё раз и заполните.');
    }
    else if (email == "") {
        alert('Ваш емаил не заполнен. Пожалуйста, проверьте всё ещё раз и заполните.');
    }
    else if (otvet == "") {
        alert('Ваш ответ не заполнен. Пожалуйста, проверьте всё ещё раз и заполните.');
    }
    else{
        alert('Всё заполнено верно. Добро пожаловать в мир аниме! Советуем начать просмотр  с аниме "Бездомный Бог"');
    }
    }

