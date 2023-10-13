<!DOCTYPE html>
<html>
<head>
    <title>Own Blog</title>
    <style>
        .container {
            max-width: 100%;
            margin: 0 auto;
            padding: 20px;
        }

        .blog-post {
            background-color: lightyellow;
            border: 1px solid #eee;
            padding: 15px;
            margin-bottom: 20px;
        }

        .blog-post h2 {
            font-size: 24px;
            margin: 0;
        }

        .blog-post .post-meta {
            font-style: italic;
        }

        .blog-post .post-content {
            margin-top: 10px;
        }

        .btn {
            display: inline-block;
            padding: 10px 20px;
            border: none;
            cursor: pointer;
        }

        /* New styles for the buttons */
        .new-btn {
            background-color: green;
            color: white;
        }

        .edit-btn {
            background-color: blue;
            color: white;
        }

        .save-btn {
            background-color: orange;
            color: white;
        }

        .remove-btn {
            background-color: red;
            color: white;
        }

h1 {background-color: #a20200; color: yellow; 
text-align: center; padding: 20px; margin: 0; border-radius: 50px;
font-size: 50px;}

div{text-align: left; margin: 20px;}
    </style>
</head>
<body>
    <div class="container">
        <h1>Own Blog</h1>

<div id="blog-posts">

        </div>
        <form id="post-form">
            <label for="title">Title:</label>
            <input type="text" id="title" required>
            <label for="author">Author:</label>
            <input type="text" id="author" required>
            <label for="content">Content:</label>
            <textarea id="content" required></textarea>
            <button type="submit" class="btn new-btn">New Post</button>
        </form>
    </div>

    <script>
        const postForm = document.getElementById("post-form");
        const blogPostsContainer = document.getElementById("blog-posts");
        let editingKey = null;

        // Function to display saved posts
        function displaySavedPosts() {
            blogPostsContainer.innerHTML = '';

            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (key !== 'blogPost') {
                    const post = JSON.parse(localStorage.getItem(key));
                    const postDiv = document.createElement("div");
                    postDiv.classList.add("blog-post");
                    postDiv.innerHTML = `
                        <h2>${post.title}</h2>
                        <p class="post-meta">Published by ${post.author}</p>
                        <p class="post-content">${post.body}</p>
                        <button class="btn remove-btn" data-key="${key}">Remove</button>
                        <button class="btn edit-btn" data-key="${key}">Edit</button>
                    `;
                    blogPostsContainer.appendChild(postDiv);
                }
            }
        }

        displaySavedPosts();

        postForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const title = document.getElementById("title").value;
            const author = document.getElementById("author").value;
            const content = document.getElementById("content").value;

            if (editingKey) {
                // Edit existing post
                const post = { title, author, body: content };
                localStorage.setItem(editingKey, JSON.stringify(post));
                editingKey = null;
            } else {
                // Generate a unique key for each post using the current timestamp
                const key = `post-${new Date().getTime()}`;
                const post = { title, author, body: content };
                localStorage.setItem(key, JSON.stringify(post));
            }

            displaySavedPosts();

            // Clear the form
            postForm.reset();
        });

        blogPostsContainer.addEventListener("click", function (event) {
            if (event.target.classList.contains("remove-btn")) {
                const key = event.target.dataset.key;
                localStorage.removeItem(key);
                displaySavedPosts();
            } else if (event.target.classList.contains("edit-btn")) {
                const key = event.target.dataset.key;
                editingKey = key;
                const post = JSON.parse(localStorage.getItem(key));
                document.getElementById("title").value = post.title;
                document.getElementById("author").value = post.author;
                document.getElementById("content").value = post.body;
            }
        });
    </script>
</body>
</html>
