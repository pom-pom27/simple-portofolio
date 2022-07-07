import Navbar from "../Navbar/Navbar";
import styles from "./header.module.scss";
interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className={styles.header}>
      <div className={styles.title}>
        <h1 className={styles.name}>Hey, I'm Selja Sampe Rante</h1>
        <h2 className={styles.job}>
          Professional Front-end Web & Mobile Developer
        </h2>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
