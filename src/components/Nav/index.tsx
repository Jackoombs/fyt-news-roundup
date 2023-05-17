import {
  ChatBubbleBottomCenterTextIcon,
  NewspaperIcon,
  CalendarDaysIcon,
  BookmarkIcon,
} from "@heroicons/react/24/outline";
import NavItem from "@/components/Nav/NavItem";
import ThemeToggle from "@/components/Nav/ThemeToggle";

const Nav = () => {
  return (
    <aside className="h-full w-32 border-r border-slate-200 text-slate-900 flex flex-col items-center justify-between bg-slate-100 py-8 dark:bg-slate-950 dark:border-slate-700">
      <span></span>
      <nav
        className="space-y-10 font-display"
        role="menu"
        aria-label="Main Menu"
      >
        <NavItem link="/outlets">
          <ChatBubbleBottomCenterTextIcon className="h-10" /> Outlets
        </NavItem>
        <NavItem link="/articles">
          <NewspaperIcon className="h-10" /> Articles
        </NavItem>
        <NavItem link="/calendar">
          <CalendarDaysIcon className="h-10" /> Calendar
        </NavItem>
        <NavItem link="/saved">
          <BookmarkIcon className="h-10" /> Saved
        </NavItem>
      </nav>
      <ThemeToggle />
    </aside>
  );
};

export default Nav;
