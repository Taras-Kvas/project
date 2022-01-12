let info_user = JSON.parse(localStorage.getItem('user'));
let info_wrap = document.createElement('div');
info_wrap.innerHTML = `<h2>ID: ${info_user.id}</h2>
<h3>Name: ${info_user.name}</h3>
<h3>Username: ${info_user.username}</h3>
<h3>Email: ${info_user.email}</h3>
<h3>Addres:</h3>
<ul>
    <li>City: ${info_user.address.city}</li>
    <li>Street: ${info_user.address.street}</li>
    <li>Suite: ${info_user.address.suite}</li>
    <li>Zipcode: ${info_user.address.zipcode}</li>
    <ul>GEO:
        <li>Lat: ${info_user.address.geo.lat}</li>   
        <li>Lng: ${info_user.address.geo.lng}</li>   
    </ul>
</ul>
<h4>Phone: ${info_user.phone}</h4>
<h4>Website: ${info_user.website}</h4>
<h4>Company:</h4>
<ul>
<li>Name: ${info_user.company.name}</li>
<li>Catch Phrase: ${info_user.company.catchPhrase}</li>
<li>BS: ${info_user.company.bs}</li>
</ul>
`;
let post_btn = document.createElement('button');
post_btn.innerText = 'Show Title';
info_wrap.appendChild(post_btn);
post_btn.onclick = (id) => {
    fetch('https://jsonplaceholder.typicode.com/users/' + info_user.id + '/posts')
        .then(response => response.json())
        .then(posts => {
            let titles_wrap = document.createElement('div');
            titles_wrap.classList.add('titles_wrap');

            for (const post of posts) {
                let ttl_and_btn_wrap = document.createElement('div');
                ttl_and_btn_wrap.classList.add('ttl_and_btn_wrap');
                let titles = document.createElement('p');
                titles.innerText = post.title;

                let btn = document.createElement('button');
                btn.classList.add('btn');
                btn.innerText = 'Post Details';
                btn.onclick = function () {
                    localStorage.setItem('post', JSON.stringify(post));
                    location.href = 'post-details.html'
                }
                ttl_and_btn_wrap.append(titles, btn);
                titles_wrap.appendChild(ttl_and_btn_wrap);
                post_btn.disabled = true;
            }

            info_wrap.appendChild(titles_wrap);
        })
}


document.body.append(info_wrap);