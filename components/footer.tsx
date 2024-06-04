export default function Footer() {
  return (
    <div className="w-full lg:pl-[240px] pl-0">
      <div className="flex border-t border-[rgb(41,_41,_41)] items-center justify-center w-full gap-[32px] px-[48px] py-[32px]">
        {/* <!-- 1 --> */}
        <div>
          <p className=" text-[rgb(128,_128,_128)] ">
            Built with
            <a
              href="/"
              className=" text-white font-light text-[16px] font-Outfit hover:text-token-e0fac5c4 transition "
            >
              {" "}
              Next.js
            </a>
          </p>
        </div>

        {/* <!-- 2 --> */}
        <div>
          <p className=" text-[rgb(128,_128,_128)] ">
            Created by
            <a
              href="/"
              className=" hover:text-token-e0fac5c4 transition  text-white font-light text-[16px] font-Outfit "
            >
              {" "}
              abldxtr
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
