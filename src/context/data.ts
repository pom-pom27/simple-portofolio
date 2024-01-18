export interface IProject {
  id: number;
  name: string;
  imgUrl: string;
  githubLink?: string;
  liveUrl?: string;
  playStore?: string;
  category: TCategory;
}

export type TCategory = "All" | "Web" | "Mobile";

export const myProjects: IProject[] = [
  {
    id: 1,
    name: "Eja Admin",
    imgUrl: new URL("../img/ea.png", import.meta.url).href,
    category: "Web",
    githubLink: "https://github.com/pom-pom27/eja-admin",
    liveUrl: "https://eja-admin.vercel.app/",
  },
  {
    id: 2,
    name: "CodeDiary",
    imgUrl: new URL("../img/diary.png", import.meta.url).href,
    category: "Web",
    githubLink: "https://github.com/pom-pom27/codediary",
  },
  {
    id: 3,
    name: "JDIH BABINKUM TNI",
    imgUrl: new URL("../img/jdih.png", import.meta.url).href,
    category: "Mobile",
    githubLink: "",
    playStore:
      "https://play.google.com/store/apps/details?id=com.babinkum_tni.jdih_mobile",
  },
  {
    id: 4,
    name: "Bekasi News",
    imgUrl: new URL("../img/news.png", import.meta.url).href,
    category: "Mobile",
    githubLink: "https://github.com/pom-pom27/bnews-prototype-flutter",
  },
  {
    id: 5,
    name: "ImageMe",
    imgUrl: new URL("../img/imageme.jpg", import.meta.url).href,
    category: "Web",
    githubLink: "https://github.com/pom-pom27/imageMe",
    liveUrl: "https://imageme.vercel.app/",
  },
  {
    id: 6,
    name: "Bard Buddy ",
    imgUrl: new URL("../img/airn.jpg", import.meta.url).href,
    category: "Mobile",
    githubLink: "https://github.com/pom-pom27/ai-chat-rn",
  },
];
