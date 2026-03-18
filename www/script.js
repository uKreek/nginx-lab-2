console.log("js")

document.getElementById("fitness").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = this.username.value;

  alert("Будем рады вас видеть, " + username + "!");
});

let inactivityTimer;

function resetInactivityTimer() {
    clearTimeout(inactivityTimer);

    inactivityTimer = setTimeout(() => {
        showReminder();
    }, 15000);
}

function showReminder() {
    alert("Пожалуйста, продолжите заполнение формы!");
}

window.onload = resetInactivityTimer;
document.onmousemove = resetInactivityTimer;
document.onkeypress = resetInactivityTimer;
document.onclick = resetInactivityTimer;
