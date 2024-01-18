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
              <div className={styles.overlay}>
                {project.githubLink && (
                  <a
                    title="Go to the source code and its description"
                    target="_blank"
                    href={project.githubLink}
                    className={styles["contact-link"]}
                  >
                    <img
                      src={
                        new URL("../../img/github.svg", import.meta.url).href
                      }
                      alt={project.name}
                    />
                  </a>
                )}

                {project.liveUrl && (
                  <a
                    title="Go to the live demo"
                    target="_blank"
                    href={project.liveUrl}
                    className={styles["contact-link"]}
                  >
                    <img
                      src={new URL("../../img/globe.svg", import.meta.url).href}
                      alt={project.name}
                    />
                  </a>
                )}
                {project.playStore && (
                  <a
                    title="Go to Play Store"
                    target="_blank"
                    href={project.playStore}
                    className={styles["contact-link"]}
                  >
                    <img
                      src={
                        new URL("../../img/playstore.svg", import.meta.url).href
                      }
                      alt={project.name}
                    />
                  </a>
                )}
              </div>

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
