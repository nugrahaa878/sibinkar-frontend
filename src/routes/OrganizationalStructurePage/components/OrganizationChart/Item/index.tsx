interface Props {
  id: number;
  position: string;
  name: string;
  offset?: number;
}

const Item = ({ id, position, name, offset }: Props) => {
  if (offset) {
    return (
      <div className="flex items-center justify-center z-0">
        <div className="h-[70px] w-[1px] bg-black" />
        <div className="h-[1px] w-[100px] bg-black" />
        <div className="w-[200px] h-[70px] p-3 bg-red-500 rounded-lg items-center mr-[-300px]">
          <div className="text-center text-white text-sm font-semibold">
            {position}
          </div>
          <div className="text-center text-white text-xs font-normal">
            {name}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="w-[200px] h-[70px] bg-slate-500 rounded-lg flex-col justify-center items-center inline-flex">
      <div className="text-center text-white text-sm font-semibold">
        {position}
      </div>
      <div className="text-center text-white text-xs font-normal">{name}</div>
    </div>
  );
};

export default Item;
