import { NavItem } from "./NavItem";
import { ChatBubbleBottomCenterIcon } from "@heroicons/react/24/solid";
import { NewspaperIcon } from "@heroicons/react/24/solid";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import { ActiveItem } from "../../pages";
import { HeartIcon } from "@heroicons/react/24/solid";

const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 z-10 flex h-full w-full max-w-[8rem] items-center justify-center self-stretch bg-indigo-300">
      <div>
        <ul className="flex flex-col gap-4 font-semibold tracking-wider">
          <NavItem link="/outlets">
            <>
              <ChatBubbleBottomCenterIcon className="h-10" /> Outlets
            </>
          </NavItem>
          <NavItem link="/articles">
            <>
              <NewspaperIcon className="h-10" /> Articles
            </>
          </NavItem>
          <NavItem link="/calendar">
            <>
              <CalendarDaysIcon className="h-10" /> Calendar
            </>
          </NavItem>
          <NavItem link="/saved">
            <>
              <HeartIcon className="h-10" /> Saved
            </>
          </NavItem>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
