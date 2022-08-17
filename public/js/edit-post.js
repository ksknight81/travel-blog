const editPostButtonEl = $('#edit-post');
const deletePostButtonEl = $('#delete-post');
const submitEditButtonEl = $('#submit-edit');
// const userId = $('div').attr('data-user-id');

editPostButtonEl.on('click', function(event) {
    event.preventDefault();
    const userId = editPostButtonEl.data();
    console.log(userId)

    fetch(`/api/posts/${userId.userId}?id=${userId.userId}`);
    document.location.replace(`/api/posts/${userId.userId}?`)

    // document.location.replace(`/api/posts/${userId.userId}?id=${userId.userId}`)
})

submitEditButtonEl.on('click', function(event) {
    event.preventDefault();
    const userId = submitEditButtonEl.data();
    console.log(userId)

    // let data = new FormData();
    // const formData = formEl.serializeArray();
    // const image = $('#image')[0].files;

    fetch(`/api/posts/${userId.userId}?id=${userId.userId}`, 
    
    {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
        title: `${$("#title").val()}`,
        city: `${$("#city").val()}`,
        country: `${$("country").val()}`,
        rating: `${$("rating").val()}`,
        blog: `${$("blog").val()}`,
        image: `${image}`
        })
    });
    document.location.replace(`/home`);


    // {
    //     method: 'PUT',
    //     body: JSON.stringify({
    //         title: formData[0].value,
    //         city: formData[1].value,
    //         country: formData[2].value,
    //         rating: formData[3].value,
    //         blog: formData[4].value,
    //         image: image[0]
    //     })
    // }

    // let data = new FormData();
    // const formData = formEl.serializeArray();
    // const image = $('#image')[0].files;

    // data.append('title', formData[0].value)
    // data.append('travel_date', 'August 15, 2022')
    // data.append('city', formData[1].value)
    // data.append('country', formData[2].value)
    // data.append('rating', formData[3].value)
    // data.append('blog', formData[4].value)
    // data.append('username', 'jknight')
    // data.append('image', image[0])

    // axios.put(`/api/posts/${userId}`, data)
})

deletePostButtonEl.on('click', function(event) {
    event.preventDefault();
    const userId = deletePostButtonEl.data();
    console.log(userId.userId)

    fetch(`/api/posts/${userId.userId}`, {
        method: 'DELETE',
    })

    document.location.replace(`/home`)
});