import NavBar from "../component/NavBar";
import style from "./Ukuran.module.css"
function MainLayout(props) {
  return (
    <>
    <div className={style.nav}>
      <NavBar />
    </div>
      {props.children}
    </>
    
  );
}

export default MainLayout;
