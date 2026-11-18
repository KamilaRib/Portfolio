document.getElementById('year').textContent=new Date().getFullYear();
document.getElementById('theme').addEventListener('click',()=>{document.body.classList.toggle('light');document.getElementById('theme').setAttribute('aria-label',document.body.classList.contains('light')?'Ativar tema escuro':'Ativar tema claro')});
