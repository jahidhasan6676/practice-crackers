let serial = 0;
document.getElementById("task-btn").addEventListener('click', function(){
    
    const inputField = document.getElementById("input-value").value;

    const descriptionBox = document.getElementById("Description-Box");
    const newDesk = descriptionBox.value;
   const descriptionContainer = document.getElementById('description-container');serial++
    const innerHTML =
     `<td>$(serial)</td>
     <td>newDesk</td>
     <td id="btn"> <button id="remove-btn" class=" h-7 bg-red-600 text-white rounded-xl px-10 text-center"> Delete </button></td>
    `;
    const tr = document.createElement('tr');
    tr.innerHTML = innerHTML;
    descriptionContainer.appendChild(tr);
    descriptionBox.value = '';
    tr.addEventListener('click', function(event){
        const remove= event.target.parentNode;
        console.log(remove);
        remove.remove();
    })
    
    

    


// allClear button
    document.getElementById('clear-btn').addEventListener('click', function(){
        
        contentContainer.style.display = 'none';
    })

    

})

