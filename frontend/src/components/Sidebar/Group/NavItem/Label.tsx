export type LabelProps = {
  text: string;
};

export const Label = ({ text }: LabelProps) => {
  return (
    <div>
      {text}
    </div>
  );
};
