const inputs = document.querySelectorAll("input");
inputs[2].addEventListener("click", handleSubmit);

function handleSubmit(){
    const user ={
        name: inputs[0].value,
        email: inputs[1].value,
    };
    console.table(user);
}
