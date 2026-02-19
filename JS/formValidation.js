// Reading Values 


// showing error messages conditionally
let form = document.querySelector('form');
let ee = document.querySelector('#ee');
let email = document.querySelector('.email');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let email_regex =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

     let test_ans = email_regex.test(email.value);
     console.log(test_ans);

     if(!test_ans){
        ee.textContent = "Your Email is invalid";
        ee.style.color = "red";
     }
});

// Value Vs TextContent
// Value --> get value from input field
// textContent --> html tag set value and get value
