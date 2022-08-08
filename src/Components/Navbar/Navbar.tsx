import cx from "classnames";

import { MouseEventHandler, useState } from "react";
import { TCategory } from "../../context/data";
import { useProjectContext } from "../../context/useProjectContext";
import styles from "./navbar.module.scss";

interface NavbarProps {}

const labels: TCategory[] = ["All", "Web", "Mobile"];

const Navbar: React.FC<NavbarProps> = () => {
  const { projects, filterByCategory } = useProjectContext();
  const [selected, setSelected] = useState(0);

  const handleCLick = (index: number) => setSelected(index);
  return (
    <nav className={styles.nav}>
      {labels.map((label, index) => (
        <Category
          onClick={(e) => {
            e.preventDefault();
            handleCLick(index);
            filterByCategory?.(label);
          }}
          isSelected={index == selected}
          text={label}
          key={label}
        />
      ))}
    </nav>
  );
};

export default Navbar;

interface CategoryProps {
  text: string;
  isSelected: boolean;

  onClick: MouseEventHandler;
}

const Category: React.FC<CategoryProps> = ({ text, isSelected, onClick }) => {
  return (
    <a
      href="#"
      onClick={onClick}
      className={cx(styles["nav-link"], { [styles.selected]: isSelected })}
    >
      {text}
    </a>
  );
};
