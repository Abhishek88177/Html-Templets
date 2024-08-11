// gsap.to(
//     ".box",
//     {
//         x: 500,
//         duration : 5,
//         backgroundColor : 'red',
//         y: 100,
//         rotate : '90deg',
//         repeat:'1',
//         yoyo:true,
//         stagger : 4 // is use for multiple boxes
//     }
// )

// gsap.from(
//     ".box",
//     {
//         x: 500,
//         duration : 5,
//         backgroundColor : 'red',
//         y: 100,
//         rotate : '90deg',
//         repeat:'1',  //-1 for infinite
//         yoyo : true
//     }
// )

// gsap.from(
//     '.box',{
//         // opacity : 0,
//         duration:2,
//         rotateY :180,
//         backgroundColor : 'black',
//         repeat : '-1',
//         yoyo : true,
//         stagger : {from:'start',
//         // amount:1,
//         each:0.3}
//     }
// )


// gsap.from(
//     ".page1 .box",{
//         scale : 0,
//         duration : 2,
//         rotate:360,
//     }
// )

// gsap.from(
//     ".page2 .box",{
//         scale : 0,
//         duration : 2,
//         rotate:360,
//         scrollTrigger : {
//             trigger : '.page2 .box',
//             scroller : "body",
//             markers : true,
//             start : "top 90%",
//             end: "top 50%",
//             scrub : 2
//         }
//     }
// )


// gsap.to(
//         ".page2 h1",{
//             transform : 'translate(-130%)',
//             scrollTrigger : {
//                 trigger : '.page2',
//                 scroller : "body",
//                 markers : true,
//                 start : "top top",
//                 end: "top -100%",
//                 scrub : 2,
//                 pin : true
//             }
//         }
//     )



var initialPath = "M 10 80 Q 400 80 790 80"
var finalPath = "M 10 80 Q 400 80 790 80"

var string = document.querySelector('.page1')

string.addEventListener("mousemove",function(dets){
    initialPath = `M 10 80 Q ${dets.x} ${dets.y} 790 80`

    gsap.to('svg path',{
        attr : {d : initialPath},
        duration : 0.4
    })
})

string.addEventListener("mouseleave",function(dets){
    var finalPath = "M 10 80 Q 400 80 790 80"

    gsap.to('svg path',{
        attr : {d : finalPath},
        ease : "elastic.out(1,0.1)",
        duration:2
    })
})


// window.addEventListener('wheel',function(dets){
//     if(dets.deltaY > 0){
//         gsap.to('.marque',{
//             transform : 'translateX(-110%)',
//             // xPercent: -50,
//             duration : 1,
//             repeat : -1,
//             ease:"none"
//         })
//     }else{
//         gsap.to('.marque',{
//             transform : 'translateX(0%)',
//             duration : 1,
//             repeat : -1,
//             ease:"none"
//         })
//     }
// })


// gsap.to(".marque",{
//     transform : 'translateX(-100%)',
//     duration : 2,
//     repeat : -1,
//     ease:"none"
// })


