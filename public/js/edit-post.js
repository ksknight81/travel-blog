const editPostButtonEl = $('#edit-post');
// const userId = $('div').attr('data-user-id');

editPostButtonEl.on('click', function(event) {
    event.preventDefault();
    const userId = editPostButtonEl.data();
    console.log(userId)

    fetch(`http://localhost:3001/api/posts/${userId.userId}`);
    document.location.replace(`/api/posts/${userId.userId}`)
})