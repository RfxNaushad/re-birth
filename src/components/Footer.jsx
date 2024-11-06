
const ContactSection = () => {
  return (
    <div className="footer flex flex-col justify-center items-center  bg-white text-black">
      {/* MARK ASHTON Text */}
      <div className="text-[13.2vw] font-bold">
        MARK ASHTON
      </div>

      {/* Bottom Section */}
      <div className="flex justify-between w-full px-8 mt-auto">
        {/* Contact Info */}
        <div className="flex flex-col items-start">
          <p className="mb-2">hello@markashton.com</p>
          <p>+44 20 7144 6699</p>
        </div>

        {/* Time Section */}
        <div className="text-start">
          <p className="mb-1">My current time</p>
          <p className="font-bold">08:29 London (GMT)</p>
        </div>

        {/* Address Info */}
        <div className="flex flex-col items-start">
          <p>25 Lindsey Street</p>
          <p>Epping</p>
          <p>CM16 6RB</p>
          <p>United Kingdom</p>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-end">
          <a href="#" className="mb-1">Instagram</a>
          <a href="#" className="mb-1">X</a>
          <a href="#" className="mb-1">Youtube</a>
          <a href="#" className="mb-1">Facebook</a>
          <a href="#" className="mb-1 underline">LinkedIn</a>
          <a href="#" className="underline">TikTok</a>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-[#fafafa] mt-8 border-t py-8 flex justify-between text-sm px-8">
        <div>Copyright © 2024 Mark Ashton</div>
        <div className="flex space-x-4">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms & Conditions</a>
          <a href="#" className="hover:underline">Imprint</a>
        </div>
      </footer>
    </div>
  );
};

export default ContactSection;
