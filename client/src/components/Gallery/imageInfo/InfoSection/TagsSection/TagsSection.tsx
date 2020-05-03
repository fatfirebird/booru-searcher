import React from "react";

type TProps = {
  tags: string;
}

const TagsSection = (props: TProps) => {
  const createTags = (tags: string) =>
    tags
      .split(' ')
      .map(tag =>
        <div key={tag} className='tag'>
            {tag}
        </div>
      );

  return(
    <div className="section">
      <h5>Теги</h5>
      {createTags(props.tags)}
    </div>
  )
}

export default TagsSection