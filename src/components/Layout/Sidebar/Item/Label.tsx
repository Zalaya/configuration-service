interface Label {
  label: string;
  isMinimized?: boolean;
};

const Label = ({ label, isMinimized = false }: Label) => {
  return !isMinimized && (
    <span className="font-semibold truncate">
      {label}
    </span>
  );
};

export default Label;
