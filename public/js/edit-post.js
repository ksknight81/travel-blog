const editPostButtonEl = $('#edit-post');
const deletePostButtonEl = $('#delete-post');
const submitEditButton = $('#submit-edit');
// const userId = $('div').attr('data-user-id');

editPostButtonEl.on('click', function(event) {
    event.preventDefault();
    const userId = editPostButtonEl.data();
    console.log(userId)

    fetch(`http://localhost:3001/api/posts/${userId.userId}`);
    document.location.replace(`/api/posts/${userId.userId}`)
})

submitEditButton.on('click', function(event) {
    event.preventDefault();
    const userId = submitEditButtonEl.data();
    console.log(userId)

    fetch(`http://localhost:3001/api/posts/${userId.userId}`,
    {
        method: 'PUT'
    });
    document.location.replace(`/home`);
})

deletePostButtonEl.on('click', function(event) {
    event.preventDefault();
    const userId = deletePostButtonEl.data();

    fetch(`http://localhost:3001/api/posts/${userId.userId}?id=${userId.userId}`, {
        method: 'DELETE',
    })

    document.location.replace(`/home`)
});