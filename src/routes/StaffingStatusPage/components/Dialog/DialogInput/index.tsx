interface Props {
  title: string;
  riil: number;
  dsp: number;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const DialogInput = ({
  riil,
  dsp,
  title,
  disabled = false,
  onChange,
}: Props) => {
  return (
    <div className="flex py-2">
      <h1 className="font-bold text-sm text-darkBlue w-full">{title}</h1>
      <h1 className="font-bold text-sm text-darkBlue">DSP</h1>
      <input
        className="border-2 rounded-md w-8 mx-2 text-center"
        value={riil}
        onChange={onChange}
        disabled={disabled}
      />
      <h1 className="font-bold text-sm text-darkBlue">RIIL</h1>
      <input
        className="border-2 rounded-md w-8 mx-2 text-center"
        disabled
        value={dsp}
      />
    </div>
  );
};

export default DialogInput;
