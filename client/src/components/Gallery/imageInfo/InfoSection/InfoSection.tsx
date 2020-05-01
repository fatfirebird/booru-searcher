import React from 'react';
import TagsSection from "./TagsSection/TagsSection";
import DescriptionSection from "./DescriptionSection/DescriptionSection";

const InfoSection = (props: any) => {
  return(
    <div className="info col l2 m2 s12 grey lighten-4">
      <div className="row">
        <div className="col s12">
          <h5>{props.id}</h5>
        </div>
      </div>
      <TagsSection tags={props.tags}/>
      <DescriptionSection date={props.date} source={props.source} ratind={props.rating} size={props.size}/>
    </div>
  )
}

export default InfoSection