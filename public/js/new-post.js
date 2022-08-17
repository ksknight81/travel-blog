const newPostFormEl = $("form");
const newPostButtonEl = $('#create-new-post');

newPostFormEl.on('click', '#submit', function(event) {
    event.preventDefault();
    let data = new FormData();
    const formData = newPostFormEl.serializeArray();
    const image = $('#image')[0].files;

    data.append('title', formData[0].value)
    data.append('travel_date', 'August 15, 2022')
    data.append('city', formData[1].value)
    data.append('country', formData[2].value)
    data.append('rating', formData[3].value)
    data.append('blog', formData[4].value)
    data.append('username', 'jknight')
    data.append('image', image[0])

    axios.post('http://localhost:3001/api/posts', data)
})

newPostButtonEl.on("click", function(event) {
    fetch("/new-post");
    document.location.replace('/new-post');
})