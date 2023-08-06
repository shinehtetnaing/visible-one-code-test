import { useState, useEffect } from "react";
import Item from "./Item";

const FetchedItems = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      const fivePosts = data.slice(0, 5); // Get the first 5 posts
      setPosts(fivePosts);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
        {posts.map(post => (
            <Item key={post.id} number={post.id} title={post.title} />
        ))}
    </>
  )
};

export default FetchedItems;
