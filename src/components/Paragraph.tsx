import React from "react";

interface Props {
  className?: string;
  styles?: object;
  onClick?: () => void;
  children?: React.ReactNode;
}

const Paragraph: React.FC<Props> = ({ className, styles, onClick, children }) => {
  return (
    <p className="paragraph" style={styles} onClick={onClick}>
      {children}
    </p>
  );
};

export default Paragraph;
