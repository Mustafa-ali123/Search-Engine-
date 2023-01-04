// function abc(){
//     console.log("a");
//     return function (){
//         console.log("b");
//     }
// }
// abc()()
// function abc(a = "fvaluew>>"){
//     console.log(a);
    
// }
// abc("fqakdj");
// abc();
// function abc(a){
//     console.log(a);
//     return a;
// }

// let xyz = () =>{
//     console.log("wahab");
// };

// let array = [
//     {
//         id: 1,
//         name:"wahaj"
        
//     },
//     {
//         id: 2,
//         name:"wahab"
        
//     },
//     {
//         id: 3,
//         name:"mustafa"
        
//     },
//     {
//         id: 4,
//         name:"hamza"
        
//     },
// ]

// array.forEach((x)=>{

//     x.id="yarii"
// console.log(x)

// });

// array.map((x, i)=>{

//     return console.log(x, i)

// })

// array.filter((x, i, list)=> {
// if(x.name =="mustafa"){

// console.log(x)    
// }

// // console.log(x)   
// })

// let b = ["s","d","d"["a" ,"h","a"]]

let arr = [
  {
    brand: "samsung",
    model: "a30",
    ram: "4gb",
    camera: "50px",
    price: 2000,
  },
  {
    brand: "realme",
    model: "5i",
    ram: "4gb",
    camera: "55px",
    price: 3000,
  },
  {
    brand: "oppo",
    model: "a80",
    ram: "10gb",
    camera: "560px",
    price: 9000,
  },
];


  let b = document.getElementById("fop");
  let op1 = document.getElementById("op1")
  let last = document.getElementById("last")

  function abc(){
    
      let cobin = Object.keys(arr[0])
     console.log(cobin)
     b.innerHTML =""
  cobin.forEach((x)=>{
    b.innerHTML +=`
        <option>${x}</option>  
   `
  console.log(x)
  })
}
abc()


function rander (){
  let op1 = document.getElementById("op1")
  let last = document.getElementById("last")
  // let first = b.value

  let myarr= arr.filter((x) => {
  return x[b.value] == op1.value;
    
  // console.log(myarr)

})
myarr.forEach((x)=>{


   last.innerHTML=`

<li>Brand : ${x.brand}</li>
<li>Model : ${x.model}</li>
<li>Camer: ${x.camera}</li>
<li> Ram  :   ${x.ram}</li>
<li>Price : ${x.price}</li>

`

});


}












// myarr.filter((x) => {
// let a=Object.keys(x)

// console.log(a)
// })

// if( first == "ram"){
//   arr.filter((x, i, list)=> {
//       if(x.ram == op1.value){
//       console.log(x)    
//       }
//   })
//   }

// if( first =="camera"){
//   arr.filter((x, i, list)=> {
//       if(x.camera == op1.value){
//       console.log(x)    
//       }
//   })
//   }


  
// if( first =="brand"){
//   arr.filter((x, i, list)=> {
//       if(x.brand == op1.value){
//       console.log(x)    
//       }
//   })
//   }

// if( first =="price"){
//   arr.filter((x, i, list)=> {
//       if(x.price == op1.value){
//       console.log(x)    
//       }
//   })
  // }
// }
  