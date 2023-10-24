import React from "react";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";
import { useRouter } from "next/router";
import { HomeIcon } from "lucide-react";
import Image from "next/image";

type SidebarProps = {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
};

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {

  const router = useRouter();

  const navigation = [
    { name: "Home", icon: HomeIcon, href: "/", current: router.pathname === "/" },
  ];

  const part1 = [
    {
      id: 1,
      name: "Section 1: Organisational Environment",
      href: "#",
      initial: "1",
      current: false,
    },
    {
      id: 2,
      name: "Section 2: Organisational Relationships",
      href: "#",
      initial: "2",
      current: false,
    },
    {
      id: 3,
      name: "Section 3: Organisational Challenges",
      href: "#",
      initial: "3",
      current: false,
    }
  ];

  const part2 = [
    {
      id: 1,
      name: "Section 1: Leadership",
      href: "#",
      initial: "1",
      current: false,
    },
    {
      id: 2,
      name: "Section 2: Customers",
      href: "#",
      initial: "2",
      current: false,
    },
    {
      id: 3,
      name: "Section 3: Strategy",
      href: "#",
      initial: "3",
      current: false,
    },
    {
      id: 4,
      name: "Section 4: People",
      href: "#",
      initial: "1",
      current: false,
    },
    {
      id: 5,
      name: "Section 5: Processes",
      href: "#",
      initial: "2",
      current: false,
    },
    {
      id: 6,
      name: "Section 6: Knowledge",
      href: "#",
      initial: "3",
      current: false,
    },
    {
      id: 7,
      name: "Section 7: Performance Indicators",
      href: "#",
      initial: "3",
      current: false,
    }
  ];
  return (
    <div>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={setSidebarOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button
                      type="button"
                      className="-m-2.5 p-2.5"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-4">
                  <div className="flex h-16 shrink-0 items-center">
                    <Image
                      className="h-8 w-auto"
                      src="/imcsLogo.png"
                      alt="Your Company"
                      width={36}
                      height={36}
                    />
                  </div>
                  <nav className="flex flex-1 flex-col">
                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                      <li>
                        <ul role="list" className="-mx-2 space-y-1">
                          {navigation.map((item) => (
                            <li key={item.name}>
                              <a
                                href={item.href}
                                className={cn(
                                  item.current
                                    ? "bg-indigo-700 text-white"
                                    : "text-indigo-200 hover:bg-indigo-700 hover:text-white",
                                  "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
                                )}
                              >
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li>
                      <div className="text-l font-semibold leading-6 text-indigo-200">
                      PART 1: Organisational Profile
                        </div>
                      </li>
                      <ul role="list" className="-mx-2 mt-2 space-y-1">
                          {part1.map((part) => (
                            <li key={part.name}>
                              <a
                                href={part.href}
                                className={cn(
                                  part.current
                                    ? "bg-indigo-700 text-white"
                                    : "text-indigo-200 hover:bg-indigo-700 hover:text-white",
                                  "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
                                )}
                              >
                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-[0.625rem] font-medium text-white">
                                  {part.initial}
                                </span>
                                <span className="truncate">{part.name}</span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      <li>
                    
                        <div className="text-l font-semibold leading-6 text-indigo-200">
                          PART 2: Organisational System Assessment
                        </div>
                        <ul role="list" className="-mx-2 mt-2 space-y-1">
                          {part2.map((part) => (
                            <li key={part.name}>
                              <a
                                href={part.href}
                                className={cn(
                                  part.current
                                    ? "bg-indigo-700 text-white"
                                    : "text-indigo-200 hover:bg-indigo-700 hover:text-white",
                                  "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
                                )}
                              >
                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-[0.625rem] font-medium text-white">
                                  {part.initial}
                                </span>
                                <span className="truncate">{part.name}</span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default Sidebar;
