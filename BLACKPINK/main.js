// mở đóng menu
var header = document.getElementById('header');
var menu = document.getElementsByClassName('bar-bth');
var headerClient = header.clientHeight; 
menu[0].onclick = function() {
    var isClose = header.clientHeight === headerClient;
    if(isClose) {
        header.style.height = 'auto';
    } else {
        header.style.height = null;
    }
}

// tự động đóng mở menu
var headerItems = document.querySelectorAll('#nav > li > a')
for(var index in headerItems) {
    var headerItem = headerItems[index];
    
    headerItem.onclick = function(event) {
        var contact = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav')
        if(contact) {
            event.preventDefault();
        } else {
            header.style.height = null;
        }
    }
}

// Đóng mở modal

const ticketBtns = document.querySelectorAll('.js-btn')
const modal = document.querySelector('.js-modal')
const closeBtn = document.querySelector('.js-close')
const container = document.querySelector('.js-container')

function open() {
    modal.classList.add('open')
}

function close() {
    modal.classList.remove('open')
}

Array.from(ticketBtns).forEach(function(ticketBtn) {
    ticketBtn.addEventListener('click', open)
})

closeBtn.addEventListener('click', close)

modal.addEventListener('click', close)

container.addEventListener('click', function(e) {
    e.stopPropagation()
})

