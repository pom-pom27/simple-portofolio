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
    imgUrl: "/src/img/ea1.png",
    category: "Web",
    githubLink: "https://github.com/seljaworks/eja-admin",
    liveUrl: "https://eja-admin.vercel.app/",
  },
  {
    id: 2,
    name: "CodeDiary",
    imgUrl: "/src/img/diary.png",
    category: "Web",
    githubLink: "https://github.com/seljaworks/codediary",
  },
  {
    id: 3,
    name: "JDIH BABINKUM TNI",
    imgUrl: "/src/img/jdih.png",
    category: "Mobile",
    githubLink: "",
    playStore:
      "https://play.google.com/store/apps/details?id=com.babinkum_tni.jdih_mobile",
  },
  {
    id: 4,
    name: "Bekasi News",
    imgUrl: "/src/img/news.png",
    category: "Mobile",
    githubLink: "https://github.com/seljaworks/bnews-prototype-flutter",
  },
  {
    id: 5,
    name: "E-commz",
    imgUrl: "/src/img/ecom.png",
    category: "Web",
    githubLink: "https://github.com/seljaworks/.e-commz",
    liveUrl: "https://e-commz.vercel.app/",
  },
];
