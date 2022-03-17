let moon = document.getElementById('moon')
let house = document.getElementById('house')
let lamp = document.getElementById('lamp')

// var moon2 = moon.id;


// var animations = [moon, house, lamp]

// console.log(animations)

function scrolListener(e) {
    var screenTop = document.scrollingElement.scrollTop;
    var screenBottom = screenTop + innerHeight;
    let moonTop = moon.getBoundingClientRect().top
    let houseTop = house.getBoundingClientRect().top
    let lampTop = lamp.getBoundingClientRect().top

    if (moonTop < screenBottom && moonTop < screenTop) {
        moon.classList.add("moon");
        moon.classList.remove("moon-start");
        console.log("Hello");
    }
    else if (moonTop > screenBottom && moonTop > screenTop) {
        moon.classList.add("moon-start");
        moon.classList.remove("moon");
        console.log("Hello");
    }
    if (houseTop < screenBottom && houseTop < screenTop) {
        house.classList.add("house");
        house.classList.remove("house-start");
        console.log("Hello");
    }
    else if (houseTop > screenBottom && houseTop > screenTop) {
        house.classList.remove("house");
        house.classList.add("house-start");
        console.log("Hello");
    }
    if (lampTop < screenBottom && lampTop < screenTop) {
        lamp.classList.add("lamp");
        lamp.classList.remove("lamp-start");
        console.log("Hello");
    }
    else if (lampTop > screenBottom && lampTop > screenTop) {
        lamp.classList.remove("lamp");
        lamp.classList.add("lamp-start");
        console.log("Hello");
    }

}


// if (moonTop < screenBottom && moonTop < screenTop) {
//     moon.classList.add("moon");
//     moon.classList.remove("firstMoon");
//     console.log("Hello");
// }
// else if (moonTop > screenBottom && moonTop > screenTop) {
//     moon.classList.add("firstMoon");
//     moon.classList.remove("moon");
//     console.log("Hello");
// }

// }


// document.onscroll = scrolListener


document.onscroll = scrolListener

                        // for (let i = 0; i <= animations.length; i++) {
                        //     // console.log(animations[i])
                        //     // console.log(moon)
                        //     let item = animations[i]
                        //     // console.log(item)
                        //     let itemTop = item.getBoundingClientRect().top;
                        //     console.log(itemTop);
                        //     console.log(moonTop)
                        //     if (itemTop < screenBottom && itemTop < screenTop) {
                        //         animations[i].classList.add(animations[i].id);
                        //         animations[i].classList.remove("first" + animations[i].id);
                        //         console.log("Hello");
                        //     }
                        //     else if (itemTop > screenBottom && itemTop > screenTop) {
                        //         animations[i].classList.add(animations[i].id);
                        //         animations[i].classList.remove("first" + animations[i].id);
                        //         console.log("Hello");
                        //     }
                        // }