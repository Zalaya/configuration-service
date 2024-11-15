interface MockTitleProps {
  text?: string;
};

const MockTitle = ({ text = "This is a mocked title..." }: MockTitleProps) => {
  return <h1>{text}</h1>;
};

export default MockTitle;
