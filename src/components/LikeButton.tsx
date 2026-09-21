import { useState } from "react";

interface LikeButtonProps {
  title: string;
  extra: number;
}

const LikeButton = ({ title, extra }: LikeButtonProps) => {
  const [state, setState] = useState({ liked: false, count: 0 });

  const handleClick = () => {
    setState((prev) => ({
      liked: !prev.liked,
      count: prev.liked ? prev.count - 1 : prev.count + 1,
    }));
  };

  return (
    <>
      <h2>
        {title}
        {extra}
      </h2>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        {state.liked ? "Unlike" : "Like"}
      </button>
      <p>{state.count} Likes</p>
    </>
  );
};

export default LikeButton;
