import styles from "./app.module.scss";
import Footer from "./Components/Footer/Footer";
import GridView from "./Components/GridView/GridView";
import Header from "./Components/Header/Header";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <div className={styles.app}>
      <Header />
      <GridView />
      <Footer />
    </div>
  );
};

export default App;
