import { useState } from "react";

interface LikeButtonProps {
  title: string;
}

const LikeButton = ({ title }: LikeButtonProps) => {
  const [state, setState] = useState({ liked: false, count: 0 });

  const handleClick = () => {
    setState((prev) => ({
      liked: !prev.liked,
      count: prev.liked ? prev.count - 1 : prev.count + 1,
    }));
  };

  return (
    <>
      <h2>{title}</h2>
      <button onClick={handleClick}>{state.liked ? "Unlike" : "Like"}</button>
      {state.count > 0 && <p>You have {state.count} likes</p>}
    </>
  );
};

export default LikeButton;
