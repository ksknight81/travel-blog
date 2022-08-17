let postBodyEl = document.getElementById('posts-body');

async function openPost (event) {
    const postEl = event.target.closest('article');
    
    // check that an article was select and ensure it has a data-post-id within an article is select
    if (postEl && postEl.hasAttribute('data-post-id')) {

        const post_id = event.target.closest('article').getAttribute('data-post-id');
        // console.log(post_id);
        // console.log(event.target);
    
        if (post_id) {
            const response = await fetch(`/api/posts/${post_id}`);
        
            if (response.ok) {
                fetch(`/home/post/${post_id}`);
                document.location.replace(`/home/post/${post_id}`);
                
            } else {
                alert(response.statusText);
            }
        }
    }
}

postBodyEl.addEventListener('click', openPost);