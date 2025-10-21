const play = document.querySelector('.play');
const pm4 = document.querySelector('.pm4');

pm4.addEventListener('click', () => {
    console.log('clicou');
    
   if (!play.querySelector('video')) {
        play.style.display = 'flex';
        play.style.justifyContent = 'center';
        play.style.alignItems = 'center';
        play.style.width = '100%';
        play.style.height = '100%';
        play.style.padding = '10px';
        play.style.marginTop = '10px';
        play.style.borderRadius = '5px';
        play.style.backgroundColor = 'rgba(116, 182, 85, 0.33)';
        

        const video = document.createElement('video');
        video.src = './imgens/videoaula.mp4';
        video.style.width = '100%';
        video.controls = true;
       
        play.appendChild(video);
    }else {
        play.style.padding = '0px';
        play.querySelector('video').remove();
        
    }
});



const lick = document.querySelectorAll('.ul01 li a.link');

lick.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetSelector = link.getAttribute('href');
        const target = document.querySelector(targetSelector);
        if (target) {
            const heade = document.querySelector('header').offsetHeight;
            
            const targetPosition = target.offsetTop - heade - 20; 
    
            window.scroll({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
        
    });
});

