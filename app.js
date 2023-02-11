// Example data
const blogPosts = [
  {
    title: 'My First Blog Post',
    author: 'John Doe',
    date: 'January 1, 2023',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit.',
    link: 'post1.html',
  },
  {
    title: 'My Second Blog Post',
    author: 'Jane Smith',
    date: 'January 5, 2023',
    content:
      'Sed et lectus in massa imperdiet tincidunt. Praesent neque tortor, sollicitudin non, euismod a, adipiscing a, est. Mauris vel tortor non felis ultricies egestas.',
    link: 'post2.html',
  },
  {
    title: 'My Third Blog Post',
    author: 'Bob Johnson',
    date: 'January 10, 2023',
    content: 'Maecenas sollicitudin. Nullam sodales lectus id justo. Nullam aliquam tristique metus.',
    link: 'post3.html',
  },
];

// Function to create a blog post element
function createBlogPostElement(post) {
  const blogPostElement = document.createElement('a');
  blogPostElement.href = post.link;
  blogPostElement.classList.add('blog-post');

  const titleElement = document.createElement('h3');
  titleElement.textContent = post.title;

  const authorElement = document.createElement('p');
  authorElement.textContent = `By ${post.author}`;

  const dateElement = document.createElement('p');
  dateElement.textContent = post.date;

  const contentElement = document.createElement('p');
  contentElement.textContent = post.content;

  blogPostElement.appendChild(titleElement);
  blogPostElement.appendChild(authorElement);
  blogPostElement.appendChild(dateElement);
  blogPostElement.appendChild(contentElement);

  return blogPostElement;
}

// Function to add blog posts to the page
function addBlogPosts() {
  const blogPostsElement = document.getElementById('blog-posts');

  for (const post of blogPosts) {
    const blogPostElement = createBlogPostElement(post);
    blogPostsElement.appendChild(blogPostElement);
  }
}

// Add blog posts when the page loads
window.addEventListener('load', addBlogPosts);

