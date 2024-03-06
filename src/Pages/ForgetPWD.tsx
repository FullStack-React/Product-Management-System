import type React from 'react';
import { useState } from 'react';
import Form from '../Components/form';
import InputGroup from '../Components/inputGroup';
import PurpleButton from '../Components/purpleButton';

const ForgetPWD: React.FC = () => {
  const [email, setEmail] = useState('');
  const [flag, setFlag] = useState(false);
  let form;
  if (!flag) {
    form = (
      <Form title="Update your password">
        <h1 className="text-center text-sm pb-3.5 md:pb-10">
          Enter your email to reset your password
        </h1>
        <div className="flex flex-col w-3/4 h-3/4 justify-around">
          <InputGroup
            for="email"
            label="Email"
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="email@example.com"
            valid={true}
          />
          <PurpleButton onClick={() => setFlag(true)} paddingy="3">
            Update Password
          </PurpleButton>
        </div>
      </Form>
    );
  } else {
    form = (
      <Form>
        <div className="flex flex-col w-3/4 h-3/4 items-center justify-center">
          <svg
            width="70"
            height="70"
            viewBox="0 0 70 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M37.9168 49.5833H49.5835V40.8333L64.1668 53.9583L49.5835 67.0833V58.3333H37.9168V49.5833ZM58.3335 11.6666H11.6668C10.1197 11.6666 8.636 12.2812 7.54204 13.3752C6.44808 14.4691 5.8335 15.9529 5.8335 17.5V52.5C5.8335 54.047 6.44808 55.5308 7.54204 56.6247C8.636 57.7187 10.1197 58.3333 11.6668 58.3333H32.0835V52.5H11.6668V23.3333L35.0002 37.9166L58.3335 23.3333V40.8333H64.1668V17.5C64.1668 15.9529 63.5522 14.4691 62.4583 13.3752C61.3643 12.2812 59.8806 11.6666 58.3335 11.6666ZM35.0002 32.0833L11.6668 17.5H58.3335L35.0002 32.0833Z"
              fill="#5048E5"
            />
          </svg>
          <p className="text-center text-sm md:text-lg">
            We have sent a password reset link to your email
          </p>
        </div>
      </Form>
    );
  }
  return <div className="flex h-full justify-center">{form}</div>;
};

export default ForgetPWD;
