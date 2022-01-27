// var windowWidth = window.innerWidth;

// if (windowWidth > 992) {

  gsap.to('#intro-image-1',{
    y:'-20%',rotate:0,duration:1,scrollTrigger:{
      trigger:'#intro-image-1',
      scrub:1,
      start:'top 20%',
      ease: 'back.inOut(1.7)'
    }
  })

  gsap.to('#intro-text-1',{
    y:'20%',rotate:0,duration:1,scrollTrigger:{
      trigger:'#intro-text-1',
      scrub:1,
      start:'top 20%',
      ease: 'back.inOut(1.7)'
    }
  })

  gsap.to('#intro-text-2',{
    y:'20%',rotate:0,duration:1,scrollTrigger:{
      trigger:'#intro-text-2',
      scrub:true,
      start:'top 20%',
      ease: 'back.inOut(1.7)'
    }
  })


  gsap.to('#intro-image-2',{
    y:'-20%',rotate:0,duration:1,scrollTrigger:{
      trigger:'#intro-image-2',
      scrub:true,
      start:'top 20%',
      ease: 'back.inOut(1.7)'
    }
  })
// }
