// components/Button.tsx
import type React from 'react';
import type { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  width?: string;
  height?: string;
  bgColor?: string;
  paddingx?: string;
  paddingy?: string;
  bgHoverColor?: string;
  textSize?: string;
  textColor?: string;
  fontWeight?: string;
}

const Button: React.FC<ButtonProps> = ({
  width = 'auto',
  bgColor = '#5048E5',
  paddingx = '4',
  paddingy = '1',
  bgHoverColor,
  textSize = 'base',
  textColor = 'white',
  fontWeight = 'bold',
  ...props
}) => {
  return (
    <button
      type="button"
      className={` text-${textColor} text-${textSize} font-${fontWeight}
  px-${paddingx} py-${paddingy} w-${width}
  hover:drop-shadow-xl hover:bg-${bgHoverColor} rounded-md`}
      {...props}
      style={{ backgroundColor: bgColor, fontFamily: "'Inter', sans-serif" }}
    />
  );
};

export default Button;
