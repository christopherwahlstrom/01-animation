const throwContainer = document.querySelector('.throw-container')
const ball = document.querySelector('.ball')

throwContainer.addEventListener('click', () => {
	ball.classList.toggle('throw')
})