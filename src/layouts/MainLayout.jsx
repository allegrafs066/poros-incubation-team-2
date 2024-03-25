import NavBar from "../components/NavBar";

function MainLayout(props) {
  return (
    <>
      <NavBar />
      {props.children}
    </>
  );
}

export default MainLayout;
