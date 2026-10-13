import LikeList from "./components/LikeList";
import SearchBox from "./components/SearchBox";
import ThemeMessage from "./components/ThemeMessage";
import ThemeToggle from "./components/ThemeToggle";
import ThemeProvider from "./context/ThemeProvider";

const App = () => {
  return (
    <>
      <ThemeProvider>
        <LikeList />
        <SearchBox />
        <ThemeToggle />
        <ThemeMessage />
      </ThemeProvider>
    </>
  );
};

export default App;
