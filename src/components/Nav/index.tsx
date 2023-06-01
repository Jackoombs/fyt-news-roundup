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
    <aside className="fixed left-0 top-0 h-full w-32 border-r border-ring flex flex-col items-center justify-between py-8">
      <span></span>
      <nav
        className="space-y-10 font-display"
        role="menu"
        aria-label="Main Menu"
      >
        <NavItem link="/outlets/BBC">
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
