const form = document.querySelector("#form");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    //
    if(!form.checkvalidity()) {
        form.reportvalidity();
        return
    }
    //userNAme
    const userName = document.getElementById("customer-name")
    if(userName.value.length < 3 || userName.value.length > 15) {

    }
})