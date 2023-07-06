import {
  Flex,
  useColorModeValue,
  Heading,
  Link as ChakraLink,
  Box,
  HStack,
  IconButton,
  useColorMode,
  Button,
  Show,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Hide,
  MenuDivider,
  MenuGroup,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
//import { useWallet } from "../../../hooks/useWallet";
import { IoWalletSharp as WalletOpenIcon } from "react-icons/io5";
import { FaWallet as WalletClosedIcon } from "react-icons/fa";
import { CgMenuGridO as MenuIcon } from "react-icons/cg";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { NAV_LINKS } from "../utils/NAV_LINKS";


const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [connected, toggleConnect] = useState(false);
  const router = useRouter();
  const [currAddress, updateAddress] = useState("0x");

  const backgroundColor = useColorModeValue("brand.400", "gray.700");
  const ColorModeChangerIcon = useColorModeValue(MoonIcon, SunIcon);
  const colorModeChangerButtonColor = useColorModeValue("gray", "brand");
  const { toggleColorMode } = useColorMode();
  //const { handleConnect, isConnected, progress } = useWallet();
  const [mounted, setMounted] = useState(false);

  return (
    <nav className="w-full bg-gray-800 shadow fixed">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <NextLink passHref href="/">
              <ChakraLink>
                <Heading size="lg" color="gray.50">
                  Naija NFT
                </Heading>
              </ChakraLink>
            </NextLink>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <Box marginLeft="auto">
              <HStack spacing="10" height="full" as="nav">
                {/* Show navlinks for wider screens */}
                <Show above="md">
                  {NAV_LINKS.map((navLink, index) => (
                    <NextLink key={index} passHref href={navLink.url}>
                      <ChakraLink
                        color="gray.50"
                        fontSize="lg"
                        fontWeight={700}
                      >
                        {navLink.name}
                      </ChakraLink>
                    </NextLink>
                  ))}
                  <IconButton
                    aria-label="Switch theme"
                    colorScheme={colorModeChangerButtonColor}
                    icon={<ColorModeChangerIcon />}
                    isRound
                    variant="outline"
                    onClick={toggleColorMode}
                  />
                  <Button
                    loadingText="Connecting"
                    //isLoading={progress}
                    colorScheme="brand"
                    aria-label="Connect your wallet"
                    display="flex"
                    gap="2"
                    //onClick={handleConnect}
                    width={{ base: "full", md: "fit-content" }}
                  >
                   
                  </Button>
                </Show>

                {/* Show menu for smaller screens */}
                <Hide above="md">
                  <Menu>
                    <MenuButton
                      as={IconButton}
                      aria-label="Navigation menu"
                      icon={<MenuIcon />}
                      isRound
                    />
                    <MenuList>
                      <MenuGroup title="Wallet">
                        <MenuItem
                          aria-label="Connect wallet"
                       
                          display="flex"
                          alignItems="center"
                          gap="2"
                          color="brand.500"
                        >
                         
                        </MenuItem>
                      </MenuGroup>
                      <MenuDivider />
                      <MenuGroup title="Links">
                        {NAV_LINKS.map((navLink, index) => (
                          <MenuItem key={index}>
                            <NextLink passHref href={navLink.url}>
                              <ChakraLink width="full">
                                {navLink.name}
                              </ChakraLink>
                            </NextLink>
                          </MenuItem>
                        ))}
                      </MenuGroup>
                      <MenuDivider />
                      <MenuGroup title="Settings">
                        <MenuItem
                          aria-label="Switch theme"
                          onClick={toggleColorMode}
                          display="flex"
                          alignItems="center"
                          gap="2"
                        >
                          Switch theme <ColorModeChangerIcon />
                        </MenuItem>
                      </MenuGroup>
                    </MenuList>
                  </Menu>
                </Hide>
              </HStack>
            </Box>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// import {
//   Flex,
//   useColorModeValue,
//   Heading,
//   Link as ChakraLink,
//   Box,
//   HStack,
//   IconButton,
//   useColorMode,
//   Button,
//   Show,
//   Menu,
//   MenuButton,
//   MenuList,
//   MenuItem,
//   Hide,
//   MenuDivider,
//   MenuGroup,
// } from "@chakra-ui/react";
// import NextLink from "next/link";
// import { MoonIcon, SunIcon } from "@chakra-ui/icons";
// //import { useWallet } from "../../../hooks/useWallet";
// import { IoWalletSharp as WalletOpenIcon } from "react-icons/io5";
// import { FaWallet as WalletClosedIcon } from "react-icons/fa";
// import { CgMenuGridO as MenuIcon } from "react-icons/cg";

// import { useEffect, useState } from "react";

// const NAV_LINKS = [
//   {
//     name: "Collections",
//     url: "/collections",
//   },
//   {
//     name: "Create",
//     url: "/create",
//   },
//   {
//     name: "Woofy",
//     url: "/woofy",
//   },
// ];

// const Navbar = () => {
//   const backgroundColor = useColorModeValue("brand.400", "gray.700");
//   const ColorModeChangerIcon = useColorModeValue(MoonIcon, SunIcon);
//   const colorModeChangerButtonColor = useColorModeValue("gray", "brand");
//   const { toggleColorMode } = useColorMode();
//   //const { handleConnect, isConnected, progress } = useWallet();
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);
//   return (
//     <Flex
//       background={backgroundColor}
//       width="full"
//       sticky
//       top={0}
//       left={0}
//       as="header"
//       minHeight="14"
//       shadow="lg"
//       paddingY="4"
//       paddingX="8"
//       alignItems="center"
//       zIndex={99999}
//     >
//       {/* App logo */}
//       <NextLink passHref href="/">
//         <ChakraLink>
//           <Heading size="lg" color="gray.50">
//             Bridge Head
//           </Heading>
//         </ChakraLink>
//       </NextLink>

//       {/* Nav links and menu */}
//       {mounted && (
//         <Box marginLeft="auto">
//           <HStack spacing="10" height="full" as="nav">
//             {/* Show navlinks for wider screens */}
//             <Show above="md">
//               {NAV_LINKS.map((navLink, index) => (
//                 <NextLink key={index} passHref href={navLink.url}>
//                   <ChakraLink color="gray.50" fontSize="lg" fontWeight={700}>
//                     {navLink.name}
//                   </ChakraLink>
//                 </NextLink>
//               ))}
//               <IconButton
//                 aria-label="Switch theme"
//                 colorScheme={colorModeChangerButtonColor}
//                 icon={<ColorModeChangerIcon />}
//                 isRound
//                 variant="outline"
//                 onClick={toggleColorMode}
//               />
//               {/* <Button
//                 loadingText="Connecting"
//                 isLoading={progress}
//                 colorScheme="brand"
//                 aria-label="Connect your wallet"
//                 display="flex"
//                 gap="2"
//                 onClick={handleConnect}
//                 width={{ base: "full", md: "fit-content" }}
//               >
//                 {isConnected ? (
//                   <>
//                     Connected <WalletOpenIcon size="20" />
//                   </>
//                 ) : (
//                   <>
//                     Connect <WalletClosedIcon size="20" />
//                   </>
//                 )}
//               </Button> */}
//             </Show>

//             {/* Show menu for smaller screens */}
//             <Hide above="md">
//               <Menu>
//                 <MenuButton
//                   as={IconButton}
//                   aria-label="Navigation menu"
//                   icon={<MenuIcon />}
//                   isRound
//                 />
//                 <MenuList>
//                   <MenuGroup title="Wallet">
//                     <MenuItem
//                       aria-label="Connect wallet"
//                       //onClick={handleConnect}
//                       display="flex"
//                       alignItems="center"
//                       gap="2"
//                       color="brand.500"
//                     >
//                       {/* {isConnected ? (
//                         <>
//                           Connected <WalletOpenIcon size="20" />
//                         </>
//                       ) : (
//                         <>
//                           Connect <WalletClosedIcon size="20" />
//                         </>
//                       )} */}
//                     </MenuItem>
//                   </MenuGroup>
//                   <MenuDivider />
//                   <MenuGroup title="Links">
//                     {NAV_LINKS.map((navLink, index) => (
//                       <MenuItem key={index}>
//                         <NextLink passHref href={navLink.url}>
//                           <ChakraLink width="full">{navLink.name}</ChakraLink>
//                         </NextLink>
//                       </MenuItem>
//                     ))}
//                   </MenuGroup>
//                   <MenuDivider />
//                   <MenuGroup title="Settings">
//                     <MenuItem
//                       aria-label="Switch theme"
//                       onClick={toggleColorMode}
//                       display="flex"
//                       alignItems="center"
//                       gap="2"
//                     >
//                       Switch theme <ColorModeChangerIcon />
//                     </MenuItem>
//                   </MenuGroup>
//                 </MenuList>
//               </Menu>
//             </Hide>
//           </HStack>
//         </Box>
//       )}
//     </Flex>
//   );
// }

// export default Navbar
