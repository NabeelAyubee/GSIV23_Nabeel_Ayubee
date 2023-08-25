import React from "react";

interface Props {
  className?: string;
  styles?: object;
  onClick?: () => void;
  children?: any;
}

const CardText: React.FC<Props> = ({ className, styles, onClick, children }) => {
  return (
    <p className="card-text" style={styles} onClick={onClick}>
      {children}
    </p>
  );
};

export default CardText;
