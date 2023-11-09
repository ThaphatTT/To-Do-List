function Increase(){
    const getInputTitle = document.getElementById('inputTitle');
    const getButtonIncrease = document.getElementById('increase');
    const getTaskTodolist = document.getElementById('To-doList')
        getButtonIncrease.addEventListener('click',function(){
            const Text = getInputTitle.value;
            if(Text !=''){
                addText(Text);
                getInputTitle.value ='';
            }
        })
        function addText(Text){
            const li = document.createElement('li');
            li.innerHTML = `
            <span>${Text}</span>
            <span class="delete-btn">❌</span>
            `;
            li.querySelector('.delete-btn').addEventListener('click', function() {
                li.remove();
            });
            getTaskTodolist.appendChild(li);
        }

}