
const lick = document.querySelectorAll('.ul01 li a');

lick.forEach((link) => {
    link.addEventListener('click', () => {
        // console.log(link);
        console.log(link.getAttribute('href'));
    });
});

console.log(lick);