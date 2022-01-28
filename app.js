window.addEventListener('keydown', function(e) {
    let audio = document.querySelector(`audio[key-data="${e.keyCode}"]`);
    let keys = document.querySelector(`.btn[key-data="${e.keyCode}"]`);
    if (audio) {
        audio.play();
        audio.currentTime=0;
        keys.classList.add('btn1');
        // keys.style.color='red';
        // keys.style.height='100px';
        // keys.style.width='100px';
        // keys.style.transition='0.3s';
        // keys.style.background='black';
        window.setTimeout(function(){
            keys.classList.remove('btn1')
        },300)

    }
    else {
        return
    }
    
})

