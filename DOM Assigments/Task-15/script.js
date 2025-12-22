const para = document.querySelector('p');
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
const text = para.innerText;

// para.addEventListener('mouseenter', () => {

//     setInterval(()=>{

//         const str = text.split('').map(()=>{
//             return characters.split("")[Math.floor(Math.random()*53)]
//         }).join("")

//         para.innerText = str

//     },30)

// })


let iteration = 0;

function randomText(){


      const str = text.split('').map((char,index)=>{

        if(index < iteration){
            return char
        }

            return characters.split("")[Math.floor(Math.random()*52)]
        }).join("")

        para.innerText = str

        iteration += 0.5;

        
        
}

let interval;

para.addEventListener('mouseenter' , () => {
    iteration = 0;
    clearInterval(interval)
  interval = setInterval(randomText,30);
})

