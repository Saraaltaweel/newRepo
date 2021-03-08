'use strict'
let container=document.getElementById('container');
let unlist=document.createElement('ul');
container.appendChild(unlist);
let imgSrc=['img/bmw.jpeg','img/chevr.jpeg','img/hondai.jpeg','img/kia.jpeg','img/lexus.jpeg','img/tesla.jpeg','img/toyota.jpeg'];
function Car(name,model,catigory){
    this.name=name;
    this.model=model;
    this.catigory=catigory;
    arr.push(this);

}
 let arr=[];
Car.prototype.render = function(){
let catigoryInput=document.getElementById('catigory');
   this.catigory=catigoryInput.value;
   this.catigory.toLowerCase;

   let nameInput=document.getElementById('Name');
   this.name=nameInput.value;

   let modelInput=document.getElementById('model');
   this.model=modelInput.value;

  let liEl=document.createElement('li');
  unlist.appendChild(liEl);
  liEl.textContent=`car name : ${this.name}` + "\n" + `model year : ${this.model} `;
 let img=document.createElement('img');
 liEl.appendChild(img);
  if(this.catigory==='bmw'){
    img.setAttribute('src',imgSrc[0]);  
  }
  else if(this.catigory==='chevr'){
    img.setAttribute('src',imgSrc[1]);  
  }
  else if(this.catigory==='hondai'){
    img.setAttribute('src',imgSrc[2]);  
  }
  else if(this.catigory==='kia'){
    img.setAttribute('src',imgSrc[3]);  
  }
  else if(this.catigory==='lexus'){
    img.setAttribute('src',imgSrc[4]);  
  }
  else if(this.catigory==='toyota'){
    img.setAttribute('src',imgSrc[5]);  
  }
  setList();
}


let button=document.getElementById('submit');
button.addEventListener('click',clickHere);

function clickHere(event){
    event.preventDefault();

    let name=event.target.name.value
    let catigory=event.target.name.value
    let model=event.target.name.value
    let newCar = new Car(name,catigory,model);
    newCar.render();
}

function setList(){
    let items=JSON.stringify(arr);
   localStorage.setItem('list',items);
}
function getList(){
    let text=localStorage.getItem('list');
    let allText=JSON.parse(text);
    if(allText){ 
        arr = allText;
    }
    Car.render();
}
getList();