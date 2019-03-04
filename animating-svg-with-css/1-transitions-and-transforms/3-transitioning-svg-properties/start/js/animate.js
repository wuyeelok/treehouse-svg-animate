const gearBGEle = document.querySelector('.gear-bg')

const gearBGHoverAnimation = new TimelineMax({paused: true})
gearBGHoverAnimation.to(gearBGEle, .3, {ease: Power1.easeOut, fill: '#3881cc'})

gearBGEle.addEventListener('mouseenter', () => {
    gearBGHoverAnimation.play()
})

gearBGEle.addEventListener('mouseleave', () => {
    gearBGHoverAnimation.reverse()
})