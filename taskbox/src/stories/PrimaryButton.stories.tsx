import PrimaryButton  from '../component/PrimaryButton.tsx';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Buttons/PrimaryButton', // 수정 시 좌측 네비 메뉴에 카테고리가 변경됨 다중 계층도 가능
  component: PrimaryButton, // 해당 되는 컴포넌트
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered', // 정렬 left 로 바꾸면 왼쪽
  },
  decorators: [
    (Story) =>  (
      <div style={{width: '360px'}}>
        <Story />
      </div>
    )
  ],
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    theme: {control: {type: "select", options: ["dark", "light", "social", "text"]}},
    children: {control: "text", description: "PrimaryButton의 내용", defaultValue: ""},
    onClick: {action: "clicked", description: "버튼 클릭 이벤트"},
    disabled: {control: "boolean", description: "버튼 비활성화 여부", defaultValue: true}
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Dark = {
  args: {
    children: "Button",
    theme: "dark",
    disabled: false
  },
};

export const Light = {
  args: {
    children: "Button",
    theme: "light",
    disabled: false
  },
};

export const Social = {
  args: {
    children: "Button",
    theme: "social",
    disabled: false
  },
};

export const Text = {
  args: {
    children: "Button",
    theme: "text",
    disabled: false
  },
};


export const Disable = {
  args: {
    children: "Button",
    disabled: true
  },
};
