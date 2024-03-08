import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Components/PrimaryButton';

const Error = () => {
  return (
    <div className="flex items-center justify-center sm:w-[1323px] sm:h-[713px] h-full bg-white flex-grow sm:m-auto sm:mt-[81px]">
      <div className="flex-col flex items-center sm:space-y-6 space-y-5">
        <div className="sm:block hidden">
          <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50 8.33337C73.0125 8.33337 91.6667 26.9917 91.6667 50C91.6667 73.0084 73.0125 91.6667 50 91.6667C26.9875 91.6667 8.33337 73.0084 8.33337 50C8.33337 26.9917 26.9875 8.33337 50 8.33337ZM50 15.2792C30.8542 15.2792 15.2792 30.8542 15.2792 50C15.2792 69.1459 30.8542 84.7209 50 84.7209C69.1459 84.7209 84.7209 69.1459 84.7209 50C84.7209 30.8542 69.1459 15.2792 50 15.2792ZM49.9959 60.425C51.0998 60.425 52.1586 60.8636 52.9392 61.6442C53.7198 62.4248 54.1584 63.4836 54.1584 64.5875C54.1584 65.6915 53.7198 66.7503 52.9392 67.5309C52.1586 68.3115 51.0998 68.75 49.9959 68.75C48.8919 68.75 47.8332 68.3115 47.0525 67.5309C46.2719 66.7503 45.8334 65.6915 45.8334 64.5875C45.8334 63.4836 46.2719 62.4248 47.0525 61.6442C47.8332 60.8636 48.8919 60.425 49.9959 60.425ZM49.975 29.1667C50.7309 29.1657 51.4615 29.4388 52.0315 29.9352C52.6015 30.4316 52.9722 31.1179 53.075 31.8667L53.1042 32.2875L53.1209 51.0459C53.1217 51.838 52.8217 52.6009 52.2815 53.1802C51.7413 53.7596 51.0012 54.1122 50.211 54.1667C49.4207 54.2212 48.6392 53.9736 48.0246 53.4739C47.41 52.9742 47.008 52.2598 46.9 51.475L46.8709 51.05L46.8542 32.2959C46.8537 31.8851 46.9341 31.4783 47.0909 31.0987C47.2477 30.7191 47.4778 30.3741 47.768 30.0835C48.0583 29.7928 48.4029 29.5623 48.7824 29.405C49.1618 29.2477 49.5685 29.1667 49.9792 29.1667H49.975Z"
              fill="#5048E5"
            />
          </svg>
        </div>

        <div className="sm:hidden block ">
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30 5C43.8075 5 55 16.195 55 30C55 43.805 43.8075 55 30 55C16.1925 55 5 43.805 5 30C5 16.195 16.1925 5 30 5ZM30 9.1675C18.5125 9.1675 9.1675 18.5125 9.1675 30C9.1675 41.4875 18.5125 50.8325 30 50.8325C41.4875 50.8325 50.8325 41.4875 50.8325 30C50.8325 18.5125 41.4875 9.1675 30 9.1675ZM29.9975 36.255C30.6599 36.255 31.2951 36.5181 31.7635 36.9865C32.2319 37.4549 32.495 38.0901 32.495 38.7525C32.495 39.4149 32.2319 40.0501 31.7635 40.5185C31.2951 40.9869 30.6599 41.25 29.9975 41.25C29.3351 41.25 28.6999 40.9869 28.2315 40.5185C27.7631 40.0501 27.5 39.4149 27.5 38.7525C27.5 38.0901 27.7631 37.4549 28.2315 36.9865C28.6999 36.5181 29.3351 36.255 29.9975 36.255ZM29.985 17.5C30.4385 17.4994 30.8769 17.6632 31.2189 17.9611C31.5609 18.259 31.7833 18.6707 31.845 19.12L31.8625 19.3725L31.8725 30.6275C31.873 31.1028 31.693 31.5605 31.3689 31.9081C31.0447 32.2557 30.6007 32.4673 30.1265 32.5C29.6524 32.5327 29.1835 32.3841 28.8147 32.0843C28.4459 31.7845 28.2048 31.3558 28.14 30.885L28.1225 30.63L28.1125 19.3775C28.1122 19.1311 28.1604 18.887 28.2545 18.6592C28.3486 18.4314 28.4866 18.2244 28.6608 18.0501C28.8349 17.8757 29.0417 17.7373 29.2694 17.643C29.497 17.5486 29.7411 17.5 29.9875 17.5H29.985Z"
              fill="#5048E5"
            />
          </svg>
        </div>

        <div className="flex flex-col items-center sm:space-y-10 space-y-5">
          <div className="sm:text-[32px] text-[16px] font-bold ">
            Oops, something went wrong!
          </div>

          <Link to={'/'}>
            <div className="sm:block hidden">
              <Button
                textSize="[15px]"
                fontWeight="bold"
                paddingx="[85px]"
                paddingy="3"
              >
                Go Home
              </Button>
            </div>

            <div className="sm:hidden block">
              <Button
                textSize="[12px]"
                fontWeight="bold"
                width="[133px]"
                paddingy="3"
              >
                Go Home
              </Button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
