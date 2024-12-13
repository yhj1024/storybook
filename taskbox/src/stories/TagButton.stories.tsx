import TagButton  from '../component/TagButton.tsx';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Buttons/TagButton', // 수정 시 좌측 네비 메뉴에 카테고리가 변경됨 다중 계층도 가능
  component: TagButton, // 해당 되는 컴포넌트
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered', // 정렬 left 로 바꾸면 왼쪽
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    children: {control: "text", description: "버튼의 텍스트", defaultValue: ""},
    onClick: {action: "clicked", description: "버튼 클릭 이벤트"},
    isChecked: {control: "boolean", description: "버튼 체크 여부", defaultValue: false}
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
  args: {
    children: "버튼",
    isChecked: false
  },
};