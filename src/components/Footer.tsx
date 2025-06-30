const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

const Footer = () => {
  return (
    <footer className="my-10 md:mt-20 mt-10 text-white-50 px-5 md:px-20 xl:px-20 flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-0 w-full">
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-start cursor-pointer">Terms & Conditions</p>
        </div>
        <div className="flex items-center justify-center gap-5">
          {socialImgs.map((socialImg, index) => (
            <div key={index} className="border border-black-50 bg-black-100 flex justify-center items-center rounded-xl size-10 md:size-12 cursor-pointer transition-all duration-500 hover:bg-black-50">
              <img src={socialImg.imgPath} alt="social icon" />
            </div>
          ))}
        </div>

        

        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Adrian Hajdin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
