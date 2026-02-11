function handle(){
    console.log("first")
}
 function setupIntersectionObserver(element, isLTR, speed){
    const intersectionCallback = (entries) => {
        const isIntersecting = entries[0].isIntersecting
        if(isIntersecting) {
            document.addEventListener("scroll", scrolHandler)
        } else {
            document.removeEventListener("scroll", scrolHandler)
        }
            
    }
    const intersectionObserver = new IntersectionObserver(intersectionCallback)
    intersectionObserver.observe(element)

    function scrolHandler(){
        const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed;
        element.style.transform = `translateX(${translateX}px)`
    }
 }

 const line1 = document.getElementById("line1")
 const line2 = document.getElementById("line2")
 const line3 = document.getElementById("line3")

 setupIntersectionObserver(line1, true, 0.15)
setupIntersectionObserver(line2, false, 0.15)
 setupIntersectionObserver(line3, true, 0.15)

// document.addEventListener("DOMContentLoaded", () => {

//     function setupIntersectionObserver(element, isLTR, speed) {
//         if (!element) return;

//         const observer = new IntersectionObserver((entries) => {
//             entries.forEach(entry => {
//                 console.log(entry.target.id, entry.isIntersecting);
//             });
//         }, {
//             threshold: speed
//         });

//         observer.observe(element);
//     }

//     setupIntersectionObserver(document.getElementById("line1"), true, 0.15);
//     setupIntersectionObserver(document.getElementById("line2"), false, 0.15);
//     setupIntersectionObserver(document.getElementById("line3"), true, 0.15);

// });
