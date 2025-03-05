"use client";
import menuImage from "../../../public/list.svg";
import Image from "next/image";
import { Fragment } from 'react';
import { Menu, MenuButton, MenuItems, MenuItem, Transition } from '@headlessui/react';

const Header = () => {
  return (
    <header>
      <nav className={"flex justify-end"}>
        <Menu>
          <MenuButton>
            <Image src={menuImage} alt={"menu icon"} width={25} height={25}/>
          </MenuButton>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <MenuItems className={"absolute mt-4 flex flex-col w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none z-10"}>
              <MenuItem>
                {({ active }) => (
                  <a
                    className={`${active && 'bg-blue-500'} no-underline`}
                    href="#projects"
                  >
              Projects
                  </a>
                )}
              </MenuItem>
              <MenuItem>
                {({ active }) => (
                  <a
                    className={`${active && 'bg-blue-500'} no-underline`}
                    href="#contact"
                  >
              Contact
                  </a>
                )}
              </MenuItem>
            </MenuItems>
          </Transition>
        </Menu>
      </nav>
    </header>
  );
};

export default Header;