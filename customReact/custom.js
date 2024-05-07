// function customRender(reactElement,countener){
    // const domelement=document.createElement(reactElement.type)
    // domelement.innerHTML=reactElement.Child
    // domelement.setAttribute('href',reactElement.pror.href)
    // domelement.setAttribute('target',reactElement.pror.target)
    // countener.appendChild(domelement)
    // const domelement=document.createElement(reactElement.type)
    // domelement.innerHTML=reactElement.Child
//     for(const pro in reactElement.pror){
//         if(pro==='child') continue
//         domelement.setAttribute(pro,reactElement.pror[pro])
//     }
//     countener.appendChild(domelement)
// }

// const reactElement={
//     type:'a',
//     pror:{
//         href:'https://google.com',
//         target:'_blank'
//     },
//     Child:"go to google"
// }


// const maincountener=document.querySelector('#root')

// customRender(reactElement,maincountener)

let add=document.getElementById('add')
let remove=document.getElementById("discrease")
let spancount=document.getElementById('cout')

console.log(p)

let count=1

function addvalue(){
   count++;
    spancount.textContent=count;
    
}

add.addEventListener('click',addvalue)

function removeValue(){
    count--;
    spancount.textContent=count;
}

remove.addEventListener('click', removeValue)
