import TagList  from '../component/TagList.tsx';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'List/TagList', // 수정 시 좌측 네비 메뉴에 카테고리가 변경됨 다중 계층도 가능
  component: TagList, // 해당 되는 컴포넌트
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered', // 정렬 left 로 바꾸면 왼쪽
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    tags: {
      control: "array",
      description: "태그 리스트",
      defaultValue: ["tag1", "tag2", "tag3"]
    },
    onTagClick: {
      action: "clicked",
      description: "태그 클릭 이벤트"
    }
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
  args: {
    tags: ["tag1", "tag2", "tag3"]
  },
};