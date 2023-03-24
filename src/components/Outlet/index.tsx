import { useState } from "react";
import { OutletMenu } from "./OutletMenu";
import { OutletContent } from "./OutletContent";
import { OutletTabs } from "./OutletTabs";

export interface Tab {
  name: string;
  value: "ARTICLES" | "CATEGORYS";
}

const Outlets = () => {
  const [activeOutlet, setActiveOutlet] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<Tab["value"]>("ARTICLES");

  return (
    <div className="mx-auto flex h-full flex-col pb-10">
      <OutletMenu {...{ activeOutlet, setActiveOutlet }} />
      <div className="h-full p-8">
        <OutletTabs {...{ activeTab, setActiveTab }} />
        {activeOutlet && <OutletContent {...{ activeOutlet, activeTab }} />}
      </div>
    </div>
  );
};

export default Outlets;
