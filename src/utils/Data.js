import {FaReact, FaLaravel, FaVuejs, FaPhp} from "react-icons/fa"
import Project1 from "../assets/projet.png";
import Project2 from "../assets/Project2.png";

export const Skyls = [{
    id: 1, tech: "React", icon: <FaReact/>
}, {
    id: 2, tech: "Laravel", icon: <FaLaravel/>
}, {
    id: 3, tech: "Vuejs", icon: <FaVuejs/>
}, {
    id: 4, tech: "PHP", icon: <FaPhp/>
},];


export const ProjetDetail = [
    {
        id: 0,
        projet_name: "Immobillier",
        projet_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        projet_img: Project1,
        tect_stack: ['Reactjs', 'CSS/SCSS'],
        project_url: "www.google.com",
        reverse: false
    },
    {
        id: 1,
        projet_name: "Anime",
        projet_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        projet_img: Project2,
        tect_stack: ['Reactjs', 'TailwindCss'],
        project_url: "www.google.com",
        reverse: true
    },
];

export const NavLinks = [
    {
        id:0,
        name:"Home",
        href:"Home"
    },
    {
        id:1,
        name:"Skills",
        href:"skils"
    },
    {
        id:2,
        name:"Project",
        href:"project"
    },
    {
        id:3,
        name:"Contact",
        href:"contact"
    },
];