import classNames from "classnames";

export default function Ventures() {
  const items = [
    {
      name: "Framer Templates",
      des: "Creating Framer templates for designers, agencies, and content creators.",
      img: "https://framerusercontent.com/images/asSnXTpbloEzEwWxiy8QxOVsJxM.svg",
    },
    {
      name: "Creator Supply",
      des: "A directory of hand-picked tools for the creator economy.",
      img: "https://framerusercontent.com/images/77USs9VmbXSDdaI958FbMQ66PpQ.png",
    },
    {
      name: "Minimal Visuals",
      des: "An Etsy store curated from my own photography.",
      img: "https://framerusercontent.com/images/j1lb2OAfQQJC6MTGWnIwnAXtaM.svg",
    },
  ];

  return (
    <div className="border-y border-token-f09a9676 p-[48px]">
      <div className="flex flex-col gap-[48px]">
        {/* <!-- 1 --> */}
        <div>
          <h2 className="font-Outfit text-[28px] font-normal text-white">
            Ventures
          </h2>
        </div>
        {/* <!-- 2 --> */}
        <div className="grid gap-[48px] md:grid-cols-3">
          {items.map((item, index) => {
            return (
              <div key={index} className="group flex flex-col gap-[24px]">
                {/* <!-- img --> */}
                <div>
                  <img
                    src={item.img}
                    alt="logo"
                    className={classNames(
                      index === 1 && "size-[56px] rounded-lg",
                    )}
                  />
                </div>
                {/* <!-- txt --> */}
                <div className="flex flex-col gap-[8px]">
                  <h3 className="text-[20px] font-normal leading-[1.2em] text-white transition group-hover:text-token-e0fac5c4">
                    {item.name}
                  </h3>
                  <p className="text-normal text-[16px] font-light leading-[1.6em] tracking-[0] text-token-3752026f">
                    {item.des}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
