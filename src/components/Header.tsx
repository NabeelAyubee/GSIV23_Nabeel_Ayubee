import React from "react";

interface Props {
  className?: string;
  styles?: object;
  onClick?: () => void;
  children?: React.ReactNode;
}

const Header: React.FC<Props> = ({ className, styles, onClick, children }) => {
  return (
    <header className="header" style={styles} onClick={onClick}>
      {children}
    </header>
  );
};

export default Header;
