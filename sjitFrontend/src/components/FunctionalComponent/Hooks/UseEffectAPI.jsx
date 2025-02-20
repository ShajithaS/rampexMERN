import { useState, useEffect } from "react";
import axios from "axios";
const UseEffectAPI = () => {
  var [posts, setPost] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPost(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log("Couldnt read API", err));
  }, []);
  return (
    <div>
      <h1>This is useEffect example with API call</h1>
      <h3>
        We are going to fetch data from JSON placeholder and display the data
      </h3>
      <ol>
        {posts.map((post)=>(
           <li key={post.id}>{post.title}</li>
        ))}
      </ol>
    </div>
  );
};

export default UseEffectAPI;
