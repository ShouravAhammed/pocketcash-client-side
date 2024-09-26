import { Tab, TabList, TabPanel, Tabs, Tab as ReactTab } from "react-tabs";
import { useState } from "react";
import Profile from "../../Components/Overiew/Profile";
import Settings from "../../Components/Overiew/Settings";

const Overview = () => {
  const [selectedTab, setSelectedTab] = useState(0); // Tracks active tab (0: Profile, 1: Settings)

  return (
    <div className="">
      <Tabs selectedIndex={selectedTab} onSelect={(index) => setSelectedTab(index)}>
        {/* Tab List */}
        <TabList className={"flex items-center justify-center my-10"}>
          <ReactTab
            className={`text-base font-bold px-6 py-2 rounded-l-full tracking-wider cursor-pointer 
              ${
              selectedTab === 0 ? "bg-rose-500 text-white" : "bg-gray-100"
            }`}
          >
            Profile
          </ReactTab>
          <ReactTab
            className={`text-base font-bold px-6 py-2 rounded-r-full tracking-wider cursor-pointer 
              ${
                selectedTab === 1 ? "bg-rose-500 text-white" : "bg-gray-100"
            }`}
          >
            Settings
          </ReactTab>
        </TabList>

        {/* Tab Panels */}
        <TabPanel>
          <Profile />
        </TabPanel>
        <TabPanel>
          <div className="lg:w-2/5 md:w-2/3 w-full mx-auto">
           <Settings />
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Overview;