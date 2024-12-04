

const checkBoxList = document.querySelectorAll('.custom-checkbox');
const inputFields = document.querySelectorAll('.goal-input');
const errorLabel = document.querySelector('.error-label');
const progressBar = document.querySelector('.progress-bar');
const progressValue = document.querySelector('.progress-value');

checkBoxList.forEach((checkbox) => {
    checkbox.addEventListener('click', (e) => {
        const allGoalsAdd = [...inputFields].every(function(input){
            return input.value
        })
        
        if(allGoalsAdd){
            checkbox.parentElement.classList.toggle('completed') 
            progressValue.style.width = '33.33%'
        }else{
          errorLabel.style.display = 'block';
            //  progressBar.classList.add('show-error'); // error 
        }
    })
});

inputFields.forEach((input) => {
    input.addEventListener('focus', () => {
        errorLabel.style.display = 'none';
        //  progressBar.classList.remove('show-error'); // error
    })
})



