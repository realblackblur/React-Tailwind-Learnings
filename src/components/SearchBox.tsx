import { useEffect, useRef } from "react";

const SearchBox = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <>
      <input ref={inputRef} placeholder="Search" />
      <button onClick={() => inputRef.current?.focus()}>Focus</button>
    </>
  );
};

export default SearchBox;
