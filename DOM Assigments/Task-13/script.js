const reels = [
  {
    username: "ultankit",
    likeCount: 120,
    isLiked: false,
    commentCount: 14,
    shareCount: 3,
    isFollowed: true,
    isMuted:true,
    isPause:false,
    caption: "Be Zero to hero ✨ #codinglife#engineer#coder#strugle",
    video: "./reels/video1.mp4",
    userProfile:
      "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vZGVsfGVufDB8fDB8fHww",
  },
  {
    username: "vineetfilmy.in",
    likeCount: 450,
    isLiked: true,
    commentCount: 45,
    shareCount: 10,
    isFollowed: false,
    isMuted:true,
    isPause:false,
    caption: "sidhu moosewala and karan aujla 🔥",
    video: "./reels/video2.mp4",
    userProfile:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWx8ZW58MHx8MHx8fDA%3D",
  },
  {
    username: "mike_lee",
    likeCount: 85,
    isLiked: false,
    commentCount: 9,
    shareCount: 1,
    isFollowed: true,
    isMuted:true,
    isPause:false,
    caption: "Workout time! #gym #workout",
    video: "./reels/video3.mp4",
    userProfile:
      "https://images.unsplash.com/photo-1533488069324-f9265c15d37f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fG1hbGUlMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    username: "emily_rose",
    likeCount: 920,
    isLiked: true,
    commentCount: 112,
    shareCount: 25,
    isFollowed: true,
    isMuted:true,
    isPause:false,
    caption: "Bro is batting like he is in 2016 😰😰 #cricket #viratkohli " ,
    video: "./reels/video4.mp4",
    userProfile:
      "https://images.unsplash.com/photo-1617647386140-3ad7d21102d2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fG1vZGVsfGVufDB8fDB8fHww",
  },
  {
    username: "alex_turner",
    likeCount: 300,
    isLiked: false,
    commentCount: 33,
    shareCount: 7,
    isFollowed: false,
    isMuted:true,
    isPause:false,
    caption: "Rockstar 💗💗",
    video: "./reels/video5.mp4",
    userProfile:
      "https://images.unsplash.com/photo-1543764477-646365e11da3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbGUlMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    username: "chloe_kim",
    likeCount: 1500,
    isLiked: true,
    commentCount: 205,
    shareCount: 60,
    isFollowed: true,
    isMuted:true,
    isPause:false,
    caption: "Enojy the nature in alone 💕",
    video: "./reels/video6.mp4",
    userProfile:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vZGVsfGVufDB8fDB8fHww",
  },
  {
    username: "david_park",
    likeCount: 270,
    isLiked: false,
    commentCount: 21,
    shareCount: 5,
    isFollowed: false,
    isMuted:true,
    isPause:false,
    caption: "I Want to fly 🕊️🕊️ #fly#song",
    video: "./reels/video7.mp4",
    userProfile:
      "https://images.unsplash.com/photo-1624223237138-21a37e61dec0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hbGUlMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    username: "Jind_Universe",
    likeCount: 780,
    isLiked: true,
    commentCount: 87,
    shareCount: 18,
    isFollowed: true,
    isMuted:true,
    isPause:false,
    caption: "High On you 💞💞 #jinduniverse#punjabi#song",
    video: "./reels/video8.mp4",
    userProfile:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fG1vZGVsfGVufDB8fDB8fHww",
  },

];

let allReels = document.querySelector(".all-reels");



function addData() {
  let sum = "";

  reels.forEach((val, index) => {
    sum =
      sum +
      `<div class="reel">
                    <video autoplay loop id=${index} ${val.isMuted ? 'muted' :''} src="${val.video}"></video>

                     <div class="mute" id=${index}>
                     ${val.isMuted ? '<i class="ri-volume-mute-fill"></i>':'<i class="ri-volume-up-fill"></i>'}
            
        </div>

        <div class="pause" id=${index}>
                     ${val.isPause ? '<i class="ri-play-large-fill"></i>': '<i class="ri-pause-line"></i>'}
            
        </div>

                    <div class="bottom">
                         <div class="user">
                               <img src="${val.userProfile}" alt="">

                               <h4>${val.username}</h4>

                               <button id=${index} class='follow'>${
                                 val.isFollowed ? "Unfollow" : "Follow"
                               }</button>
                         </div>
                         <h3>${val.caption} </h3>
                    </div>

                    <div class="right">
                           <div id=${index} class="like">
                            <h4 class="like-icon  icons">${
                              val.isLiked
                                ? '<i  class=" love ri-heart-3-fill"></i>'
                                : '<i class="ri-heart-3-line"></i>'
                            }</h4>
                            <h6>${val.likeCount}</h6>
                           </div>

                           <div class="comment">
                            <h4 class="comment-icon icons"><i class="ri-chat-1-line"></i></i></h4>
                            <h6>${val.commentCount}</h6>
                           </div>

                             <div class="share">
                            <h4 class="share-icon icons"><i class="ri-telegram-2-line"></i></h4>
                            <h6>${val.shareCount}</h6>
                           </div>

                            <div class="dots">
                            <h4 class="dots-icon icons"> <i class="ri-more-2-fill"></i></h4>
                            
                           </div>

                          
                    </div>
                </div>`;
  });

  allReels.innerHTML = sum;
}


addData();





//   let videos = document.querySelectorAll("video");

//   for (let i = 0; i < videos.length; i++) {
//     videos[i].muted = true;   // sabki awaaz band
//   }

//   let index = Math.round(allReels.scrollTop / allReels.clientHeight);
//   if (videos[index]) {
//     videos[index].muted = false; // sirf current ki awaaz chalu
//   }

// });


allReels.addEventListener('scroll' , function(){
  
  let videos = document.querySelectorAll('video')
   
  for(i=0 ; i<videos.length; i++){
    videos[i].muted = true;
  }

  let index = Math.round(allReels.scrollTop/allReels.clientHeight) // scroll top ki value or client height means reeles ki height ki hisab se uski round value nikalega

  console.log(index);
  

//  if(videos[index]) {
//      videos[index].muted = reels[index].isMuted; // sab muted rahenge kyuki ismuted ki value hamne sabki true de rakhi hai
//  }
   
})

allReels.addEventListener('click', function(val){

   if (val.target.className === 'like') {

  let id = val.target.id;
  let likeDiv = val.target;
  let countEl = likeDiv.querySelector('h6');
  let iconEl = likeDiv.querySelector('i');

  if (!reels[id].isLiked) {
    reels[id].isLiked = true;
    reels[id].likeCount++;
    iconEl.classList.add('love');
    iconEl.className = 'love ri-heart-3-fill';
  } else {
    reels[id].isLiked = false;
    reels[id].likeCount--;
    iconEl.classList.remove('love');
    iconEl.className = 'ri-heart-3-line';
  }

  countEl.innerText = reels[id].likeCount;
}



    if (val.target.className === 'follow') {
  let id = val.target.id;
  let btn = val.target;

  reels[id].isFollowed = !reels[id].isFollowed;
  btn.innerText = reels[id].isFollowed ? 'Unfollow' : 'Follow';
}



 if (val.target.className === 'mute') {
  let id = val.target.id;
  let muteDiv = val.target;
  let icon = muteDiv.querySelector('i');
  let video = document.querySelector(`video[id="${id}"]`);

  reels[id].isMuted = !reels[id].isMuted;
  video.muted = reels[id].isMuted;

  icon.className = reels[id].isMuted
    ? 'ri-volume-mute-fill'
    : 'ri-volume-up-fill';
}

if (val.target.className === 'pause') {
  let id = val.target.id;
  let pauseDiv = val.target;
  let icon = pauseDiv.querySelector('i');
  let video = document.querySelector(`video[id="${id}"]`);

  if (video.paused) {
    video.play();
    icon.className = 'ri-pause-line';
    reels[id].isPause = false;
  } else {
    video.pause();
    icon.className = 'ri-play-large-fill';
    reels[id].isPause = true;
  }
}

});

allReels.addEventListener('dblclick', function (e) {
  let reel = e.target.closest('.reel');
  if (!reel) return;

  let id = reel.querySelector('video').id;
  let likeDiv = reel.querySelector('.like');
  let icon = likeDiv.querySelector('i');
  let count = likeDiv.querySelector('h6');

  if (!reels[id].isLiked) {
    reels[id].isLiked = true;
    reels[id].likeCount++;
    icon.className = 'love ri-heart-3-fill';
    count.innerText = reels[id].likeCount;
  }
});














