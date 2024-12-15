import TagButton from "./TagButton.tsx";
import {useState} from "react";

interface ITagListProps {
  tags: string[];
  onTagClick: (tag: string) => void;
}

export default function TagList({tags, onTagClick}: ITagListProps) {
  const [selectedTag, setSelectedTag] = useState<string>(tags[0]);
  return (
    // 이벤트 버블링 자식 태그에서 발생한 이벤트 부모에서 잡기
    <div className={"flex gap-x-4"} onClick={(event) => {
      const eventTarget = event.target as HTMLButtonElement;
      const tag = eventTarget.textContent
      onTagClick(tag);
    }}>
      {tags.map((tag) => <TagButton key={tag} isChecked={tag === selectedTag} onClick={() => setSelectedTag(tag)}>
        {tag}
      </TagButton>)}
    </div>
  )
}