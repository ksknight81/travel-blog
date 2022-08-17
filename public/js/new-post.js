const formEl = $("form");

formEl.on('click', '#submit', function(event) {
    event.preventDefault();
    let data = new FormData();
    const formData = formEl.serializeArray();
    const image = $('#image')[0].files;

    data.append('title', formData[0].value)
    data.append('travel_date', 'August 15, 2022')
    data.append('city', formData[1].value)
    data.append('country', formData[2].value)
    data.append('rating', formData[3].value)
    data.append('blog', formData[4].value)
    data.append('username', 'jknight')
    data.append('image', image[0])

    // fetch('http://localhost:3001/api/posts', {
    //     method: 'POST',
    //     body: data,
    //     headers: {
            
    //     }
    // })


axios.post('http://localhost:3001/api/posts', data)

})