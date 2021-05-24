function setDate() {
    document.getElementById('d1').innerHTML = new Date().toDateString();
}


window.onload = function () {
    setDate();
};
