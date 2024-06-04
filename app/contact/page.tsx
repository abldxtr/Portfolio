export default function Page() {
  return (
    <div className="z-0 overflow-hidden  pl-0 pt-[64px] lg:pl-[240px] lg:pt-0">
      {/* <!-- contact --> */}
      <div className="flex flex-col mx-auto gap-[48px] md:p-[48px] p-[28px] pb-[160px] w-full max-w-[800px] ">
        {/* <!-- 1 title and titr --> */}

        <div className=" w-full flex flex-col gap-[48px] ">
          {/* <!-- 1 --> */}
          <div className=" flex flex-col gap-[16px]   ">
            <h1 className="text-white text-[40px] font-normal font-Outfit  ">
              Let's Chat
            </h1>

            <div>
              <p className=" text-[16px] font-light font-Outfit text-[rgb(128,128,128)] ">
                If you'd like to talk about a potential project or just say hi,
                send me a message or email me at{" "}
              </p>
              <a
                href="mailto:abol.dexter@gmail.com"
                className="hover:text-token-e0fac5c4 text-white transition  "
              >
                abol.dexter@gmail.com
              </a>
            </div>
          </div>

          {/* <!-- 2 --> */}

          <div className=" w-full ">
            <div className=" w-full flex flex-col gap-[16px]  ">
              {/* <!-- 2field --> */}

              <div className="flex flex-col sm:flex-row items-center gap-[16px] w-full ">
                <input
                  type="text"
                  className="py-[12px] focus-within:outline-none w-full px-[16px] font-Outfit rounded-[4px] bg-token-76df4f11 text-[16px] font-normal text-white [box-shadow:inset_0_0_0_1px_transparent]  "
                  placeholder="Name"
                />

                <input
                  type="text"
                  className="py-[12px] px-[16px] focus-within:outline-none w-full  font-Outfit rounded-[4px] bg-token-76df4f11 text-[16px] font-normal text-white [box-shadow:inset_0_0_0_1px_transparent]  "
                  placeholder="Email"
                />
              </div>

              {/* <!-- textarea --> */}
              {/* <textarea name="" id="" cols="30" rows="10" className="py-[12px] px-[16px]  focus-within:outline-none w-full  font-Outfit rounded-[4px] bg-token-76df4f11 text-[16px] font-normal text-white " placeholder="Message"></textarea> */}
              <textarea
                className="py-[12px] px-[16px] h-[264px]  focus-within:outline-none w-full  font-Outfit rounded-[4px] bg-token-76df4f11 text-[16px] font-normal text-white "
                placeholder="Message"
              />
              {/* <!-- buttom --> */}
              <div>
                <button className=" bg-token-e0fac5c4 w-full py-[12px] px-[16px] rounded-[4px] text-[rgb(18,18,18)] font-semibold font-Outfit text-[16px] hover:opacity-80 transition-opacity opacity-100 duration-300     ">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- 2 input fields --> */}
      </div>
    </div>
  );
}
