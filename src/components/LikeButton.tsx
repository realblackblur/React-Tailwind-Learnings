interface LikeButtonProps {
  title: string;
  liked: boolean;
  count: number;
  onLike: () => void;
}

const LikeButton = ({ title, liked, count, onLike }: LikeButtonProps) => {
  return (
    <>
      <h2>{title}</h2>
      <button onClick={onLike}>{liked ? "Unlike" : "Like"}</button>
      {count > 0 && <p>{count}</p>}
    </>
  );
};

export default LikeButton;
