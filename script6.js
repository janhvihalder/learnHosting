const heading = document.querySelector("#helu") //SELECTING AN ELEMENT
//selector can select class and id as well, use css syntax to select
heading.innerText= "IDC WHAT IS WRITTEN IN HTML, I AM MORE IMPORTANT" //each command is case sensitive
console.log(heading) //holds a REFERENCE, NOT COPY 

const listItems=document.querySelectorAll('ul li') /*APPLIES TO ALL LI IN THE ENTIRE HTML DOCUMENT*/
/*for(let i=0;i<listItems.length;i++){
    const item1=listItems[i]
    item1.innerText="i shall prevail and there is no way out of this"
}
console.log(listItems)*/


const ul1=document.querySelector('ul')
const li1=document.querySelector('li') //stores the first li
const li2=document.querySelectorAll('li') //stores all li's
li2[0].innerText='Jumanji'
li2[2].innerText='Batman'
li2[1].innerText='SuperWoman'
console.log(ul1,li1,li2)



//method 1
const para1=document.querySelector('#pp')
para1.innerText='LETS CHANGE THIS'
console.log(para1)
//method 2
const para2=document.getElementById('pp')  //faster and efficient
para2.innerText='THIS IS THE SECOND CHANGE HAHAH'
console.log(para2)

//EVENT LISTENER

const increment=document.getElementById("increment")
const decrement=document.getElementById("decrement")
const counterElement=document.getElementById("numero")
const un_list=document.getElementById("unorder_list")

let counter=Number(counterElement.innerHTML);
function incrementCounter(){
    counter++
    counterElement.innerText=counter
    //const li=document.createElement('li')
    //li.innerHTML="<i>Sentence number:</i>"+counter

    //explanation of the above line to modify li
    const li=document.createElement('li') //li for list item
    const b=document.createElement('b') //b for bold
    const textNode=document.createTextNode("Sentence: ")
    b.appendChild(textNode)
    const textNode2=document.createTextNode(counter)
    li.appendChild(b)
    li.appendChild(textNode2)
    //apended order - li.b.textnode.textnode2
    un_list.appendChild(li)

    //un_list.appendChild(li)
}
function decrementCounter(){
    counter--
    counterElement.innerText=counter
    const li=document.createElement('li')
    li.innerHTML="Popping Element:"+ un_list.lastElementChild.innerHTML
    //un_list.lastElementChild.innerHTML //INNERHTML GETS THE CONTENTS, AND EVERYTHING WITHIN TAGS EG. ITALICS. BUT NOT THE TAG ITSELF
    //un_list.lastElementChild SIMPLY GETS THE ENTIRE ELEMENT INCLUDING THE OPENING AND CLOSING TAGS
    //VERY IMPORTANT
    un_list.appendChild(li)
    if(!un_list.lastElementChild){
        const print=document.createElement('li')
        li.innerHTML="Nothing to pop!"
        un_list.appendChild(li)
        un_list.removeChild(un_list.lastElementChild)
    }
 //   console.log("new list:",un_list)
    un_list.removeChild(un_list.lastElementChild)
  //  console.log("first removal:",un_list)
    un_list.removeChild(un_list.lastElementChild)  
   // console.log("second removal: ",un_list)
}

//VERY IMPORTANT

function incrementCounter2(){
    counter++
    counterElement.innerHTML=counter
    const li=document.createElement('li')
    li.setAttribute('data-counter',counter) //CREATE A CUSTOM ATTRIBUTE element.setAttribute(attributename, attributevalue)
    //here data is also an attribute used to store custom data in html elements. prefix data-
    //translation <li data-counter='1'>1</li>

    if(counter%2===0){
        //method 1
       // li.setAttribute('class','red size1') - css declaration needed

       //method 2 --directly apply colour, no css needed
       li.style.background='rgb(193, 87, 106)'
       
    }
    else{
       // li.setAttribute('class','yellow') - css declaration needed
        li.style.background='plum'
       // li.style.border='dotted'
    }

    //const newli=un_list.querySelector(".size1")

    li.innerHTML=counter
    un_list.appendChild(li)
}
function decrementCounter2(){
    const li = un_list.querySelector('[data-counter="'+counter+'"]')//concatenation of string to form [data=counter="5"]
    //retrieving element with data-counter = counter
    //un_list has a bunch of li
    //query selector looks through all li's to find the one which has data counter set to counter (i.e. the last element)
    //that li is retrieved and removed

    //OR
    const number=parseInt(li.getAttribute('data-counter'),10) //get attribute value
    //ALL ATTRIBUTES ARE STORED STRINGS NO MATTER WHAT THE ARGUMENT WAS WHILE STORING
    //10 INDICATES - PARSE AS NUMBER IN BASE 10
    console.log(number)
    li.remove()
    counter--
    counterElement.innerHTML=counter

}



increment.addEventListener('click',incrementCounter2)
decrement.addEventListener('click',decrementCounter2)
