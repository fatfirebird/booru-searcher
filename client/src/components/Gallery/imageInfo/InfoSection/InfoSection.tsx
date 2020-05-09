import React from 'react';
import TagsSection from "./TagsSection/TagsSection";
import DescriptionSection from "./DescriptionSection/DescriptionSection";
import IdSection from "../IdSection/IdSection";

type TProps = {
  id: string | number;
  tags: string;
  date: number;
  source: string | null;
  rating: 's' | 'q' | 'e' | 'a';
  size: {
    width: number;
    height: number;
  }
}

const InfoSection = (props: TProps) => {
  return(
    <div className="info-container col l2 m2 s12 grey lighten-4">
      <IdSection id={props.id}/>
      <TagsSection tags={props.tags}/>
      <DescriptionSection date={props.date} source={props.source} rating={props.rating} size={props.size}/>
    </div>
  )
}

export default InfoSection