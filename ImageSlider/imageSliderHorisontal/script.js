const rightBtn = document.querySelector('.right-btn')
const leftBtn = document.querySelector('.left-btn')

rightBtn.addEventListener('click', () => {
    changeImage('right')
})
leftBtn.addEventListener('click', () => {
    changeImage('left')
})

const imageSlider = document.querySelector('.image-slider')
const sideSlider = document.querySelector('.side-slider')


const maxImageIndex = imageSlider.querySelectorAll('div').length - 1
let imageIndex = 0

function changeImage(direction) {
    if (direction === 'right') {
        imageIndex++
        if (imageIndex > maxImageIndex) {
            imageIndex = 0
        }
    } else if (direction === 'left') {
        imageIndex--
        if (imageIndex < 0) {
            imageIndex = maxImageIndex
        }
    }

    imageSlider.style.transform = `translateX(-${100 * imageIndex}vw)`
    sideSlider.style.transform = `translateX(${100 * imageIndex - 300}vw)`
}