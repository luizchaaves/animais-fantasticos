export default function initModal(){
  const botaoAbrir = document.querySelector('[data-modal="abrir"]')
  const botaoFechar = document.querySelector('[data-modal="fechar"]')
  const containerModal = document.querySelector('[data-modal="container"]')

  function toggleModal(event){
    event.preventDefault();
    if(event.target === this)
      containerModal.classList.toggle('ativo')
  }

  if(botaoAbrir && botaoFechar && containerModal){
    botaoAbrir.addEventListener('click', toggleModal)
    botaoFechar.addEventListener('click', toggleModal)
    containerModal.addEventListener('click', toggleModal)
  }
}

