import './App.css';
import Nav from './Nav';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  const [posts, setPosts] = useState([]);

  const fetchPost = () => {
    axios
      .get('http://127.0.0.1:8000/api/posts')
      // .get(${process.env.REACT_APP_API}/posts)
      .then(response => {
        console.log(response);
        setPosts(response.data.posts)
      })
      .catch(error => alert('Error fetching posts'));
  }

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div className="App">
      <Nav />
      {posts.map((post, i) => (
        <div>
          <h2>{post.title}</h2>
          <p>{post.slug}</p>
          <p>{post.content}</p>
        </div>
      ))};
    </div>
  );
}

export default App;