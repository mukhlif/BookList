const items=document.querySelector('ul.collection');


loadEventListeners();
function loadEventListeners(){
    document.querySelector('.btn').addEventListener('click',fun);
    document.querySelector('ul.collection').addEventListener('click',removElement);
    document.querySelector('.clearBooks').addEventListener('click',removAll);
    
}
function fun(e){
    const inputName=document.getElementById('name').value;
    const inputAuthor=document.getElementById('author').value;
    const headH=document.querySelector('#headd');
    let list=document.createElement('li');
    const items=document.querySelector('ul.collection');

if(inputName==''||inputAuthor==''){
    headH.innerHTML='please fill the fields!';
    headH.style.backgroundColor='red';
    headH.style.color='white';
    headH.style.width='75%';
    headH.style.padding='0.5em';
}else if(inputName!=''&&inputAuthor!=''){
    list.innerHTML=`<li class="border fw-bold p-2 mt-2 bg-dark text-light">Book Name:${inputName}<span class="ms-5" >Book Author:${inputAuthor}</span>  <a href="#" class="ms-5" id='click'><i class="fas fa-backspace"></i></a></li>`;
    items.append(list);
  
}
e.preventDefault();

}
function removElement(e){
    if(e.target.parentElement.classList.contains('ms-5')){
    e.target.parentElement.parentElement.remove();
};}
function removAll(e){
    items.innerHTML='';
}
