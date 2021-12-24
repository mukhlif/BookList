const items=document.querySelector('ul.collection');


loadEventListeners();
function loadEventListeners(){
    document.querySelector('.btn').addEventListener('click',fun);

    document.querySelector('.clearBooks').addEventListener('click',removAll);
    document.querySelector('.table-box').addEventListener('click',removeElement);
}
function fun(e){
    let inputName=document.getElementById('name');
    let inputAuthor=document.getElementById('author');
    const heading=document.querySelector('h3.edit');
    // let list=document.createElement('li');
    // const items=document.querySelector('ul.collection');

if(inputName.value==''||inputAuthor.value==''){
    heading.innerHTML='Please fill the fields!';
    heading.style.backgroundColor='red';
    heading.style.color='white';
    heading.style.width='75%';
    heading.style.padding='0.2em';
    

}else if(inputName!=''&&inputAuthor!=''){
    
    // list.innerHTML=`<li class="border fw-bold p-2 mt-2 bg-dark text-light">Book Name:${inputName}<span class="ms-5" >Book Author:${inputAuthor}</span>  <a href="#" class="ms-5" id='click'><i class="fas fa-backspace"></i></a></li>`;
    // items.append(list);

    // inputName.value='';
    // inputAuthor='';
    const row=document.createElement('tr');
    row.className='border-bottom fs-5 mt-4';

    row.innerHTML=`<td class=>${inputName.value}</td>
                  <td>${inputAuthor.value}</td>
                  <td><a href="#" class="delete mx-auto">X</a></t>`;

   document.querySelector('.table-box').append(row);

  
}
e.preventDefault();

}
function removeElement(e){
    if(e.target.classList.contains('delete')){
       e.target.parentElement.parentElement.remove();
    }
    else{
        console.log(123);
    }
  
}
function removAll(e){
    items.innerHTML='';
}
