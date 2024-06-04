export default function Features() {
  const items = [
    {
      img: "https://framerusercontent.com/images/RaoWaCmasRw21fJiy3eMKDYd8NA.webp",
      name: "Ikigai Web App",
      type: "HEALTHCARE",
    },
    {
      img: "https://framerusercontent.com/images/RaoWaCmasRw21fJiy3eMKDYd8NA.webp",
      name: "Tebra Web App & Design System",
      type: "HEALTHCARE",
    },
    {
      img: "https://framerusercontent.com/images/RaoWaCmasRw21fJiy3eMKDYd8NA.webp",
      name: "Ikigai Web App",
      type: "WEB3",
    },
    {
      img: "https://framerusercontent.com/images/RaoWaCmasRw21fJiy3eMKDYd8NA.webp",
      name: "Ikigai Web App",
      type: "HEALTHCARE",
    },
  ];
  return (
    <div className="md:p-[48px] p-[28px]">
      <div className="flex flex-col gap-[48px]">
        {/* <!-- 1 --> */}
        <div>
          <h2 className="font-Outfit text-[28px] font-normal text-white">
            Featured Work
          </h2>
        </div>
        {/* <!-- 2 --> */}
        <div className="grid grid-cols-1 gap-[48px] md:grid-cols-2">
          {items.map((item, index) => {
            return (
              <div
                key={index}
                className="group cursor-pointer flex flex-col gap-[24px]"
              >
                <div className="relative aspect-[1.3333333333333333_/_1] h-auto overflow-hidden">
                  <img
                    src={item.img}
                    alt="work"
                    className="absolute inset-0 origin-center object-cover object-center transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col gap-[8px]">
                  <h6 className="font-Outfit text-[12px] font-medium text-token-3752026f">
                    {item.type}
                  </h6>
                  <h3 className="text-[20px] font-normal leading-[1.2em] text-white transition group-hover:text-token-e0fac5c4">
                    {item.name}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
