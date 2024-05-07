/* eslint-disable react/no-unescaped-entities */

import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import CategoryTab from "../../Components/CategoryTab/CategoryTab";

const Categories = () => {

  return (
    <section className="max-w-screen-xl mx-auto mt-12 px-4">
      <div>
        <Tabs>
          <TabList className="font-bold border-b-2 border-black gap-12">
            <Tab>Parts</Tab>
            <Tab>Wheels & Tires</Tab>
            <Tab>Exterior</Tab>
            <Tab>Lighting</Tab>
            <Tab>Body</Tab>
            <Tab>Interior</Tab>
            <Tab>Audio</Tab>
            <Tab>Automotive Tools</Tab>
          </TabList>
          {/* Category content */}
          <TabPanel>
            <CategoryTab category="parts"></CategoryTab>
          </TabPanel>
          <TabPanel>
            <CategoryTab category="wheels_tires"></CategoryTab>
          </TabPanel>
          <TabPanel>
            <CategoryTab category="exterior"></CategoryTab>
          </TabPanel>
          <TabPanel>
            <CategoryTab category="lighting"></CategoryTab>
          </TabPanel>
          <TabPanel>
            <CategoryTab category="body"></CategoryTab>
          </TabPanel>
          <TabPanel>
            <CategoryTab category="interior"></CategoryTab>
          </TabPanel>
          <TabPanel>
            <CategoryTab category="audio"></CategoryTab>
          </TabPanel>
          <TabPanel>
            <CategoryTab category="automotive_tools"></CategoryTab>
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default Categories;

//
