export default function Tools() {
  const items = [
    {
      name: "Framer",
      link: "Website",
      img: "https://logo.clearbit.com/Framer.com?size=500",
    },
    {
      name: "Framer",
      link: "Website",
      img: "https://logo.clearbit.com/Framer.com?size=500",
    },
    {
      name: "Framer",
      link: "Website",
      img: "https://logo.clearbit.com/Framer.com?size=500",
    },
    {
      name: "Framer",
      link: "Website",
      img: "https://logo.clearbit.com/Framer.com?size=500",
    },
  ];
  return (
    <div className="p-[48px]">
      <div className="flex flex-col gap-[32px]">
        {/* <!-- 1 --> */}
        <div>
          <h2 className="font-Outfit text-[28px] font-normal text-white">
            Tool Stack
          </h2>
        </div>

        {/* <!-- 2 --> */}
        <div className="grid grid-cols-1 gap-[32px] md:grid-cols-2 xl:grid-cols-3">
          {items.map((item, index) => {
            return (
              <div key={index}>
                <div className="bg-[rgba(0, 0, 0, 0)] flex cursor-pointer items-center gap-[16px] rounded-[8px] border border-[rgb(41,_41,_41)] px-[24px] py-[16px] transition-all hover:bg-[rgb(23,_23,_23)]">
                  {/* <!-- logo --> */}
                  <div>
                    <img
                      src={item.img}
                      alt="framer"
                      className="aspect-square h-auto w-[36px]"
                    />
                  </div>

                  {/* <!-- name --> */}
                  <div className="flex flex-col">
                    <h3 className="font-Outfit text-[20px] font-normal text-white">
                      {item.name}
                    </h3>
                    <p className="font-Outfit text-[16px] font-light text-[rgb(128,_128,_128)]">
                      {item.link}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
