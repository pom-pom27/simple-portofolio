export interface IProject {
  id: number;
  name: string;
  imgUrl: string;
  category: TCategory;
}

export type TCategory = "All" | "Web" | "Mobile";

export const myProjects: IProject[] = [
  {
    id: 1,
    name: "Netflix Clone",
    imgUrl: "../../../img/img_4.jpg",
    category: "Web",
  },
  {
    id: 2,
    name: "Disney Plus Clone",
    imgUrl: "../../../img/img_4.jpg",
    category: "Web",
  },
  {
    id: 3,
    name: "Shoes E-commerce ",
    imgUrl: "../../../img/img_4.jpg",
    category: "Web",
  },
  {
    id: 4,
    name: "Bekasi News",
    imgUrl: "../../../img/img_4.jpg",
    category: "Mobile",
  },
  {
    id: 5,
    name: "JDIH BABINKUM TNI",
    imgUrl: "../../../img/img_4.jpg",
    category: "Mobile",
  },
];
