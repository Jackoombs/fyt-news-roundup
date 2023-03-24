import { type NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Sidebar from "../components/Navbar";
import Outlets from "../components/Outlet";

export type ActiveItem = "OUTLETS" | "ARTICLES" | "CALENDAR" | "BOOKMARKED";

const Home: NextPage = () => {
  const [activeItem, setActiveItem] = useState<ActiveItem>("OUTLETS");

  const renderActiveItem = () => {
    switch (activeItem) {
      case "OUTLETS":
        return <Outlets />;
      // case "ARTICLES":
      //   return <Articles />;
      // case 'CALENDAR':
      //   return <Calendar />;
      // case 'BOOKMARKED':
      //   return <Bookmarked />;
      default:
        return <Outlets />;
    }
  };

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="flex min-h-screen bg-indigo-100 text-slate-900 dark:bg-slate-900">
        <Sidebar {...{ activeItem, setActiveItem }} />
        <main className="w-full self-stretch pl-[8rem]">
          {renderActiveItem()}
        </main>
      </div>
    </>
  );
};

export default Home;
