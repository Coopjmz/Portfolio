// Stick / unstick the header

var header = document.querySelector('header');
window.addEventListener('scroll',
    e => header.classList.toggle('sticky', window.scrollY > 0)
);


// Toggle the menu on phones and tablets

var menu = document.querySelector('nav');
var menuButton = document.querySelector('.menu-button');
var links = document.querySelectorAll('nav ul li a');

menuButton.addEventListener('click',
    e =>
    {
        menu.classList.toggle('active');
        menuButton.classList.toggle('active');
    }
);

links.forEach(link => link.addEventListener('click',
    e =>
    {
        menu.classList.remove('active');
        menuButton.classList.remove('active');
    }
));


// Send e-mail

var form = document.querySelector('form');
form.addEventListener('submit',
    e =>
    {
        e.preventDefault();

        var fullName = form.elements['fullname'];
        var email = form.elements['email'];
        var message = form.elements['message'];

        Email.send(
        {
            Host: 'smtp.gmail.com',
            Username: 'knachev1@gmail.com',
            Password: 'fcwznxanxntsntvj',
            To: 'knachev1@gmail.com',
            From: email.value,
            Subject: `${fullName.value} sent you a message`,
            Body: `Name: ${fullName.value}<br>Message: ${message.value}`
        }
        ).then(() => alert("Message has been sent"));

        fullName.value = '';
        email.value = '';
        message.value = '';
    }
);