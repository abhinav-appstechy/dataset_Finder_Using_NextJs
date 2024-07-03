"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";

import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import { usePathname } from "next/navigation";

type Props = {};

const Header = (props: Props) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <svg
              width="250"
              height="63"
              viewBox="0 0 250 63"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_225_16)">
                <path
                  d="M41.1793 56.5449C40.1028 57.5841 39.0679 58.6048 38.0099 59.607C37.3406 60.3254 36.611 60.9852 35.8292 61.5792C32.5026 63.7961 28.8204 63.3897 25.9789 60.5631C22.6709 57.2715 19.369 53.9754 16.0733 50.6746C11.4531 46.056 6.83293 41.4882 2.27743 36.8557C0.0874697 34.6387 -0.531634 31.9784 0.457084 28.9994C0.869002 27.8422 1.55175 26.8002 2.44838 25.9603C4.47818 23.9435 6.50182 21.9206 8.51929 19.8915C13.543 14.8479 18.5743 9.80593 23.6134 4.76547C24.482 3.87408 25.406 2.98268 26.2931 2.11438C27.7203 0.733755 29.6361 -0.0261401 31.622 0.000686922C33.6079 0.027514 35.5024 0.838883 36.8918 2.25756L40.7081 6.09564C40.8374 6.22496 40.9529 6.3589 41.1193 6.5575C40.9391 6.74224 40.7866 6.91313 40.6249 7.07478C35.13 12.5525 29.6366 18.0348 24.1447 23.5217C22.5348 25.0252 21.4199 26.9822 20.9476 29.1333C20.2314 32.6943 20.9106 35.9689 23.4286 38.6339C26.5287 41.9223 29.7767 45.0722 32.9646 48.2729C35.6012 50.924 38.2424 53.5674 40.8883 56.2031C40.9529 56.2678 41.0038 56.3463 41.1793 56.5449ZM14.909 31.4981C14.9127 30.4981 14.5192 29.5375 13.8149 28.8274C13.1106 28.1173 12.1531 27.7157 11.1528 27.7108C10.1456 27.7108 9.17958 28.1108 8.46735 28.8228C7.75513 29.5348 7.35501 30.5004 7.35501 31.5073C7.35501 32.5142 7.75513 33.4799 8.46735 34.1918C9.17958 34.9038 10.1456 35.3038 11.1528 35.3038C11.65 35.3026 12.1421 35.203 12.6006 35.0107C13.0591 34.8184 13.475 34.5372 13.8242 34.1834C14.1734 33.8296 14.4491 33.4101 14.6353 32.9492C14.8215 32.4883 14.9145 31.9951 14.909 31.4981Z"
                  fill="#1274C6"
                />
                <path
                  d="M31.611 20.6258L43.5264 8.73749C43.8129 9.08388 44.0947 9.49494 44.4504 9.84134C49.8006 15.2082 55.1569 20.5689 60.5194 25.9234C61.4389 26.7905 62.1362 27.8662 62.5523 29.0594C63.0401 30.3785 63.1316 31.8113 62.8156 33.1816C62.4995 34.552 61.7898 35.8001 60.7735 36.7725C57.7011 39.9363 54.5501 43.0262 51.4315 46.1437L43.8498 53.7183C43.6973 53.8707 43.5356 54.0139 43.4525 54.0924C39.5068 50.1712 35.5982 46.2823 31.6618 42.3565C35.1546 42.1902 38.0515 40.8462 40.1768 38.0334C41.7487 35.9436 42.5158 33.358 42.3376 30.7494C42.1595 28.1408 41.048 25.6834 39.2065 23.8265C38.2135 22.8196 37.0314 22.0185 35.7279 21.4692C34.4245 20.92 33.0254 20.6334 31.611 20.6258Z"
                  fill="#0C3B70"
                />
                <path
                  d="M23.8028 31.475C23.8038 29.9493 24.2573 28.4581 25.1061 27.1901C25.9548 25.9221 27.1607 24.9342 28.5712 24.3514C29.9817 23.7686 31.5334 23.6171 33.03 23.916C34.5267 24.2148 35.901 24.9507 36.9793 26.0305C38.0575 27.1103 38.7912 28.4856 39.0874 29.9822C39.3837 31.4789 39.2294 33.0298 38.6438 34.4388C38.0583 35.8477 37.0679 37.0514 35.7979 37.8976C34.528 38.7438 33.0355 39.1945 31.5093 39.1927C30.4951 39.1964 29.4902 38.9992 28.5526 38.6125C27.6151 38.2257 26.7634 37.6572 26.0469 36.9396C25.3304 36.222 24.7632 35.3697 24.378 34.4317C23.9928 33.4938 23.7973 32.4889 23.8028 31.475Z"
                  fill="#FB941C"
                />
              </g>
              <path
                d="M77.2406 21.068C78.967 21.068 80.5275 21.4545 81.9221 22.2275C83.3168 22.9938 84.4135 24.055 85.2124 25.4111C86.0045 26.7673 86.4006 28.2862 86.4006 29.9679C86.4006 31.6428 85.9977 33.1583 85.1921 34.5145C84.3932 35.8774 83.2897 36.942 81.8815 37.7082C80.4801 38.4813 78.9061 38.8678 77.1594 38.8678H70V21.068H77.2406ZM77.2914 36.6504C78.5236 36.6504 79.644 36.3622 80.6528 35.7859C81.6615 35.2095 82.457 34.4127 83.0392 33.3956C83.6214 32.3785 83.9126 31.2461 83.9126 29.9984C83.9126 28.7236 83.6181 27.5776 83.0291 26.5605C82.4333 25.5434 81.6243 24.7432 80.602 24.1601C79.5797 23.5701 78.4423 23.2752 77.1898 23.2752H72.4372V36.6504H77.2914ZM100.191 38.8678H97.8556V36.9861C96.8536 38.3084 95.2863 38.9695 93.1537 38.9695C92.2262 38.9695 91.4104 38.7898 90.7063 38.4304C90.0023 38.0778 89.4607 37.5862 89.0815 36.9556C88.7024 36.3317 88.5128 35.6299 88.5128 34.8501C88.5128 33.6431 88.9563 32.6904 89.8432 31.992C90.73 31.2868 91.969 30.924 93.5599 30.9036H97.8251V30.273C97.8251 29.3237 97.534 28.5914 96.9518 28.076C96.3695 27.5539 95.5199 27.2928 94.4028 27.2928C93.0488 27.2928 91.6677 27.7777 90.2595 28.7473L89.2745 27.1199C90.2358 26.4893 91.1261 26.035 91.9453 25.757C92.7712 25.4789 93.7495 25.3399 94.8801 25.3399C96.5591 25.3399 97.8556 25.7502 98.7695 26.5707C99.6835 27.3911 100.147 28.5405 100.161 30.0187L100.191 38.8678ZM93.6412 37.0064C94.7379 37.0064 95.6722 36.742 96.444 36.2131C97.2158 35.6774 97.6762 34.9688 97.8251 34.0873V32.7345H93.8951C92.8254 32.7345 92.0333 32.8972 91.5188 33.2227C91.0042 33.5414 90.747 34.05 90.747 34.7484C90.747 35.44 91.0076 35.9893 91.5289 36.3961C92.057 36.803 92.7611 37.0064 93.6412 37.0064ZM110.976 36.1419L111.616 37.9727C110.58 38.6372 109.531 38.9695 108.468 38.9695C107.398 38.9695 106.535 38.6508 105.878 38.0134C105.215 37.376 104.883 36.4131 104.883 35.1247V27.6793H102.984V25.8688H104.883V22.2682H107.269V25.8688H111.382V27.6793H107.269V34.6975C107.269 35.4434 107.405 35.9757 107.676 36.2944C107.946 36.6199 108.353 36.7827 108.894 36.7827C109.537 36.7827 110.231 36.5691 110.976 36.1419ZM125.021 38.8678H122.685V36.9861C121.683 38.3084 120.116 38.9695 117.983 38.9695C117.056 38.9695 116.24 38.7898 115.536 38.4304C114.832 38.0778 114.29 37.5862 113.911 36.9556C113.532 36.3317 113.342 35.6299 113.342 34.8501C113.342 33.6431 113.786 32.6904 114.672 31.992C115.559 31.2868 116.798 30.924 118.389 30.9036H122.654V30.273C122.654 29.3237 122.363 28.5914 121.781 28.076C121.199 27.5539 120.349 27.2928 119.232 27.2928C117.878 27.2928 116.497 27.7777 115.089 28.7473L114.104 27.1199C115.065 26.4893 115.955 26.035 116.775 25.757C117.601 25.4789 118.579 25.3399 119.709 25.3399C121.388 25.3399 122.685 25.7502 123.599 26.5707C124.513 27.3911 124.977 28.5405 124.99 30.0187L125.021 38.8678ZM118.471 37.0064C119.567 37.0064 120.502 36.742 121.273 36.2131C122.045 35.6774 122.506 34.9688 122.654 34.0873V32.7345H118.724C117.655 32.7345 116.863 32.8972 116.348 33.2227C115.834 33.5414 115.576 34.05 115.576 34.7484C115.576 35.44 115.837 35.9893 116.358 36.3961C116.886 36.803 117.59 37.0064 118.471 37.0064ZM136.567 28.3913C136.012 28.0523 135.399 27.781 134.729 27.5776C134.059 27.3742 133.419 27.2725 132.81 27.2725C132.099 27.2725 131.527 27.4047 131.093 27.6692C130.667 27.9268 130.454 28.3269 130.454 28.8694C130.454 29.4118 130.694 29.8255 131.175 30.1103C131.655 30.3883 132.386 30.6697 133.368 30.9545C134.302 31.2257 135.064 31.497 135.653 31.7682C136.249 32.0394 136.753 32.4395 137.166 32.9684C137.579 33.4905 137.786 34.1856 137.786 35.0535C137.786 36.3216 137.308 37.2878 136.354 37.9524C135.399 38.6169 134.211 38.9491 132.789 38.9491C131.787 38.9491 130.816 38.7864 129.875 38.4609C128.94 38.1354 128.152 37.6777 127.509 37.0878L128.392 35.3587C128.954 35.8672 129.645 36.2741 130.464 36.5792C131.283 36.8844 132.082 37.0369 132.86 37.0369C133.639 37.0369 134.265 36.8912 134.739 36.5996C135.213 36.3148 135.45 35.874 135.45 35.2773C135.45 34.6738 135.199 34.2161 134.698 33.9042C134.204 33.599 133.449 33.2939 132.434 32.9888C131.533 32.7379 130.799 32.4802 130.23 32.2157C129.668 31.9513 129.188 31.5648 128.788 31.0562C128.389 30.5476 128.189 29.8865 128.189 29.0728C128.189 27.8183 128.646 26.8792 129.56 26.2554C130.474 25.6247 131.618 25.3094 132.992 25.3094C133.805 25.3094 134.604 25.4247 135.389 25.6552C136.174 25.8858 136.855 26.1943 137.43 26.5808L136.567 28.3913ZM146.296 25.3399C148.374 25.3399 149.948 25.9536 151.018 27.1809C152.081 28.4083 152.612 30.1171 152.612 32.3073C152.612 32.6463 152.605 32.9006 152.592 33.0701H141.98C142.162 34.2703 142.663 35.2264 143.483 35.9384C144.309 36.6504 145.321 37.0064 146.519 37.0064C147.318 37.0064 148.059 36.864 148.743 36.5792C149.427 36.2877 150.023 35.8808 150.53 35.3587L151.83 36.7013C151.167 37.4201 150.371 37.9727 149.444 38.3592C148.509 38.7525 147.477 38.9491 146.346 38.9491C145.026 38.9491 143.852 38.6643 142.823 38.0948C141.8 37.5252 141.005 36.7216 140.436 35.6842C139.874 34.6535 139.593 33.477 139.593 32.1547C139.593 30.8324 139.874 29.6594 140.436 28.6354C141.005 27.6047 141.797 26.7978 142.812 26.2147C143.828 25.6315 144.989 25.3399 146.296 25.3399ZM141.949 31.2393H150.48C150.412 30.0187 150.006 29.0559 149.261 28.3506C148.516 27.6454 147.535 27.2928 146.316 27.2928C145.131 27.2928 144.146 27.6488 143.361 28.3608C142.575 29.0728 142.105 30.0323 141.949 31.2393ZM162.412 36.1419L163.052 37.9727C162.016 38.6372 160.966 38.9695 159.904 38.9695C158.834 38.9695 157.971 38.6508 157.314 38.0134C156.651 37.376 156.319 36.4131 156.319 35.1247V27.6793H154.42V25.8688H156.319V22.2682H158.705V25.8688H162.818V27.6793H158.705V34.6975C158.705 35.4434 158.841 35.9757 159.111 36.2944C159.382 36.6199 159.788 36.7827 160.33 36.7827C160.973 36.7827 161.667 36.5691 162.412 36.1419ZM172.801 38.8678V21.068H184.377L184.347 23.2752H175.238V29.1237H183.433V31.341H175.238V38.8678H172.801ZM186.987 38.8678V25.4111H189.353V38.8678H186.987ZM188.155 20.0509C188.582 20.0509 188.934 20.1966 189.211 20.4882C189.489 20.773 189.628 21.1358 189.628 21.5766C189.628 22.0173 189.489 22.3801 189.211 22.6649C188.934 22.9565 188.582 23.1022 188.155 23.1022C187.735 23.1022 187.383 22.9565 187.099 22.6649C186.821 22.3801 186.683 22.0173 186.683 21.5766C186.683 21.1358 186.821 20.773 187.099 20.4882C187.383 20.1966 187.735 20.0509 188.155 20.0509ZM201.408 25.3399C202.978 25.3399 204.214 25.801 205.114 26.7232C206.015 27.6454 206.465 28.9202 206.465 30.5476V38.8678H204.099V31.1884C204.099 30.056 203.781 29.1711 203.144 28.5337C202.515 27.8963 201.641 27.5776 200.524 27.5776C199.319 27.5912 198.341 27.9777 197.589 28.7372C196.838 29.4898 196.411 30.4663 196.31 31.6665V38.8678H193.944V25.4111H196.31V28.2591C197.203 26.3469 198.903 25.3738 201.408 25.3399ZM220.834 20H223.19V38.8678H220.834V36.1927C220.327 37.0946 219.643 37.7862 218.783 38.2677C217.93 38.7559 216.935 39 215.797 39C214.531 39 213.411 38.705 212.436 38.1151C211.461 37.5319 210.706 36.7182 210.172 35.674C209.623 34.6365 209.349 33.4465 209.349 32.1039C209.349 30.7816 209.623 29.6085 210.172 28.5846C210.706 27.5539 211.461 26.7504 212.436 26.174C213.411 25.5976 214.525 25.3094 215.777 25.3094C216.928 25.3094 217.937 25.5468 218.803 26.0214C219.663 26.4961 220.34 27.1843 220.834 28.0862V20ZM216.285 36.9556C217.165 36.9556 217.947 36.7521 218.631 36.3453C219.321 35.9384 219.86 35.3722 220.245 34.6467C220.638 33.9143 220.834 33.0905 220.834 32.1751C220.834 31.2461 220.638 30.4154 220.245 29.6831C219.86 28.9575 219.321 28.3913 218.631 27.9845C217.947 27.5776 217.165 27.3742 216.285 27.3742C215.405 27.3742 214.623 27.581 213.939 27.9946C213.249 28.4083 212.71 28.9813 212.324 29.7136C211.932 30.4392 211.735 31.2596 211.735 32.1751C211.735 33.0905 211.932 33.9143 212.324 34.6467C212.71 35.3722 213.249 35.9384 213.939 36.3453C214.623 36.7521 215.405 36.9556 216.285 36.9556ZM233.315 25.3399C235.4 25.3399 236.974 25.9536 238.037 27.1809C239.107 28.4083 239.642 30.1171 239.642 32.3073C239.642 32.6463 239.635 32.9006 239.621 33.0701H228.999C229.189 34.2703 229.693 35.2264 230.512 35.9384C231.338 36.6504 232.35 37.0064 233.549 37.0064C234.341 37.0064 235.082 36.864 235.773 36.5792C236.456 36.2877 237.052 35.8808 237.56 35.3587L238.86 36.7013C238.196 37.4201 237.401 37.9727 236.473 38.3592C235.539 38.7525 234.507 38.9491 233.376 38.9491C232.056 38.9491 230.881 38.6643 229.852 38.0948C228.83 37.5252 228.034 36.7216 227.466 35.6842C226.897 34.6535 226.613 33.477 226.613 32.1547C226.613 30.8324 226.897 29.6594 227.466 28.6354C228.034 27.6047 228.827 26.7978 229.842 26.2147C230.858 25.6315 232.015 25.3399 233.315 25.3399ZM228.979 31.2393H237.509C237.441 30.0187 237.035 29.0559 236.291 28.3506C235.546 27.6454 234.564 27.2928 233.346 27.2928C232.161 27.2928 231.176 27.6488 230.39 28.3608C229.605 29.0728 229.135 30.0323 228.979 31.2393ZM245.227 28.31C245.667 27.3471 246.293 26.6147 247.106 26.113C247.918 25.6112 248.883 25.3535 250 25.3399V27.6285C248.626 27.5742 247.515 27.9302 246.669 28.6965C245.823 29.4559 245.342 30.4798 245.227 31.7682V38.8678H242.861V25.4111H245.227V28.31Z"
                fill="#333333"
              />
              <defs>
                <clipPath id="clip0_225_16">
                  <rect width="63" height="63" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
        <div className="flex lg:hidden z-[9999]">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12 z-50">
          <Link
            href="/"
            className={`${
              pathname === "/" ? "text-[#1974c6]" : "text-gray-900"
            } text-sm font-semibold leading-6 cursor-pointer`}
          >
            Home
          </Link>
          <Link
            href="/aboutus"
            className={`${
              pathname === "/aboutus" ? "text-[#1974c6]" : "text-gray-900"
            } text-sm font-semibold leading-6 cursor-pointer`}
          >
            About Us
          </Link>
          <Link
            href="/contactus"
            className={`${
              pathname === "/contactus" ? "text-[#1974c6]" : "text-gray-900"
            } text-sm font-semibold leading-6 cursor-pointer`}
          >
            Contact Us
          </Link>
        </PopoverGroup>
      </nav>
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-[9999] w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root z-50">
            <div className="-my-6 divide-y divide-gray-500/10 ">
              <div className="space-y-2 py-6">
                <Link
                  href="/"
                  className={`${
                    pathname === "/" ? "text-[#1974c6]" : "text-gray-900"
                  } -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7  hover:bg-gray-50 cursor-pointer`}
                >
                  Home
                </Link>
                <Link
                  href="/aboutus"
                  className={`${
                    pathname === "/aboutus" ? "text-[#1974c6]" : "text-gray-900"
                  } -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7  hover:bg-gray-50 cursor-pointer`}
                >
                  About Us
                </Link>
                <Link
                  href="/contactus"
                  className={`${
                    pathname === "/contactus"
                      ? "text-[#1974c6]"
                      : "text-gray-900"
                  } -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7  hover:bg-gray-50 cursor-pointer`}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Header;
