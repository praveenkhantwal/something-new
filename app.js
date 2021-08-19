// let random = Math.random();
// if(random < 0.5){
//     console.log("number is less than 0.5")
// //     console.log(random)
// // }
// // if(random>=0.5){
// //     console.log("number is greater than 0.5")
// //     console.log(random)
// // }

// // let ranking=2;
// // if(ranking===1){
// //     console.log("ot good its 1")
// // }
// // else if(ranking===2){
// //     console.log("its2 must be good")
// // }

// // function roll(side){
// // console.log(Math.ceil(Math.random*${side})); 
// // }
// // function capitalize(str){
// //     s= str.charAt[0].toUpperCase();

// //      return s ;
     
// //  }

// // const numbers= [32,23,2,3,4,1,3,2,4,9,52]
// // double=numbers.map(function(num){
// //     return num*3;
// // })


// // document.querySelector("title")
// const btn =document.querySelector('button')
// btn.onclick =function(){
//     console.log("submittted application");
// }
// btn.ondblclick =function(){
//     console.log("double clicked");
// } 
// function screen(){
//     console.log("looks like you just hover over me");
//     console.log("i saw you");
// }
// btn.onmouseenter = screen;

// const btn2 = document.querySelector("#new");
// btn2.addEventListener('mouseup', function(){
//     alert("clicked!!!")
// })

const makeRandom =() => {
  const r= Math.ceil(Math.random()*255);
   const g= Math.ceil(Math.random()*255);
  const b= Math.ceil(Math.random()*255);
  return `rgb(${r},${g},${b})`;

}

    
    const buttons = document.querySelectorAll("button");

    for(let button of buttons){
        button.addEventListener(
            'click', function(){
                button.style.backgroundColor =makeRandom();
            }
        )
        
    }
    window.addEventListener('keypress',function(e){
        console.log(e.key)
        console.log(e.code)
    })