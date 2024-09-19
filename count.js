let sum = 0;
function clickMe(){
    const result = document.getElementById('count');
    sum = sum + 1;
    result.innerText = sum;
  
}

document.getElementById('minus-btn').addEventListener('click', function(){
    const minusBtn = document.getElementById('count');
    sum = sum - 1;
    minusBtn.innerText = sum;


})