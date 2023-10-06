import axios from "axios";
import React, { useEffect, useState } from "react";

export const Menu = ({ cat }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/?cat=${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

  // const posts = [
  //     {
  //       id: 1,
  //       title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //       img: "https://th.bing.com/th/id/OIP.ink04fbh586g2uWXfbzztgHaKx?pid=ImgDet&rs=1",
  //     },
  //     {
  //       id: 2,
  //       title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //       img: "https://images.pexels.com/photos/14982761/pexels-photo-14982761/free-photo-of-close-up-photo-of-oranges.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     },
  //     {
  //       id: 3,
  //       title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //       img: "https://images.pexels.com/photos/1395958/pexels-photo-1395958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     },
  //     {
  //       id: 4,
  //       title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //       img: "https://images.pexels.com/photos/4518587/pexels-photo-4518587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     },
  //   ];

  return (
    <div className="menu">
      <h1>Other post you may like</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={`../upload/${post?.img}`} alt="" />
          <h2>{post.title}</h2>
          <button>Read More</button>
        </div>
      ))}
    </div>
  );
};
