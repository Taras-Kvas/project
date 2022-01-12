let info_post = JSON.parse(localStorage.getItem('post'));
let post_wrap = document.createElement('div');
post_wrap.innerHTML=`<h2>ID: ${info_post.id}</h2>
<h3>Title: ${info_post.title}</h3>
<h4>Text: ${info_post.body}</h4>`;

fetch('https://jsonplaceholder.typicode.com/posts/' + info_post.id + '/comments')
    .then(response => response.json())
    .then(comments => {
        let comment_wrap = document.createElement('div');
        comment_wrap.classList.add('comment_wrap');

        for (const comment of comments) {
            let comment_body = document.createElement('p');
            comment_body.classList.add('comment_body');
            comment_body.innerText=comment.body;
            comment_wrap.appendChild(comment_body);
        }
        post_wrap.appendChild(comment_wrap);

    })

document.body.appendChild(post_wrap);