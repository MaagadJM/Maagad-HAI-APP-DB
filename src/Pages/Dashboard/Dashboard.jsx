import React, { useState } from "react";

import UsersChart from "./Charts/UsersChart";
import UsageChart from "./Charts/UsageChart";
import ActiveInactiveChart, { Status } from "./Charts/ActiveInactiveChart";
import OverallUsageChartbtn from "./Charts/OverallUsage";

import "./dashboard.css";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
// import { SiBabylonDotJs } from "react-icons/si";
import { SiContributorcovenant } from "react-icons/si";

export default function Home() {
  // -------------- OVERALL USAGE BUTTON --------------- //
  const [ActiveUsers, setActiveUsers] = useState(true);
  const [Inactive, setInactive] = useState(true);

  const handleToggleProduct1 = () => {
    setActiveUsers(!ActiveUsers);
  };

  const handleToggleProduct2 = () => {
    setInactive(!Inactive);
  };
  // -------------- OVERALL USAGE BUTTON END --------------- //

  // ------------------------------------------------------------- USERS DROPDOWN --------------------------------------------------------- //
  function UsersDropdownbtn(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const UsersDropdown = () => {
    return (
      <Menu as="div" className="relative inline-block text-left">
        {/* <div className="flex w-full"> */}
        {/* <div className="group flex items-center">
            <div className="ltr:ml-3 rtl:mr-3"> */}
        <Menu.Button className="flex rounded-3xl bg-[#384159] text-white px-7 py-3 text-xl font-medium shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none transition-colors duration-300 ease-in-out hover:text-white hover:bg-[#6e7ea2]">
          30 Days
          {/* <ChevronDownIcon
              className="-mr-1 h-5 w-5 text-white"
              aria-hidden="true"
            /> */}
        </Menu.Button>
        {/* </div>
          </div> */}
        {/* </div> */}

        <Transition
          as={React.Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1" role="none">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={UsersDropdownbtn(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-8 py-4 text-lg hover:bg-gray-400 hover:text-white hover:no-underline transition-colors duration-300"
                    )}
                    role="menuitem"
                  >
                    30 days
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={UsersDropdownbtn(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-8 py-4 text-lg hover:bg-gray-400 hover:text-white hover:no-underline transition-colors duration-300"
                    )}
                    role="menuitem"
                  >
                    3 months
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={UsersDropdownbtn(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-8 py-4 text-lg hover:bg-gray-400 hover:text-white hover:no-underline transition-colors duration-300"
                    )}
                    role="menuitem"
                  >
                    9 months
                  </a>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    );
  };
  // ------------------------------------------------------------- USERS DROPDOWN END ----------------------------------------------------- //

  // ------------------------------------------------------------- USAGE DROPDOWN --------------------------------------------------------- //
  function UsageDropdownbtn(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const UsageDropdown = () => {
    return (
      <Menu as="div" className="relative inline-block text-left">
        {/* <div className="flex w-full"> */}
        {/* <div className="group flex items-center">
            <div className="ltr:ml-3 rtl:mr-3"> */}
        <Menu.Button className="flex rounded-3xl bg-[#384159] text-white px-7 py-3 text-xl font-medium shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none transition-colors duration-300 ease-in-out hover:text-white hover:bg-[#6e7ea2]">
          30 Days
          {/* <ChevronDownIcon
              className="-mr-1 h-5 w-5 text-white"
              aria-hidden="true"
            /> */}
        </Menu.Button>
        {/* </div>
          </div> */}
        {/* </div> */}

        <Transition
          as={React.Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1" role="none">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={UsageDropdownbtn(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-8 py-4 text-lg hover:bg-gray-400 hover:text-white hover:no-underline transition-colors duration-300"
                    )}
                    role="menuitem"
                  >
                    30 days
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={UsageDropdownbtn(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-8 py-4 text-lg hover:bg-gray-400 hover:text-white hover:no-underline transition-colors duration-300"
                    )}
                    role="menuitem"
                  >
                    3 months
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={UsageDropdownbtn(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-8 py-4 text-lg hover:bg-gray-400 hover:text-white hover:no-underline transition-colors duration-300"
                    )}
                    role="menuitem"
                  >
                    9 months
                  </a>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    );
  };
  // ------------------------------------------------------------- USAGE DROPDOWN END ----------------------------------------------------- //

  // ------------------------------------------------------------- ACTIVE VS INACTIVE DROPDOWN --------------------------------------------------------- //
  function ActiveInactiveDropdownbtn(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const ActiveInactiveDropdown = () => {
    return (
      <Menu as="div" className="relative inline-block text-left">
        {/* <div className="flex w-full"> */}
        {/* <div className="group flex items-center">
            <div className="ltr:ml-3 rtl:mr-3"> */}
        <Menu.Button className="flex rounded-3xl bg-[#384159] text-white px-7 py-3 text-xl font-medium shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none transition-colors duration-300 ease-in-out hover:text-white hover:bg-[#6e7ea2]">
          30 Days
          {/* <ChevronDownIcon
              className="-mr-1 h-5 w-5 text-white"
              aria-hidden="true"
            /> */}
        </Menu.Button>
        {/* </div>
          </div> */}
        {/* </div> */}

        <Transition
          as={React.Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1" role="none">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={ActiveInactiveDropdownbtn(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-8 py-4 text-lg hover:bg-gray-400 hover:text-white hover:no-underline transition-colors duration-300"
                    )}
                    role="menuitem"
                  >
                    30 days
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={ActiveInactiveDropdownbtn(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-8 py-4 text-lg hover:bg-gray-400 hover:text-white hover:no-underline transition-colors duration-300"
                    )}
                    role="menuitem"
                  >
                    3 months
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={ActiveInactiveDropdownbtn(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-8 py-4 text-lg hover:bg-gray-400 hover:text-white hover:no-underline transition-colors duration-300"
                    )}
                    role="menuitem"
                  >
                    9 months
                  </a>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    );
  };

  const DetailsSection = ({ statusData }) => {
    return (
      <div className="w-full mb-10">
        <div className=" justify-center">
          {/* ---------------------------- */}
          {statusData.map(({ name, value }, index) => (
            <div key={index} className="w-full">
              {/* ========== */}
              <div className="mx-10">
                <div className="grid grid-cols-3">
                  <div className="flex items-center justify-start">
                    {/* <SiBabylondotjs color="#E3B51A" /> */}
                    <SiContributorcovenant
                      color={name === "Active" ? "#E3B51A" : "#B18900"}
                    />
                    <span className="text-slate-950 ml-3">{name}</span>
                  </div>

                  <div className="flex items-center justify-center">
                    <span className="text-slate-950">{value}</span>
                  </div>

                  <div className="flex items-center justify-end">
                    <span className="text-gray-500">{` ${(
                      (value / (statusData[0].value + statusData[1].value)) *
                      100
                    ).toFixed(0)}%`}</span>
                  </div>
                </div>
              </div>
              {/* =============== */}
              {index === 0 && (
                <div className="my-3 border-t-2 border-gray-400 mx-8"></div>
              )}
            </div>
          ))}
          {/* ------------------------------- */}
        </div>
      </div>
    );
  };

  // ------------------------------------------------------------- ACTIVE VS INACTIVE DROPDOWN END ----------------------------------------------------- //

  // ============================================================= MAIN PAGE ============================================================== //
  return (
    <main className="flex min-h-screen bg-[#D9D9D9] flex-col gap-6 px-4 md:px-8 xl:px-10 py-10">
      <h1 className="text-5xl font-semibold ml-5">Dashboard</h1>

      {/* // -------------- OVERALL USAGE BUTTON --------------- // */}
      <div className="grid w-full gap-10 bg-[#384159] rounded-3xl pb-3">
        <GridItem>
          <div className="flex items-center text-white">
            <h1 className=" text-5xl font-semibold mt-6 ml-10">
              Overall Usage
            </h1>
            <span className="mt-10 ml-10 mr-10">2024</span>
          </div>

          <div className=" ml-auto mb-5">
            <div className="mr-12">
              <button
                onClick={handleToggleProduct1}
                //   className="bg-gray-400 text-gray-800 px-4 py-2 rounded-md mr-2"
                // >
                className={`${
                  ActiveUsers
                    ? "bg-transparent text-gray-100"
                    : "bg-[#556385] text-white"
                } px-6 py-2 rounded-3xl mr-2 transition-colors duration-300 ease-in-out hover:bg-gray-600 hover:text-white`}
              >
                {ActiveUsers ? "Last Year" : "Last Year"}
              </button>
              <button
                onClick={handleToggleProduct2}
                //   className="bg-gray-400 text-gray-800 px-4 py-2 rounded-md mr-12"
                // >
                className={`${
                  Inactive
                    ? "bg-transparent text-gray-100"
                    : "bg-[#556385] text-white"
                } px-6 py-2 rounded-3xl ml-5 mr-12 transition-colors duration-300 ease-in-out hover:bg-gray-600 hover:text-white`}
              >
                {Inactive ? "This Year" : "This Year"}
              </button>
            </div>
          </div>

          <OverallUsageChartbtn
            ActiveUsers={ActiveUsers}
            Inactive={Inactive}
            handleToggleProduct1={handleToggleProduct1}
            handleToggleProduct2={handleToggleProduct2}
          />
        </GridItem>
      </div>
      {/* // -------------- OVERALL USAGE BUTTON END --------------- // */}

      <div className="grid 2xl:grid-cols-3 w-full gap-x-32 gap-y-10">
        <div className="bg-white rounded-3xl pb-3">
          <GridItem>
            <div className="grid items-center w-full mt-5">
              <div className="flex">
                <span className="text-3xl ml-10 text-gray-500">Users</span>

                <div className="flex ml-auto mr-5">
                  <UsersDropdown />
                </div>
              </div>
              <span className="text-6xl ml-10 mt-3 font-medium">42,000</span>
            </div>
            <UsersChart />
          </GridItem>
        </div>

        <div className="bg-white rounded-3xl pb-3">
          <GridItem>
            <div className="grid items-center w-full mt-5">
              <div className="flex">
                <span className="text-3xl ml-10 text-gray-500">Usage</span>

                <div className="flex ml-auto mr-5">
                  <UsageDropdown />
                </div>
              </div>
              <span className="text-6xl ml-10 mt-3 font-medium">67,000</span>
            </div>
            <UsageChart />
          </GridItem>
        </div>

        <div className="bg-white rounded-3xl min-h-[330px]">
          <GridItem>
            <div className="grid items-center w-full mt-5">
              <div className="flex">
                <span className=" text-3xl ml-10 text-slate-950">
                  Active vs Inactive
                </span>
                <div className="flex ml-auto mr-5">
                  <ActiveInactiveDropdown />
                </div>
              </div>
            </div>

            <ActiveInactiveChart />

            <DetailsSection statusData={Status} />
          </GridItem>
        </div>
      </div>
    </main>
  );
  // ============================================================= MAIN PAGE END =========================================================== //
}

function GridItem({ title, children }) {
  return (
    <div className="flex flex-col items-start justify-center rounded-3xl h-[70vh] sm:h-[70vh] md:h-[50vh] xl:h-[43vh]">
      {/* <h1 className="text-2xl font-semibold text-white mb-4">{title}</h1> */}
      {children}
    </div>
  );
}
