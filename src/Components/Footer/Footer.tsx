import styles from "./footer.module.scss";
interface FooterProps {}

const contacts = [
  {
    id: 1,
    name: "linkedin",
    imgUrl: new URL("/src/img/linkedin.svg", import.meta.url).href,
    link: "https://www.linkedin.com/in/seljaworks/",
  },
  {
    id: 2,
    name: "github",
    imgUrl: new URL("/src/img/github.svg", import.meta.url).href,
    link: "https://github.com/seljaworks",
  },
];

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className={styles.footer}>
      <h3 className={styles.contact}>
        Contact: <a href="mailto:seljaworks@gmail.com">seljaworks@gmail.com</a>
      </h3>
      <div className={styles["contact-icons"]}>
        {contacts.map((contact) => (
          <a
            key={contact.id}
            target="_blank"
            href={contact.link}
            className={styles["contact-link"]}
          >
            <img src={contact.imgUrl} alt={`${contact.name} icon`} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
