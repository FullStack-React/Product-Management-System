// components/Header.tsx
import type React from 'react';
import { useState, useRef, useEffect } from 'react';
import SearchDropDown from './searchDropDown';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [total, setTotal] = useState('0.00');

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [filter, setFilter] = useState(false);

  const openSearchDropDown = () => {
    setIsSearchOpen(true);
    setFilter(true);
  };

  const closeSearchDropDown = () => {
    setIsSearchOpen(false);
    setFilter(false);
  };

  const signStatus = 'Sign In';

  return (
    <header className="bg-gray-800 text-white w-full md:h-16 h-[121px] flex items-center">
      <div className=" flex justify-between items-center container mx-auto">
        {/* filter shen search box and cart popup open */}
        {filter && (
          <div
            className="fixed top-0  left-0 w-full h-full ] bg-[#00000099] z-10"
            onClick={closeSearchDropDown}
          ></div>
        )}

        {/* name and box */}
        <div className="md:flex-row mx-auto md:m-0 z-30 justify-center flex flex-col md:justify-between md:space-x-16 ">
          {/* company name */}
          <div className="hidden md:flex items-end">
            <div className="font-bold text-[28px] ">Management</div>
            <div className="after:content-['Chuwa'] after:text-xs after:ml-2 after: mb-1 after: font-bold">
              {' '}
            </div>
          </div>
          {/* phone size */}
          <div className="flex justify-between md:hidden mb-6">
            <svg
              width="58"
              height="18"
              viewBox="0 0 58 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.572976 0.272727H4.93448L9.54102 11.5114H9.73704L14.3436 0.272727H18.7051V17H15.2747V6.11257H15.1358L10.807 16.9183H8.47106L4.14222 6.07173H4.00337V17H0.572976V0.272727ZM27.9189 11.8008H26.208C26.1768 11.5794 26.113 11.3828 26.0166 11.2109C25.9202 11.0365 25.7965 10.888 25.6455 10.7656C25.4945 10.6432 25.32 10.5495 25.1221 10.4844C24.9268 10.4193 24.7145 10.3867 24.4854 10.3867C24.0713 10.3867 23.7106 10.4896 23.4033 10.6953C23.096 10.8984 22.8577 11.1953 22.6885 11.5859C22.5192 11.974 22.4346 12.4453 22.4346 13C22.4346 13.5703 22.5192 14.0495 22.6885 14.4375C22.8604 14.8255 23.0999 15.1185 23.4072 15.3164C23.7145 15.5143 24.07 15.6133 24.4736 15.6133C24.7002 15.6133 24.9098 15.5833 25.1025 15.5234C25.2979 15.4635 25.471 15.3763 25.6221 15.2617C25.7731 15.1445 25.8981 15.0026 25.9971 14.8359C26.0986 14.6693 26.1689 14.4792 26.208 14.2656L27.9189 14.2734C27.8747 14.6406 27.764 14.9948 27.5869 15.3359C27.4124 15.6745 27.1768 15.9779 26.8799 16.2461C26.5856 16.5117 26.234 16.7227 25.8252 16.8789C25.4189 17.0326 24.9593 17.1094 24.4463 17.1094C23.7327 17.1094 23.0947 16.9479 22.5322 16.625C21.9723 16.3021 21.5296 15.8346 21.2041 15.2227C20.8812 14.6107 20.7197 13.8698 20.7197 13C20.7197 12.1276 20.8838 11.3854 21.2119 10.7734C21.54 10.1615 21.9854 9.69531 22.5479 9.375C23.1104 9.05208 23.7432 8.89062 24.4463 8.89062C24.9098 8.89062 25.3395 8.95573 25.7354 9.08594C26.1338 9.21615 26.4867 9.40625 26.7939 9.65625C27.1012 9.90365 27.3512 10.207 27.5439 10.5664C27.7393 10.9258 27.8643 11.3372 27.9189 11.8008ZM30.7646 13.5313V17H29.1006V9H30.7178V12.0586H30.7881C30.9235 11.7044 31.1423 11.4271 31.4443 11.2266C31.7464 11.0234 32.1253 10.9219 32.5811 10.9219C32.9977 10.9219 33.361 11.013 33.6709 11.1953C33.9834 11.375 34.2256 11.6341 34.3975 11.9727C34.5719 12.3086 34.6579 12.7109 34.6553 13.1797V17H32.9912V13.4766C32.9938 13.1068 32.9001 12.819 32.71 12.6133C32.5225 12.4076 32.2594 12.3047 31.9209 12.3047C31.6943 12.3047 31.4938 12.3529 31.3193 12.4492C31.1475 12.5456 31.012 12.6862 30.9131 12.8711C30.8167 13.0534 30.7673 13.2734 30.7646 13.5313ZM39.8125 14.4453V11H41.4766V17H39.8789V15.9102H39.8164C39.681 16.2617 39.4557 16.5443 39.1406 16.7578C38.8281 16.9714 38.4466 17.0781 37.9961 17.0781C37.5951 17.0781 37.2422 16.987 36.9375 16.8047C36.6328 16.6224 36.3945 16.3633 36.2227 16.0273C36.0534 15.6914 35.9674 15.2891 35.9648 14.8203V11H37.6289V14.5234C37.6315 14.8776 37.7266 15.1576 37.9141 15.3633C38.1016 15.569 38.3529 15.6719 38.668 15.6719C38.8685 15.6719 39.056 15.6263 39.2305 15.5352C39.4049 15.4414 39.5456 15.3034 39.6523 15.1211C39.7617 14.9388 39.8151 14.7135 39.8125 14.4453ZM43.9912 17L42.3584 11H44.042L44.9717 15.0312H45.0264L45.9951 11H47.6475L48.6318 15.0078H48.6826L49.5967 11H51.2764L49.6475 17H47.8857L46.8545 13.2266H46.7803L45.749 17H43.9912ZM53.875 17.1133C53.4922 17.1133 53.151 17.0469 52.8516 16.9141C52.5521 16.7786 52.3151 16.5794 52.1406 16.3164C51.9688 16.0508 51.8828 15.7201 51.8828 15.3242C51.8828 14.9909 51.944 14.7109 52.0664 14.4844C52.1888 14.2578 52.3555 14.0755 52.5664 13.9375C52.7773 13.7995 53.0169 13.6953 53.2852 13.625C53.556 13.5547 53.8398 13.5052 54.1367 13.4766C54.4857 13.4401 54.7669 13.4062 54.9805 13.375C55.194 13.3411 55.349 13.2917 55.4453 13.2266C55.5417 13.1615 55.5898 13.0651 55.5898 12.9375V12.9141C55.5898 12.6667 55.5117 12.4753 55.3555 12.3398C55.2018 12.2044 54.9831 12.1367 54.6992 12.1367C54.3997 12.1367 54.1615 12.2031 53.9844 12.3359C53.8073 12.4661 53.6901 12.6302 53.6328 12.8281L52.0938 12.7031C52.1719 12.3385 52.3255 12.0234 52.5547 11.7578C52.7839 11.4896 53.0794 11.2839 53.4414 11.1406C53.806 10.9948 54.2279 10.9219 54.707 10.9219C55.0404 10.9219 55.3594 10.9609 55.6641 11.0391C55.9714 11.1172 56.2435 11.2383 56.4805 11.4023C56.7201 11.5664 56.9089 11.7773 57.0469 12.0352C57.1849 12.2904 57.2539 12.5964 57.2539 12.9531V17H55.6758V16.168H55.6289C55.5326 16.3555 55.4036 16.5208 55.2422 16.6641C55.0807 16.8047 54.8867 16.9154 54.6602 16.9961C54.4336 17.0742 54.1719 17.1133 53.875 17.1133ZM54.3516 15.9648C54.5964 15.9648 54.8125 15.9167 55 15.8203C55.1875 15.7214 55.3346 15.5885 55.4414 15.4219C55.5482 15.2552 55.6016 15.0664 55.6016 14.8555V14.2188C55.5495 14.2526 55.4779 14.2839 55.3867 14.3125C55.2982 14.3385 55.1979 14.3633 55.0859 14.3867C54.974 14.4076 54.862 14.4271 54.75 14.4453C54.638 14.4609 54.5365 14.4753 54.4453 14.4883C54.25 14.5169 54.0794 14.5625 53.9336 14.625C53.7878 14.6875 53.6745 14.7721 53.5938 14.8789C53.513 14.9831 53.4727 15.1133 53.4727 15.2695C53.4727 15.4961 53.5547 15.6693 53.7188 15.7891C53.8854 15.9062 54.0964 15.9648 54.3516 15.9648Z"
                fill="white"
              />
            </svg>

            <div className="flex space-x-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_21114_127)">
                  <path
                    d="M16.5 22.5H15V18.75C14.9988 17.7558 14.6033 16.8027 13.9003 16.0997C13.1973 15.3967 12.2442 15.0012 11.25 15H6.75C5.7558 15.0012 4.80267 15.3967 4.09966 16.0997C3.39666 16.8027 3.00119 17.7558 3 18.75V22.5H1.5V18.75C1.50159 17.3581 2.05522 16.0237 3.03944 15.0394C4.02367 14.0552 5.3581 13.5016 6.75 13.5H11.25C12.6419 13.5016 13.9763 14.0552 14.9606 15.0394C15.9448 16.0237 16.4984 17.3581 16.5 18.75V22.5Z"
                    fill="white"
                  />
                  <path
                    d="M9 3C9.74168 3 10.4667 3.21993 11.0834 3.63199C11.7001 4.04404 12.1807 4.62971 12.4646 5.31494C12.7484 6.00016 12.8226 6.75416 12.6779 7.48159C12.5333 8.20902 12.1761 8.8772 11.6517 9.40165C11.1272 9.9261 10.459 10.2833 9.73159 10.4279C9.00416 10.5726 8.25016 10.4984 7.56494 10.2145C6.87972 9.93072 6.29405 9.45007 5.88199 8.83339C5.46994 8.2167 5.25 7.49168 5.25 6.75C5.25 5.75544 5.64509 4.80161 6.34835 4.09835C7.05161 3.39509 8.00544 3 9 3ZM9 1.5C7.96165 1.5 6.94662 1.80791 6.08326 2.38478C5.2199 2.96166 4.54699 3.7816 4.14963 4.74091C3.75227 5.70022 3.64831 6.75582 3.85088 7.77422C4.05345 8.79262 4.55347 9.72808 5.28769 10.4623C6.02192 11.1965 6.95738 11.6966 7.97578 11.8991C8.99418 12.1017 10.0498 11.9977 11.0091 11.6004C11.9684 11.203 12.7883 10.5301 13.3652 9.66674C13.9421 8.80339 14.25 7.78835 14.25 6.75C14.25 5.35761 13.6969 4.02226 12.7123 3.03769C11.7277 2.05312 10.3924 1.5 9 1.5Z"
                    fill="white"
                  />
                  <path
                    d="M17.5 14.5L19.2523 17.8L23 18.2554L20.25 20.7337L20.8 24.4L17.5 22.3375L14.2 24.4L14.75 20.7337L12 18.2554L15.85 17.8L17.5 14.5Z"
                    fill="#FCE944"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_21114_127">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <div className="flex text-[10px] space-x-1.5 items-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 22.5C8.32843 22.5 9 21.8284 9 21C9 20.1716 8.32843 19.5 7.5 19.5C6.67157 19.5 6 20.1716 6 21C6 21.8284 6.67157 22.5 7.5 22.5Z"
                    fill="#F9FAFB"
                  />
                  <path
                    d="M18 22.5C18.8284 22.5 19.5 21.8284 19.5 21C19.5 20.1716 18.8284 19.5 18 19.5C17.1716 19.5 16.5 20.1716 16.5 21C16.5 21.8284 17.1716 22.5 18 22.5Z"
                    fill="#F9FAFB"
                  />
                  <path
                    d="M21 5.25003H4.365L3.75 2.10003C3.71494 1.92807 3.62068 1.77386 3.48364 1.66423C3.3466 1.5546 3.17546 1.49649 3 1.50003H0V3.00003H2.385L5.25 17.4C5.28506 17.572 5.37932 17.7262 5.51636 17.8358C5.6534 17.9455 5.82454 18.0036 6 18H19.5V16.5H6.615L6 13.5H19.5C19.6734 13.5043 19.8429 13.4483 19.9796 13.3416C20.1163 13.235 20.2119 13.0842 20.25 12.915L21.75 6.16503C21.7751 6.05375 21.7745 5.9382 21.7483 5.82718C21.722 5.71616 21.6708 5.61259 21.5985 5.52436C21.5261 5.43613 21.4347 5.36556 21.3309 5.31802C21.2272 5.27048 21.114 5.24723 21 5.25003ZM18.9 12H5.715L4.665 6.75003H20.0625L18.9 12Z"
                    fill="#F9FAFB"
                  />
                </svg>

                <div className="font-semibold">${total}</div>
              </div>
            </div>
          </div>

          {/* search box */}

          <div className="relative flex items-center">
            <div>
              <input
                type="text"
                placeholder="Search"
                onFocus={openSearchDropDown}
                // onChange={(e) => setSearchTerm(e.target.value)}
                className="text-gray-800 px-2 py-3 md:w-[528px] w-[326px] md:h-[48px] h-[46px] border border-gray-500 rounded focus:outline-none pr-8"
              />

              {isSearchOpen && <SearchDropDown />}
            </div>

            <div className="absolute right-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.3187 20.0273L15.232 13.9406C16.1766 12.7195 16.6875 11.2266 16.6875 9.65625C16.6875 7.77656 15.9539 6.01406 14.6273 4.68516C13.3008 3.35625 11.5336 2.625 9.65625 2.625C7.77891 2.625 6.01172 3.35859 4.68516 4.68516C3.35625 6.01172 2.625 7.77656 2.625 9.65625C2.625 11.5336 3.35859 13.3008 4.68516 14.6273C6.01172 15.9562 7.77656 16.6875 9.65625 16.6875C11.2266 16.6875 12.7172 16.1766 13.9383 15.2344L20.025 21.3187C20.0428 21.3366 20.064 21.3508 20.0874 21.3604C20.1107 21.3701 20.1357 21.3751 20.1609 21.3751C20.1862 21.3751 20.2112 21.3701 20.2345 21.3604C20.2578 21.3508 20.279 21.3366 20.2969 21.3187L21.3187 20.2992C21.3366 20.2814 21.3508 20.2602 21.3604 20.2369C21.3701 20.2135 21.3751 20.1885 21.3751 20.1633C21.3751 20.138 21.3701 20.113 21.3604 20.0897C21.3508 20.0664 21.3366 20.0452 21.3187 20.0273ZM13.3688 13.3688C12.375 14.3602 11.0578 14.9062 9.65625 14.9062C8.25469 14.9062 6.9375 14.3602 5.94375 13.3688C4.95234 12.375 4.40625 11.0578 4.40625 9.65625C4.40625 8.25469 4.95234 6.93516 5.94375 5.94375C6.9375 4.95234 8.25469 4.40625 9.65625 4.40625C11.0578 4.40625 12.3773 4.95 13.3688 5.94375C14.3602 6.9375 14.9062 8.25469 14.9062 9.65625C14.9062 11.0578 14.3602 12.3773 13.3688 13.3688Z"
                  fill="#979797"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* user profile  & cart */}
        <div className="hidden md:flex space-x-10 z-30">
          <div className="flex items-center  space-x-3">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.625 28.125H18.75V23.4375C18.7485 22.1948 18.2542 21.0033 17.3754 20.1246C16.4967 19.2458 15.3052 18.7515 14.0625 18.75H8.4375C7.19475 18.7515 6.00334 19.2458 5.12458 20.1246C4.24583 21.0033 3.75149 22.1948 3.75 23.4375V28.125H1.875V23.4375C1.87699 21.6976 2.56903 20.0296 3.7993 18.7993C5.02958 17.569 6.69763 16.877 8.4375 16.875H14.0625C15.8024 16.877 17.4704 17.569 18.7007 18.7993C19.931 20.0296 20.623 21.6976 20.625 23.4375V28.125Z"
                fill="white"
              />
              <path
                d="M11.25 3.75C12.1771 3.75 13.0834 4.02492 13.8542 4.53999C14.6251 5.05506 15.2259 5.78714 15.5807 6.64367C15.9355 7.5002 16.0283 8.4427 15.8474 9.35199C15.6666 10.2613 15.2201 11.0965 14.5646 11.7521C13.909 12.4076 13.0738 12.8541 12.1645 13.0349C11.2552 13.2158 10.3127 13.123 9.45618 12.7682C8.59965 12.4134 7.86756 11.8126 7.35249 11.0417C6.83742 10.2709 6.5625 9.3646 6.5625 8.4375C6.5625 7.1943 7.05636 6.00201 7.93544 5.12294C8.81452 4.24386 10.0068 3.75 11.25 3.75ZM11.25 1.875C9.95206 1.875 8.68327 2.25988 7.60407 2.98098C6.52488 3.70208 5.68374 4.727 5.18704 5.92614C4.69034 7.12528 4.56038 8.44478 4.8136 9.71778C5.06682 10.9908 5.69183 12.1601 6.60961 13.0779C7.5274 13.9957 8.69672 14.6207 9.96972 14.8739C11.2427 15.1271 12.5622 14.9972 13.7614 14.5005C14.9605 14.0038 15.9854 13.1626 16.7065 12.0834C17.4276 11.0042 17.8125 9.73544 17.8125 8.4375C17.8125 6.69702 17.1211 5.02782 15.8904 3.79711C14.6597 2.5664 12.9905 1.875 11.25 1.875Z"
                fill="white"
              />
              <path
                d="M21.75 17.375L23.9802 21.575L28.75 22.1546L25.25 25.3088L25.95 29.975L21.75 27.35L17.55 29.975L18.25 25.3088L14.75 22.1546L19.65 21.575L21.75 17.375Z"
                fill="#FCE944"
              />
            </svg>

            <div className="font-semibold">
              <Link to={'/login'}>{signStatus}</Link>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.375 28.125C10.4105 28.125 11.25 27.2855 11.25 26.25C11.25 25.2145 10.4105 24.375 9.375 24.375C8.33947 24.375 7.5 25.2145 7.5 26.25C7.5 27.2855 8.33947 28.125 9.375 28.125Z"
                fill="#F9FAFB"
              />
              <path
                d="M22.5 28.125C23.5355 28.125 24.375 27.2855 24.375 26.25C24.375 25.2145 23.5355 24.375 22.5 24.375C21.4645 24.375 20.625 25.2145 20.625 26.25C20.625 27.2855 21.4645 28.125 22.5 28.125Z"
                fill="#F9FAFB"
              />
              <path
                d="M26.25 6.56245H5.45625L4.6875 2.62495C4.64367 2.41 4.52585 2.21723 4.35455 2.08019C4.18326 1.94315 3.96932 1.87052 3.75 1.87495H0V3.74995H2.98125L6.5625 21.7499C6.60633 21.9649 6.72415 22.1577 6.89545 22.2947C7.06674 22.4317 7.28068 22.5044 7.5 22.4999H24.375V20.6249H8.26875L7.5 16.8749H24.375C24.5917 16.8802 24.8036 16.8103 24.9745 16.6769C25.1454 16.5436 25.2649 16.3552 25.3125 16.1437L27.1875 7.7062C27.2189 7.5671 27.2182 7.42266 27.1854 7.28388C27.1525 7.14511 27.0885 7.01565 26.9981 6.90536C26.9077 6.79507 26.7933 6.70685 26.6637 6.64743C26.534 6.58801 26.3926 6.55894 26.25 6.56245ZM23.625 14.9999H7.14375L5.83125 8.43745H25.0781L23.625 14.9999Z"
                fill="#F9FAFB"
              />
            </svg>

            <div className="font-semibold">${total}</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
