import React from "react";

interface GreetingProps {
  children?: React.ReactNode;
  className?: string;
  styles?: Object;
  onClick?: any;
  config?: any;
}

const CardContainer: React.FC<GreetingProps> = ({ className, styles, onClick, children, config }) => {
  return (
    <div className="card-container" style={styles} onClick={onClick}>
      {children}
    </div>
  );
};

export default CardContainer;
