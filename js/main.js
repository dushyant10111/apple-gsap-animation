var tlFristscroll = new TimelineMax();

tlFristscroll
.set('.iphone-image-wrapper', {scale: 4, transformOrigin: "center top"})
.to('.iphone-image-wrapper', 3 , {scale: 2.2, y:"-40%"})
.to('.iphone-image-wrapper', 2 , {scale: 1, y:"0%"})

var controller = new ScrollMagic.Controller();

//secne 1

var scene1 = new ScrollMagic.Scene({
      triggerElement : '.trigger1',
      triggerHook: 0,
      duration : '100%'
})

.setTween(tlFristscroll)
// .addIndicators()
.addTo(controller);

var tlSecondscroll = new TimelineMax();

tlSecondscroll
.to('.iphone1', 3, {x:"-54%"})
.to('.iphone2', 3, {x:"54%"}, "-=3")
.from('.iphone1-text', 0.4, {autoAlpha: 0}, "-=3")
.from('.iphone2-text', 0.4, {autoAlpha: 0}, "-=3")
.to('.iphone1-text', 3, {x:'-30%'}, "-=3")
.to('.iphone2-text', 3, {x:'30%'}, '-=3')


.set('.iphone-stick', {display: 'block'})

.to('.iphone1-img-behind', 3, {x: "-50%"})
.to('.iphone2-img-behind', 3, {x: "50%"}, '-=3')

.to('.iphone1-img', 0.5, {autoAlpha: 0}, '-=3')
.to('.iphone2-img', 0.5, {autoAlpha: 0}, '-=3')

.to('.iphone1-text', 0.4, {autoAlpha: 0}, "-=3")
.to('.iphone2-text', 0.4, {autoAlpha: 0}, "-=3")

var scene2 = new ScrollMagic.Scene({
      triggerElement: '.trigger2',
      triggerHook: 'onLeave',
      duration: '100%'
})

.setTween(tlSecondscroll)
.setPin(".trigger2")
// .addIndicators()
.addTo(controller);