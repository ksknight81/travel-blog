let postEl = document.querySelector('article');

async function openPost (event) {
    const post_id = postEl.getAttribute('data-post-id');
    console.log(post_id);
    // fetch(`http://localhost:3001/post/${post_id}`);
    // document.location.replace(`/post/${post_id}`);
    const response = await fetch(`http://localhost:3001/api/posts/${post_id}`);

    if (response.ok) {
        fetch(`http://localhost:3001/home/post/${post_id}`);
        document.location.replace(`/home/post/${post_id}`);
        
    } else {
        alert(response.statusText);
    }
}

postEl.addEventListener('click', openPost);