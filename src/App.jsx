import Nav from "./components/Nav";
import Home from "./pages/Home";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./userSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  console.log(user);
  return (
    <>
      <Nav />
      <Home />
    </>
  );
}

export default App;
