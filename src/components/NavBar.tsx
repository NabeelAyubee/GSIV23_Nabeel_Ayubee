import React from "react";

interface Props {
  children?: React.ReactNode;
  className?: string;
  styles?: Object;
  onClick?: () => void;
}

const NavBar: React.FC<Props> = ({ className, styles, onClick, children }) => {
  return (
    <div className="nav-container" style={styles} onClick={onClick}>
      {children}
    </div>
  );
};

export default NavBar;
