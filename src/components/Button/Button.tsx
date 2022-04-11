import React from 'react';
import { ButtonProps } from './Button.types';
import { Button as AButton } from 'antd'
import 'antd/lib/button/style/index.css'
const Button: React.FC<ButtonProps> = (props) =>{
  return (
    <AButton>
      12344123
    </AButton>
  )
}
export default Button