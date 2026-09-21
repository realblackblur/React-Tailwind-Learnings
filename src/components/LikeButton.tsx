import { useState } from "react";

interface LikeButtonProps {
  title: string;
  extra: number;
}

const LikeButton = ({ title, extra }: LikeButtonProps) => {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);

  const handleClick = () => {
    if (liked) {
      setLiked(false);
      setCount(count - 1);
    } else {
      setLiked(true);
      setCount(count + 1);
    }
  };

  return (
    <>
      <h2>{title}{extra}</h2>
      <button onClick={handleClick}>{liked ? "Unlike" : "Like"}</button>
      <p>{count} Likes</p>
    </>
  );
};

export default LikeButton;
