import React from "react";
import Image from "../Image";
import CardContainer from "../CardContainer";
import CardHeader from "../CardHeader";
import Header from "../Header";
import Paragraph from "../Paragraph";
import { useNavigate } from "react-router-dom";
interface GreetingProps {
  onClick?: () => void;
  config?: any;
}

const Tiles: React.FC<GreetingProps> = ({ onClick, config }) => {
  const navigate = useNavigate();
  const handleRedirect = (id: string) => {
    navigate(`/movie/${id}`);
  };
  return (
    <CardContainer onClick={() => handleRedirect(config.id)}>
      <Image src={config?.poster_path} />
      <CardHeader>
        <div className="flex-container items-center">
          <Header>{config?.original_title}</Header>
          <p className="rating">({config?.vote_average})</p>
        </div>
        <Paragraph>{config?.overview}</Paragraph>
      </CardHeader>
    </CardContainer>
  );
};

export default Tiles;
