import React, { useCallback } from 'react';
import styled from '@emotion/styled';

interface ButtonProps {
  children?: React.ReactNode | string;
  type?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

interface EditableProps extends Partial<ButtonProps> {
  disabled?: boolean;
}

interface MitlButtonsProps extends ButtonProps {
  buttonOptions?: {
    value: string;
    label: string;
    unit?: string;
  }[];
  onChange: (val: string) => void;
}

interface ButtonSubComponents {
  Editable?: typeof Editable;
  Multi?: typeof Multi;
}

const Button: React.FC<ButtonProps> & ButtonSubComponents = ({ children, type, onClick, ...props }) => {
  const handleOnClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (onClick) onClick(e);
    },
    [onClick],
  );

  return (
    <button {...props} onClick={handleOnClick}>
      {children}
    </button>
  );
};

const Editable: React.FC<EditableProps> = ({ children, disabled, ...props }) => {
  return (
    <Button disabled={disabled} {...props}>
      {children}
    </Button>
  );
};

Editable.defaultProps = {
  disabled: false,
};

Button.defaultProps = {
  type: 'primary',
};

const Multi: React.FC<MitlButtonsProps> = ({ onChange, buttonOptions }) => {
  const handleButtonClick = useCallback(
    (val: string) => () => {
      onChange(val);
    },
    [onChange],
  );
  return (
    <MultiWrapper>
      {buttonOptions &&
        buttonOptions.map((option) => {
          const { value, label = '', unit = '' } = option;
          return (
            <Button key={value} onClick={handleButtonClick(value)}>
              {`${label}${unit}`}
            </Button>
          );
        })}
    </MultiWrapper>
  );
};

const MultiWrapper = styled.div`
  display: flex;
  flex-direction: row;
  .ant-btn {
    margin-left: 4px;
  }
`;

Button.Multi = Multi;
Button.Editable = Editable;

export default Button;
