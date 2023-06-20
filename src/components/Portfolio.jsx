import React from "react";
import MERNtodo from "../assest/portfolio/MERNtodo.png";
import SnakeGame from "../assest/portfolio/SnakeGame.png";
import PuzzleGame from "../assest/portfolio/PuzzleGame.png";
import Dashboard from "../assest/portfolio/Dashboard.png";
import reactParallax from "../assest/portfolio/portfolio.png";
import MyOnlineMeal from "../assest/portfolio/MyOnlineMeal.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: MERNtodo,
      href: "https://react-todo-app-one-gamma.vercel.app",
      viewlink: "https://github.com/Abhishekve-003/react_todo_app",
    },
    {
      id: 2,
      src: SnakeGame,
      href: "https://abhishekve-003.github.io/Snake_Game/",
      viewlink: "https://github.com/Abhishekve-003/Snake_Game",
    },
    {
      id: 3,
      src: PuzzleGame,
      href: "https://puzzle-z7c7.onrender.com",
      viewlink: "https://github.com/Abhishekve-003/puzzle",
    },
    {
      id: 4,
      src: reactParallax,
      href: "",
      viewlink: "",
    },
    {
      id: 5,
      src: Dashboard,
      href: "https://resilient-cendol-6e5d4a.netlify.app/",
      viewlink: "https://github.com/Abhishekve-003/Dashboard2",
    },
    {
        id: 6,
        src: MyOnlineMeal,
        href: "https://abhishekve-003.github.io/MyOnlineMeal/",
        viewlink: "https://github.com/Abhishekve-003/MyOnlineMeal",
      },
    
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 
    w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-4 pt-20 md:pt-0">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href, viewlink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg ">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  href={href}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </a>
                <a
                  href={viewlink}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
