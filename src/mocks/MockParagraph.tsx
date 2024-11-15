interface MockParagraphProps {
  text?: string;
};

const MockParagraph = ({ text = "This is a mocked paragraph..." }: MockParagraphProps) => {
  return <p>{text}</p>;
};

export default MockParagraph;
