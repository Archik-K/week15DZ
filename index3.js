function show() {
    if (document.getElementById('spisok').value == "black")
        document.getElementById("fon")
        .style.backgroundColor = 'rgb(42, 44, 44)';

    else if(document.getElementById('spisok').value == "white")
        (document.getElementById("fon")
        .style.backgroundColor = 'rgb(255, 249, 170)');

    else if(document.getElementById('spisok').value == "persik")
        (document.getElementById("fon")
        .style.backgroundColor = 'rgb(255, 216, 200)');
}