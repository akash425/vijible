import React from "react";
import "./Feed.css";
// import StoryReel from "./StoryReel";
// import MessageSender from "./MessageSender";
import Post from "../Post/Post";
function Feed() {
  return (
    <div className="feed">
      {/* <StoryReel />
      <MessageSender /> */}
      <Post
        profilePic="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        image="https://th.bing.com/th/id/OIP.aJ1uZzv6RwE-ywKw_o8wtwHaEo?pid=Api&rs=1"
        message="message"
        timestamp="timestamp"
        username="Akash K"
      />
      <Post />
      <Post />
    </div>
  );
}

export default Feed;
