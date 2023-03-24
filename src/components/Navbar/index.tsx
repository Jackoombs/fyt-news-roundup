import { NavItem } from "./NavItem";
import { ChatBubbleBottomCenterIcon } from "@heroicons/react/24/solid";
import { NewspaperIcon } from "@heroicons/react/24/solid";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import { BookmarkIcon } from "@heroicons/react/24/solid";
import { ActiveItem } from "../../pages";

interface Props {
  activeItem: ActiveItem;
  setActiveItem: React.Dispatch<React.SetStateAction<ActiveItem>>;
}

const Sidebar = ({ activeItem, setActiveItem }: Props) => {
  return (
    <aside className="fixed top-0 left-0 z-10 flex h-full w-full max-w-[8rem] items-center justify-center self-stretch bg-indigo-300">
      <div>
        <ul className="flex flex-col gap-4 font-semibold tracking-wider">
          <NavItem item="OUTLETS" {...{ activeItem, setActiveItem }}>
            <>
              <ChatBubbleBottomCenterIcon className="h-10" /> Outlets
            </>
          </NavItem>
          <NavItem item="ARTICLES" {...{ activeItem, setActiveItem }}>
            <>
              <NewspaperIcon className="h-10" /> Articles
            </>
          </NavItem>
          <NavItem item="CALENDAR" {...{ activeItem, setActiveItem }}>
            <>
              <CalendarDaysIcon className="h-10" /> Calendar
            </>
          </NavItem>
          <NavItem item="BOOKMARKED" {...{ activeItem, setActiveItem }}>
            <>
              <BookmarkIcon className="h-10" /> Bookmarked
            </>
          </NavItem>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
