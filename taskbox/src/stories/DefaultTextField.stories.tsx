import DefaulttextField  from '../component/DefaulttextField.tsx';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'TextField/DefaulttextField', // 수정 시 좌측 네비 메뉴에 카테고리가 변경됨 다중 계층도 가능
  component: DefaulttextField, // 해당 되는 컴포넌트
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered', // 정렬 left 로 바꾸면 왼쪽
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    iconPath: {control: "text", description: "아이콘 이미지의 경로", defaultValue: ""},
    placeholder: {control: "text", description: "텍스트 필드의 placeholder", defaultValue: "텍스트를 입력해주세요"},
    value: {control: "text", description: "텍스트 필드의 값", defaultValue: ""},
    errorMessage: {control: "text", description: "텍스트 필드의 에러 메시지", defaultValue: ""},
    iconAlt: {control: "clicked", description: "버튼 클릭 이벤트"},
    onChange: {control: "changed", description: "텍스트 필드의 값 변경 이벤트"},
    onIconClick: {control: "clicked", description: "버튼 클릭 이벤트"},
    isError: {control: "boolean", description: "에러 상태 여부", defaultValue: false}
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
  args: {
    iconAlt: "icon",
    // 1. iconPath: /asdfasdf.svg (public 하위 시작),
    // 2. iconPath: CloseIcon (상위에서 svg import) ,
    // 3. iconPath: "https://via.placehollder.com/24",
    // 아이콘 경로 잡을땐 3가지가 있음
    // 1. public 폴더 : /시작으로 주면됨
    // 2. src/assest 폴더 : 컴포넌트 처럼 사용 해야됨 import 하고 import 된걸 인자로 전달
    // 3. 외부 링크 :
    placeholder: "텍스트를 입력해주세요",
    value: "",
    errorMessage: "텍스트를 확인해주세요",
    iconPath: "https://kr.object.ncloudstorage.com/icons/ic-delete-dark.svg",
    isError: false
  },
};