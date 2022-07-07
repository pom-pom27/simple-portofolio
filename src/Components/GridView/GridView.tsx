import styles from "./grid-view.module.scss";
interface GridViewProps {}

const projects = [
  { id: 1, imgUrl: "../../../img/img_4.jpg", category: "Web" },
  { id: 2, imgUrl: "../../../img/img_4.jpg", category: "Web" },
  { id: 3, imgUrl: "../../../img/img_4.jpg", category: "Web" },
  { id: 4, imgUrl: "../../../img/img_4.jpg", category: "Web" },
  { id: 5, imgUrl: "../../../img/img_4.jpg", category: "Web" },
  { id: 6, imgUrl: "../../../img/img_4.jpg", category: "Web" },
];

const GridView: React.FC<GridViewProps> = () => {
  return (
    <div className={styles["grid-view"]}>
      {projects.map((project) => (
        <div className={styles["grid-item"]}>
          <img
            className={styles.img}
            src={project.imgUrl}
            alt={`${project.category} project`}
          />
        </div>
      ))}
    </div>
  );
};

export default GridView;
