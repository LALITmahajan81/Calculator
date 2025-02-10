let string = '';
let buttons =document.querySelectorAll('.btn');
Array.from(buttons).forEach((button)=>{
 button.addEventListener('click',(e)=>{
  if(e.target.classList.contains('Ans'))
  {try{

      string = eval(string);
      document.querySelector('.output').innerHTML=`${string}`
  }
  catch{
    document.querySelector('.input').value = 'Error ';
    document.querySelector('.input').style.color = 'red';
  }
  }
  else if(e.target.classList.contains('delete')){
    string = string.slice(0, -1);
            document.querySelector('.input').value = string;
  }
  else if(e.target.classList.contains('clear')){
    string = "";
            document.querySelector('.input').value = string;
             document.querySelector('.output').innerHTML=``;
  }
  else{
      string += e.target.innerHTML;
      document.querySelector('.input').value = string;
  }
})
// good code
})