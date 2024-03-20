import NavBar from "../components/NavBar";
import style from "./MainLayout.module.css"; // Import CSS module for MainLayout styling

function MainLayout(props) {
  return (
    <div className={style.mainLayout}>
      <NavBar />
      <div className={style.content}>{props.children}</div>
    </div>
  );
}

export default MainLayout;
