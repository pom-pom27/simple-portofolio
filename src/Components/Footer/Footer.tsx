import styles from "./footer.module.scss";
interface FooterProps {}

const contacts = [
  {
    id: 1,
    name: "github",
    imgUrl: "../../../img/github.svg",
    link: "https://github.com/seljaworks",
  },
  {
    id: 2,
    name: "linkedin",
    imgUrl: "../../../img/linkedin.svg",
    link: "https://www.linkedin.com/in/seljaworks/",
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
            target="_blank"
            href={contact.link}
            className={styles["contact-link"]}
          >
            <img src={contact.imgUrl} alt={`${contact.name} logo`} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
