import { Flipped, Flipper } from "react-flip-toolkit";
import { useProjectContext } from "../../context/useProjectContext";
import styles from "./grid-view.module.scss";

interface GridViewProps {}

const GridView: React.FC<GridViewProps> = () => {
  const { projects } = useProjectContext();

  return (
    <Flipper flipKey={projects.join("")}>
      <div className={styles["grid-view"]}>
        {projects.map((project) => (
          <Flipped key={project.id} flipId={project.id}>
            <div key={project.id} className={styles["grid-item"]}>
              <img
                className={styles.img}
                src={project.imgUrl}
                alt={`${project.category} project`}
              />
            </div>
          </Flipped>
        ))}
      </div>
    </Flipper>
  );
};

export default GridView;
