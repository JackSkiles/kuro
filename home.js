var moon = document.getElementById('moon')
var house = document.getElementById('house')
var lamp = document.getElementById('lamp')

let animations = [moon, house, lamp];

console.log(animations[0])


// function scrolListener(e) {

//     var screenTop = document.scrollingElement.scrollTop;
//     var screenBottom = screenTop + innerHeight;
//     let moonTop = moon.getBoundingClientRect().top
//     let houseTop = house.getBoundingClientRect().top
//     let lampTop = lamp.getBoundingClientRect().top

//     for (let i = 0; i <= animations.length; i++) {
//         let item = animations[i] + "Top";
//         console.log(item);
//         if (item < screenBottom && item < screenTop) {
//             animations[i].classList.add(animations[i]);
//             animations[i].classList.remove("first" + animations[i]);
//             console.log("Hello");
//         }
//         else if (moonTop > screenBottom && moonTop > screenTop) {
//             animations[i].classList.add(animations[i]);
//             animations[i].classList.remove("first" + animations[i]);
//             console.log("Hello");
//         }
//     }

//     // if (moonTop < screenBottom && moonTop < screenTop) {
//     //     moon.classList.add("moon");
//     //     moon.classList.remove("firstMoon");
//     //     console.log("Hello");
//     // }
//     // else if (moonTop > screenBottom && moonTop > screenTop) {
//     //     moon.classList.add("firstMoon");
//     //     moon.classList.remove("moon");
//     //     console.log("Hello");
//     // }

// }


// document.onscroll = scrolListener