const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')

upBtn.addEventListener('click', (event) => {
    slideImage('up')
})
downBtn.addEventListener('click', (event) => {
    slideImage('down')
})


document.addEventListener('keydown', (event) => {
    if (event.key === "ArrowUp") {
        slideImage('up')
    } else if (event.key === "ArrowDown") {
        slideImage('down')
    }
})

const mainSlider = document.querySelector('.main-slider')
const imageCount = mainSlider.querySelectorAll('div').length

const sideSlider = document.querySelector('.side-slider')

currentImageIndex = 0


sideSlider.style.top = `-${(imageCount - 1) * 100}%`

function slideImage(direction) {
    if (direction === "up") {
        currentImageIndex++
        if (currentImageIndex == imageCount) {
            currentImageIndex = 0
        }
    } else if (direction === "down") {
        currentImageIndex--
        if (currentImageIndex < 0) {
            currentImageIndex = imageCount - 1
        } 
    }

    const height = mainSlider.clientHeight

    mainSlider.style.transform = `translateY(-${currentImageIndex * height}px)`
    sideSlider.style.transform = `translateY(${currentImageIndex * height}px)`
}
