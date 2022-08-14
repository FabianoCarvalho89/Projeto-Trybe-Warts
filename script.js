const botaoEntrar = document.querySelector('.botaoEntrar');

botaoEntrar.addEventListener('click', () => {
  const checaEmail = document.getElementById('email').value;
  const checaSenha = document.getElementById('senha').value;

  if (checaEmail === 'tryber@teste.com' && checaSenha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

document.querySelector('#textarea').addEventListener('keyup', () => {
  const text = document.getElementById('textarea').value;
  document.getElementById('counter').innerText = 500 - text.length;
});

// https://cursos.alura.com.br/forum/topico-habitar-desabilitar-botao-65202
// desabilita o botão no início
document.getElementById('submit-btn').disabled = true;

// https://pt.stackoverflow.com/questions/307752/habilitar-desabilitar-um-bot%C3%A3o-se-pelo-menos-um-checkbox-for-marcado
const checa = document.getElementsByName('toggle');
const bt = document.getElementById('submit-btn');

checa[0].onclick = function checkbox() {
  // "input[name='toggle']:checked" conta os checkbox checados
  const cont = document.querySelectorAll('input[name=\'toggle\']:checked').length;
  // ternário que verifica se há algum checado.
  // se não há, retorna 0 (false), logo desabilita o botão
  bt.disabled = !cont;
};
