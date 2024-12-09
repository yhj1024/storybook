import NavigationBar  from '../component/NavigationBar.tsx';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Navigation/NavigationBar', // 수정 시 좌측 네비 메뉴에 카테고리가 변경됨 다중 계층도 가능
  component: NavigationBar, // 해당 되는 컴포넌트
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered', // 정렬 left 로 바꾸면 왼쪽
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{width: "360px"}}>
        <Story />
      </div>
    )
  ],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    isDark: {
      control: "boolean",
      description: "다크 모드 여부",
      defaultValue: false
    },
    showBackButton: {
      control: "boolean",
      description: "닫기 버튼 표시 여부",
      defaultValue: true
    },
    showTitle: {
      control: "boolean",
      description: "닫기 버튼 표시 여부",
      defaultValue: true
    },
    showCloseButton: {
      control: "boolean",
      description: "닫기 버튼 표시 여부",
      defaultValue: true
    },
    title: {
      control: "text",
      description: "페이지 타이틀",
      defaultValue: "타이틀"
    },
    onBackButtonClick: {
      action: "clicked",
      description: "뒤로가기 버튼 클릭 이벤트",
    },
    onCloseButtonClick: {
      action: "clicked",
      description: "닫기 버튼 클릭 이벤트",
    }
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
  args: {
    isDark: false,
    showBackButton: true,
    showTitle: true,
    showCloseButton: true,
    title: "타이틀"
  },
};