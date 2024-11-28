import { fn } from '@storybook/test';
import { Button } from '../component/Button.jsx';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Basic/Button', // 수정 시 좌측 네비 메뉴에 카테고리가 변경됨 다중 계층도 가능
  component: Button, // 해당 되는 컴포넌트
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered', // 정렬 left 로 바꾸면 왼쪽
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color', description: "버튼의 배경 색상" }, // 스토리북을 보면 설명이 장황하게 적혀있는데 Button Props 타입 인터페이스에 Jsdoc으로 작성한 내용을 보여주도록 되어있음
    // 근데 이거는 스토리북에 필요한 내용이니 차라리 description 으로 작성하는게 낫다
    // 그리고 컨트롤로 설정한 유형에 따라 패널에서 라디오버튼이나 색상 PICK하는 게 나타나는듯
    primary: { control: 'boolean', description: "버튼의 타입"}
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary = {
  args: {
    label: 'Button',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
