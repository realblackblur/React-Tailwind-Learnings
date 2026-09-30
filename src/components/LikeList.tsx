import LikeButton from "./LikeButton";

const postTitles: string[] = [
  "My First Post",
  "React is fun",
  "Learning TypeScript",
];

const LikeList = () => {
  return (
    <>
      {postTitles.map((postTitle) => (
        <LikeButton title={postTitle} key={postTitle} />
      ))}

      {postTitles.length === 0 && <p>No Posts Yet!</p>}
    </>
  );
};

export default LikeList;
