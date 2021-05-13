import validate from './validate'

const modalButtons = document.querySelectorAll('#btn')
const modal = document.querySelector('.modal')
const modalBg = document.querySelector('.modal-bg')
const closeBtn = document.querySelector('.close-btn')

modalButtons.forEach((modalButton) =>
  modalButton.addEventListener('click', () => {
    modalBg.classList.add('bg-active')
    modal.classList.add('modal-active')
  })
)

closeBtn.addEventListener('click', () => {
  modalBg.classList.remove('bg-active')
  modal.classList.remove('modal-active')
})

validate()
