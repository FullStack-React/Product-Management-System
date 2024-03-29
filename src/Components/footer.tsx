// components/Footer.tsx
import type React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 z-50 text-white w-full flex justify-center py-8 h-[152px] md:h-[85px]">
      <div className="container flex flex-col justify-between items-center md:flex-row">
        <div className="md:order-1 order-3">
          <p>&copy; 2022 All Rights reserved.</p>
        </div>

        <div className="order-1 md:order-2 flex space-x-4">
          <a href="https://www.youtube.com/">
            <svg
              width="23"
              height="16"
              viewBox="0 0 23 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.0088 5.71731C22.0583 4.28596 21.7452 2.86533 21.0988 1.58731C20.6602 1.06291 20.0515 0.709018 19.3788 0.587308C16.5963 0.334834 13.8023 0.231352 11.0088 0.277308C8.22546 0.229267 5.44152 0.329408 2.66882 0.577308C2.12064 0.677025 1.61333 0.93415 1.20882 1.31731C0.308816 2.14731 0.208816 3.56731 0.108816 4.76731C-0.036272 6.92487 -0.036272 9.08974 0.108816 11.2473C0.137746 11.9227 0.23831 12.5931 0.408816 13.2473C0.529391 13.7524 0.773339 14.2197 1.11882 14.6073C1.52608 15.0108 2.0452 15.2825 2.60882 15.3873C4.76473 15.6534 6.93703 15.7637 9.10882 15.7173C12.6088 15.7673 15.6788 15.7173 19.3088 15.4373C19.8863 15.339 20.42 15.0669 20.8388 14.6573C21.1188 14.3772 21.3279 14.0344 21.4488 13.6573C21.8064 12.5599 21.9821 11.4114 21.9688 10.2573C22.0088 9.69731 22.0088 6.31731 22.0088 5.71731ZM8.74882 10.8573V4.66731L14.6688 7.77731C13.0088 8.69731 10.8188 9.73731 8.74882 10.8573Z"
                fill="white"
              />
            </svg>
          </a>

          <a href="https://www.twitter.com/">
            <svg
              width="21"
              height="18"
              viewBox="0 0 21 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.0139 2.80998C19.2623 3.13607 18.4673 3.35164 17.6539 3.44998C18.5121 2.9373 19.1552 2.13076 19.4639 1.17998C18.6575 1.66004 17.7747 1.99827 16.8539 2.17998C16.2385 1.51255 15.4189 1.06827 14.5237 0.916827C13.6286 0.765382 12.7085 0.915334 11.9077 1.34316C11.107 1.771 10.4708 2.45251 10.0992 3.28081C9.72746 4.10912 9.64121 5.03736 9.85392 5.91997C8.22334 5.8375 6.62836 5.41293 5.17257 4.67384C3.71678 3.93475 2.43276 2.89767 1.40392 1.62998C1.04305 2.26014 0.853435 2.9738 0.853916 3.69998C0.852636 4.37436 1.01813 5.03859 1.33567 5.63354C1.65321 6.22849 2.11293 6.73569 2.67392 7.10998C2.02189 7.09223 1.3838 6.91727 0.813916 6.59998V6.64998C0.818803 7.59487 1.14991 8.50907 1.75123 9.23794C2.35255 9.96681 3.18717 10.4656 4.11392 10.65C3.75717 10.7585 3.38679 10.8158 3.01392 10.82C2.75581 10.817 2.49834 10.7936 2.24392 10.75C2.50783 11.5628 3.01854 12.2731 3.70499 12.7821C4.39144 13.2911 5.21949 13.5735 6.07392 13.59C4.63112 14.7252 2.8498 15.3448 1.01392 15.35C0.679651 15.3511 0.345652 15.331 0.013916 15.29C1.88834 16.5002 4.07273 17.1427 6.30392 17.14C7.84361 17.156 9.37105 16.865 10.797 16.2841C12.223 15.7031 13.5189 14.8439 14.6091 13.7565C15.6993 12.6691 16.5619 11.3754 17.1465 9.95088C17.7311 8.5264 18.026 6.9997 18.0139 5.45997C18.0139 5.28997 18.0139 5.10997 18.0139 4.92998C18.7986 4.34479 19.4754 3.6274 20.0139 2.80998Z"
                fill="white"
              />
            </svg>
          </a>
          <a href="https://www.facebook.com/">
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.9139 0H1.11392C0.822178 0 0.542389 0.115893 0.336099 0.322183C0.129809 0.528473 0.013916 0.808262 0.013916 1.1V18.9C0.013916 19.0445 0.0423684 19.1875 0.0976486 19.321C0.152929 19.4544 0.233954 19.5757 0.336099 19.6778C0.438243 19.78 0.559506 19.861 0.692964 19.9163C0.826422 19.9715 0.969462 20 1.11392 20H10.6939V12.25H8.09392V9.25H10.6939V7C10.6401 6.47176 10.7024 5.93813 10.8766 5.43654C11.0508 4.93495 11.3327 4.47755 11.7024 4.09641C12.0721 3.71528 12.5207 3.41964 13.0167 3.23024C13.5128 3.04083 14.0443 2.96225 14.5739 3C15.3522 2.99521 16.1302 3.03528 16.9039 3.12V5.82H15.3139C14.0539 5.82 13.8139 6.42 13.8139 7.29V9.22H16.8139L16.4239 12.22H13.8139V20H18.9139C19.0584 20 19.2014 19.9715 19.3349 19.9163C19.4683 19.861 19.5896 19.78 19.6917 19.6778C19.7939 19.5757 19.8749 19.4544 19.9302 19.321C19.9855 19.1875 20.0139 19.0445 20.0139 18.9V1.1C20.0139 0.955546 19.9855 0.812506 19.9302 0.679048C19.8749 0.54559 19.7939 0.424327 19.6917 0.322183C19.5896 0.220038 19.4683 0.139013 19.3349 0.0837326C19.2014 0.0284524 19.0584 0 18.9139 0Z"
                fill="white"
              />
            </svg>
          </a>
        </div>

        <div className="md:order-3 order-2 flex space-x-8">
          <div>Contact us</div>
          <div>Privacy Policies</div>
          <div>Help</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
