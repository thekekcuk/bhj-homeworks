let chatWidget = document.querySelector('.chat-widget');
chatWidget.addEventListener('click', () => {
    chatWidget.classList.add('chat-widget_active')
});

let botMessages = [
    'Здрась!',
    'АГА!',
    'Будет сделано!',
    'Шо?!',
    'Я тут!',
    'Не понимать!'
];

//let time = new Date().getHours() + ':' + new Date().getMinutes(); тут не отображаются "0",к примеру если время 22:09, то выводит 22:9
function getCurrentTime() {
    return new Date().toLocaleTimeString().slice(0, -3);
}
setInterval(
    (getCurrentTime), 1000
)

let send = document.querySelector('.chat-widget__messages');
let input = document.querySelector('.chat-widget__input');

input.addEventListener('keypress', (event) => {
    let botMessage = botMessages[Math.floor(Math.random() * botMessages.length)];
    if (event.key === "Enter" && input.value != '') {
        send.innerHTML += `
        <div class="message message_client">
          <div class="message__time">${getCurrentTime()}</div>
          <div class="message__text">
            ${input.value}
        </div>
        </div>
        `;
        input.value = '';
        send.innerHTML += `
        <div class="message">
          <div class="message__time">${getCurrentTime()}</div>
          <div class="message__text">
            ${botMessage}
        </div>
        </div>
        `;
        input.value = '';
    }
})