interface Node {
  id: number;
  position: string;
  name: string;
}

interface Props {
  id: number;
  position: string;
  name: string;
  offset?: number;
  childOffset: Node[];
}

const Item = ({ id, position, name, offset, childOffset }: Props) => {
  if (offset) {
    return (
      <div>
        <div className="flex items-center justify-center">
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

        {childOffset.map((item) => {
          return (
            <div className="flex items-center justify-center">
              <div className="h-[90px] w-[1px] bg-black" />
              <div className="flex flex-col  items-center mr-[-300px] ml-[100px]">
                <div className="h-[20px] w-[1px] bg-red-500" />
                <div className="w-[200px] h-[70px] p-3 bg-green-500 rounded-lg">
                  <div className="text-center text-white text-sm font-semibold">
                    {item.position}
                  </div>
                  <div className="text-center text-white text-xs font-normal">
                    {item.name}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
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
