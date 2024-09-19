document.getElementById('submit-btn').addEventListener('click', function(){
    const text = document.getElementById('text-area').value;
    
    const addReview = document.getElementById('review');
    const p = document.createElement('p');
    p.innerText = text;
    p.style.fontSize = '40px';
    addReview.appendChild(p);
    document.getElementById('text-area').value = '';

})