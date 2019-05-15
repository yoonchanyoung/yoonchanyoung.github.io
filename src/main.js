
const showCaseBtn = document.querySelector('.showcase-button');
const videoContainer = document.querySelector('.video-container');

const playPause = document.querySelector('.play');
const video = document.querySelector('video');
const html = document.querySelector('*');
const gauge = document.querySelector('.play-juice');

const modal = document.querySelector('.modal');
const modalBtn = document.querySelectorAll('.modal-button');
const active = document.querySelector('.active');
const workList = document.querySelector('.worklist');
const firstVideo = document.querySelector('#first-video');
const lastVideo = document.querySelector('#last-video');
const body= document.querySelector('body');

var list = [].slice.call(document.querySelectorAll(".modal-button"));




openModal  = function() {
    modal.style.visibility = 'visible';
    video.play();
    
}

    
video.addEventListener('click',_=>{

    if(video.paused){
        playPause.innerHTML = 'pause';
       
        video.play();
    } else {
        playPause.innerHTML = 'play';
      
        video.pause();
    }
});
    
       
        
$(video).mousemove(function(e){
             
              playPause.style.visibility = 'visible';
            $(playPause).css({left:e.clientX + 10, top:e.clientY +10});
        })
        
        
$(video).mouseover(function(e){
            
              playPause.style.visibility = 'visible';
            $(playPause).css({left:e.clientX + 10, top:e.clientY +10});
        })


        
video.addEventListener('mouseleave', ()=>{
          
          playPause.style.visibility = 'hidden';
      
        })
        
    
        
video.addEventListener('timeupdate', ()=>{
            let gaugeNo = video.currentTime / video.duration;
            gauge.style.width = gaugeNo * 100  + "%";
        })
        
     
 




modal.addEventListener('click',(e)=>{

    if(e.target === modal){
    modal.style.visibility = 'hidden';
    playPause.style.visibility = 'hidden';
    video.pause();

    list.forEach(function(l){
        l.style.animation = '';
    })

$(window).off('scroll');

}
});



    
    
Array.from(modalBtn,c=>c.addEventListener('click',()=>{
    

var current = $(window).scrollTop();
$(window).scroll(function() {
    $(window).scrollTop(current);
});


    c.style.animation = '';
    c.style.animation = 'colors 1s';

    video.src = 'src/'+ c.textContent + '.mp4';

    modal.style.animation = 'fadeIn 3s 1s both';
    
    video.play();
    
    setTimeout(_=>{
    modal.style.animation = '';
    },4000);  


    modal.style.visibility = 'visible';
    

    if(c.nextElementSibling===null){
            video.addEventListener('ended',_=>{
            video.pause();
            console.log('nommoreviedeo');
            })
        } ; 


    video.addEventListener('ended',_=>{
      
       
    list.forEach(function(l){
        l.style.animation = '';
    })

        modal.style.visibility = 'hidden';
        
        // lock the scroll temporarily
        $(window).off('scroll');

        c.nextElementSibling.click();


    });


}));




showCaseBtn.addEventListener('click',_=>{

setTimeout(_=>{
firstVideo.click();
},100);

})

lastVideo.addEventListener('click',_=>{
 console.log('done');
})




  const typeWriter = function(txtElement,words,wait=3000){
  
  this.txtElement = txtElement;
  this.words = words;
  this.txt='';
  this.wordIndex = 0;
  this.wait = parseInt(wait, 10);
  this.type();
  this.isDeleting = false;
  }
  
  typeWriter.prototype.type = function(){
  
      const current = this.wordIndex % this.words.length;
      const fullTxt = this.words[current];
      
      
      if(this.isDeleting){
          this.txt = fullTxt.substring(0,this.txt.length -1);
      }else{
          this.txt = fullTxt.substring(0,this.txt.length +1);
      }
      this.txtElement.innerHTML = `<span class="txt">${this.txt} </span>`;
      
      let typeSpeed = 100;
      
      if (this.isDeleting){
          typeSpeed /= 3;
      }
  
      if (!this.isDeleting && this.txt===fullTxt){
          typeSpeed = this.wait;
          this.isDeleting = true;
  
      } else if( this.isDeleting && this.txt === ''){
          this.isDeleting = false;
          this.wordIndex++;
          typeSpeed = 500;
      }
      
      setTimeout( () => this.type(),typeSpeed);
  }
  
  document.addEventListener('DOMContentLoaded',init);
  
  function init(){
      const txtElement = document.querySelector('.txt-type');
      const words = JSON.parse(txtElement.getAttribute('data-words'));
      const wait = txtElement.getAttribute('data-wait');
  
      new typeWriter(txtElement,words,wait);
  }
  
  






