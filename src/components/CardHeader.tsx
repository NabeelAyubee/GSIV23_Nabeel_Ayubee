import React from "react";

interface Props {
  className?: string;
  styles?: object;
  onClick?: () => void;
  children?: React.ReactNode;
}

const CardHeader: React.FC<Props> = ({ className, styles, onClick, children }) => {
  return (
    <div className="card-header" style={styles} onClick={onClick}>
      {children}
    </div>
  );
};

export default CardHeader;
