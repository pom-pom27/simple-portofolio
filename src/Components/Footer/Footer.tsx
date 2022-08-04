import styles from "./footer.module.scss";
interface FooterProps {}

const contacts = [
  {
    id: 1,
    name: "linkedin",
    imgUrl: "/src/img/linkedin.svg",
    link: "https://www.linkedin.com/in/seljaworks/",
  },
  {
    id: 2,
    name: "github",
    imgUrl: "/src/img/github.svg",
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
