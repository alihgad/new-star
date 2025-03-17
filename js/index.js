let myForm = document.querySelector(".message-form");



myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let formData = {}
    if(e.target.name.value == "" || e.target.phone.value == "" || e.target.email.value == "" || e.target.message.value == "") {
        error.classList.remove("hidden");
        return;
    }

    formData.name = e.target.name.value;
    formData.phone = e.target.phone.value;
    formData.email = e.target.email.value;
    formData.message = e.target.message.value;
    console.log(formData)

    let formApi = "http://localhost:3000/test" //put your API here

    fetch(formApi, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      .then(res => res.json())
      .then(data => console.log(data))
      .finally(()=>{
        myForm.reset();
        error.classList.add("hidden");
      })
      .catch(err => console.error(err));

})

let error = document.querySelector("#error");

error