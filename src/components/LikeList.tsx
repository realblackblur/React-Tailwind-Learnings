import LikeButton from "./LikeButton";

const postTitles: { id: number; title: string }[] = [
  { id: 1, title: "My First Post" },
  { id: 2, title: "React is fun" },
  { id: 3, title: "Learning TypeScript" },
];

const LikeList = () => {
  return (
    <>
      {postTitles.map((postTitle) => (
        <LikeButton key={postTitle.id} title={postTitle.title} />
      ))}

      {postTitles.length === 0 && <p>No Posts Yet!</p>}
    </>
  );
};

export default LikeList;
