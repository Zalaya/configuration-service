export type TitleProps = {
  text: string;
};

export const Title = ({ text }: TitleProps) => {
  return (
    <div>
      {text}
    </div>
  );
};
