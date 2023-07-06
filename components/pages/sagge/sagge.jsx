import React, { useState } from "react";
import Buy from "./buy";
import Mint from "./mint";
import Sell from "./sell";
import Layout from "../../Layout";
//import { Tab } from "@headlessui/react";
import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useColorModeValue,
} from "@chakra-ui/react";

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

const Sagge = () => {
  //   const [index, setIndex] = useState();
  //   return (
  //     <Layout>
  //       <div className="border-b border-gray-200 dark:border-gray-700 pt-20">
  //         <Tab.Group
  //           defaultIndex={index}
  //           onChange={(index) => {
  //             console.log("Changed selected tab to:", index);
  //             setIndex(index);
  //           }}
  //         >
  //           <Tab.List className="text-xl space-x-9">
  //             <Tab
  //               className={({ selected }) =>
  //                 classNames(
  //                   selected
  //                     ? " p-4 rounded-t-lg border-b-2  hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
  //                     : "text-gray-400 font-avenir-roman"
  //                 )
  //               }
  //             >
  //               Buy
  //             </Tab>
  //             <Tab
  //               className={({ selected }) =>
  //                 classNames(
  //                   selected
  //                     ? " p-4 rounded-t-lg border-b-2  hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
  //                     : "text-gray-400 font-avenir-roman"
  //                 )
  //               }
  //             >
  //               Sell
  //             </Tab>
  //             <Tab
  //               className={({ selected }) =>
  //                 classNames(
  //                   selected
  //                     ? " p-4 rounded-t-lg border-b-2  hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
  //                     : "text-gray-400 font-avenir-roman"
  //                 )
  //               }
  //             >
  //               Mint
  //             </Tab>
  //           </Tab.List>
  //           <Tab.Panels>
  //             <Tab.Panel>
  //               <Buy />
  //             </Tab.Panel>
  //             <Tab.Panel>
  //               <Sell />
  //             </Tab.Panel>
  //             <Tab.Panel>
  //               <Mint />
  //             </Tab.Panel>
  //           </Tab.Panels>
  //         </Tab.Group>
  //       </div>
  //     </Layout>
  //   );

  const tabTextColor = useColorModeValue("black", "brand");

  return (
    <Layout className="border-b border-gray-200 dark:border-gray-700 ">
      <div className="pt-10">
        <Tabs colorScheme={tabTextColor} className="mt-7">
          <TabList marginBottom="2" paddingX="16" marginTop="8">
            <Tab
              minWidth={{ base: "auto", md: "24" }}
              flexGrow={{ base: 1, md: "unset" }}
            >
              Mint
            </Tab>
            <Tab
              minWidth={{ base: "auto", md: "24" }}
              flexGrow={{ base: 1, md: "unset" }}
            >
              Buy
            </Tab>
            <Tab
              minWidth={{ base: "auto", md: "24" }}
              flexGrow={{ base: 1, md: "unset" }}
            >
              Sell
            </Tab>
          </TabList>

          <TabPanels>
            {/* Mint tab */}
            <TabPanel>
              <Mint />
            </TabPanel>

            {/* Buy tab */}
            <TabPanel>
              <Buy />
            </TabPanel>

            {/* Sell tab */}
            <TabPanel>
              <Sell />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Sagge;
