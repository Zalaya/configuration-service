interface MockSubtitleProps {
  text?: string;
};

const MockSubtitle = ({ text = "This is a mocked subtitle..." }: MockSubtitleProps) => {
  return <h2>{text}</h2>;
};

export default MockSubtitle;
