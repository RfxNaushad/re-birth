import image from '../assets/images/Image3.jpg'
const BookACall = () => {
  return (
    <>
      <section
        id="book-a-call"
        className="relative w-full bg-black py-32 bg-cover bg-center text-white flex items-center justify-center"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >

        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl px-6">
          {/* Left side - Text */}
          <div className="text-left space-y-4 md:space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">Have a project?</h2>
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 border border-white rounded-full hover:bg-white hover:text-black transition duration-300"
            >
              BOOK A FREE CALL
            </a>
          </div>

          {/* Right side - Availability */}
          <div className="text-right mt-8 md:mt-0 space-y-4 md:space-y-6">
            <p className="text-xl md:text-2xl">I'm available for new projects from</p>
            <h2 className="text-4xl md:text-5xl font-bold">4th Dec 2024</h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookACall;
