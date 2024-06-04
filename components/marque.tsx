export default function Marquee() {
  const items = [
    "https://framerusercontent.com/images/FScPIbMlBgHILmdMFIC1eVFqNA.svg",
    "https://framerusercontent.com/images/FScPIbMlBgHILmdMFIC1eVFqNA.svg",
    "https://framerusercontent.com/images/FScPIbMlBgHILmdMFIC1eVFqNA.svg",
    "https://framerusercontent.com/images/FScPIbMlBgHILmdMFIC1eVFqNA.svg",
    "https://framerusercontent.com/images/FScPIbMlBgHILmdMFIC1eVFqNA.svg",
    "https://framerusercontent.com/images/FScPIbMlBgHILmdMFIC1eVFqNA.svg",
    "https://framerusercontent.com/images/FScPIbMlBgHILmdMFIC1eVFqNA.svg",
  ];
  return (
    <div className="bg-gray-800.overflow-hidden relative z-0 h-[120px] overflow-hidden border-y border-token-f09a9676 [mask-image:linear-gradient(to_right,_rgba(0,_0,_0,_0)_0%,_rgb(0,_0,_0)_12.5%,_rgb(0,_0,_0)_87.5%,_rgba(0,_0,_0,_0)_100%)]">
      <ul className="gradient-mask animate-marquee absolute inset-0 flex h-full w-full  items-center gap-[80px] opacity-20">
        {items.map((img, index) => {
          return (
            <li
              key={index}
              className="relative aspect-video w-[120px] shrink-0"
            >
              <img
                src={img}
                alt="logo"
                className="absolute inset-0 h-full w-full object-contain"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
