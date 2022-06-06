
function check() {
    let  login = document.getElementById("inputLogin").value;
    let  password = document.getElementById("inputPassword").value;
    let  email = document.getElementById("inputEmail").value;
    let  otvet = document.getElementById("inputOtvet").value;
    if (login == "") {
        alert('Не все поля заполнены. Пожалуйста, проверьте всё ещё раз и заполните.');
    } 
    else if (password == "") {
        alert('Не все поля заполнены. Пожалуйста, проверьте всё ещё раз и заполните.');
    }
    else if (email == "") {
        alert('Не все поля заполнены. Пожалуйста, проверьте всё ещё раз и заполните.');
    }
    else if (otvet == "") {
        alert('Не все поля заполнены. Пожалуйста, проверьте всё ещё раз и заполните.');
    }
    else{
        alert('Всё заполнено верно. Добро пожаловать в мир аниме! Советуем начать просмотр  с аниме "Бездомный Бог"');
    }
    }

