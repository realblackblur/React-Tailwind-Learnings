import { useEffect, useState } from "react";
import LikeButton from "./LikeButton";

interface Post {
  id: number;
  title: string;
  liked: boolean;
  count: number;
}

const posts: Post[] = [
  { id: 1, title: "My First Post", count: 0, liked: false },
  { id: 2, title: "React is fun", count: 0, liked: false },
  { id: 3, title: "Learning TypeScript", count: 0, liked: false },
];

const LikeList = () => {
  const [postsState, setPostsState] = useState<Post[]>(posts);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handleLike = (id: number) => {
    setPostsState((posts) => {
      return posts.map((post) =>
        post.id === id
          ? {
              id: post.id,
              title: post.title,
              liked: !post.liked,
              count: post.liked ? post.count - 1 : post.count + 1,
            }
          : post,
      );
    });
  };

  return (
    <>
      {postsState.map((post) => (
        <LikeButton
          key={post.id}
          title={post.title}
          liked={post.liked}
          count={post.count}
          onLike={() => handleLike(post.id)}
        />
      ))}
      <p>Time on page: {seconds}s</p>
    </>
  );
};

export default LikeList;
