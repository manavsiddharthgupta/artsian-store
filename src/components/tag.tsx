export const Tags = ({
  price,
  name,
  type,
}: {
  price: number;
  name: string;
  type: string;
}) => {
  const classes =
    type === "main" ? "top-[85%] left-[20%]" : "top-[85%] left-[5%]";
  return (
    <div
      className={`flex p-[2px] items-center gap-2 rounded-full text-sm border-[1px] border-[#6b67624a] w-fit backdrop-blur-lg absolute ${classes}`}
    >
      <span className="pl-2 font-semibold min-w-[6px] truncate text-xs">
        {name}
      </span>
      <span className="text-white inline-block min-w-fit font-semibold pb-1 px-[6px] pt-[6px] rounded-full bg-[#53B18D] text-xs">
        ${price} USD
      </span>
    </div>
  );
};
