let newPostForm = document.getElementById("new-post-form");

function nowPostHandler (event) {
    event.preventDefault();

    console.log("submitting");

    const title = document.querySelector("input[id='title'").value.trim;
    const city = document.querySelector("input[id='city'").value.trim;
    const country = document.querySelector("input[id='country'").value.trim;
    // add the one for rating
    const rating = document.querySelector("select[id='rating'").value;
    // add one for photo
    const blog = document.querySelector("input[id='blog-entry'").value.trim;
    //const user_id = 



}

newPostForm.addEventListener("submit", nowPostHandler)