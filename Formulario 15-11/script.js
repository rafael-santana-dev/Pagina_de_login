const wrapper = document.querySelector('.warpper');
const loginlink = document.querySelector('.login-link');
const cadastrolink = document.querySelector('cadastro-link');

cadastrolink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginlink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});
