import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import PromoSection from "../components/PromoSection";
import style from "./MainLayout.module.css"; 

function MainLayout(props) {
  return (
    <div className={style.mainLayout}>
      <NavBar />
      <div className={style.content}>{props.children}</div>
      <PromoSection />
      <Footer />
    </div>
  );
}

export default MainLayout;
