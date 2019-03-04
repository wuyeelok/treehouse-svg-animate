const gearBGEle = document.querySelector('.gear-bg')

const gearBGHoverAnimation = new TimelineMax({paused: true})
gearBGHoverAnimation.to(gearBGEle, .3, {ease: Power1.easeOut, fill: '#3881cc'})


const hammerBGEle = document.querySelector('.hammer-bg')

const hammerBGHoverAnimation = new TimelineMax({paused: true})
hammerBGHoverAnimation.to(hammerBGEle, .3, {ease: Power1.easeOut, fill: '#feae6e'})

const hammerIconEle = document.querySelector('.hammer-icon')
const hammerIconAnimation =  new TimelineMax({paused: true})
hammerIconAnimation.to(hammerIconEle, .3, {ease: Power2.easeOut, fill: 'orange', stroke: 'red', strokeWidth: 5})


const heartBGEle = document.querySelector('.heart-bg')

const heartBGHoverAnimation = new TimelineMax({paused: true})
heartBGHoverAnimation.to(heartBGEle, .3, {ease: Power1.easeOut, fill: '#ff5e5e'})


const iconHoverAnimateBind = (ele, animation) => {
    ele.addEventListener('mouseenter', () => {
        animation.play()
        hammerIconAnimation.play()
    })

    ele.addEventListener('mouseleave', () => {
        animation.reverse()
        hammerIconAnimation.reverse()
    })
}

iconHoverAnimateBind(gearBGEle, gearBGHoverAnimation)

iconHoverAnimateBind(hammerBGEle, hammerBGHoverAnimation)

iconHoverAnimateBind(heartBGEle, heartBGHoverAnimation)