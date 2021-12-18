import React from "react";
function Footer() {
  return (
    <div className="flex flex-col justify-center items-center bg-[#242424] text-white p-14 gap-6 ">
      <div
        className="mt-12 flex flex-col justify-center items-center gap-6
      "
      >
        <h2 className="text-center">
          Join the Adventure newsletter to receive our best vacation deals
        </h2>
        <h3>You can unsubscribe at any time.</h3>
      </div>
      <div className="flex flex-row gap-1 mb-9">
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Your email"
        />
        <button class="bg-transparent text-lg hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-white-500 hover:border-transparent ">
          Subscribe
        </button>
      </div>
      <div className="grid grid-cols-2 gap-8 lg:flex lg:flex-row lg:gap-24">
        <div>
          <ul>
            <li className="text-2xl font-bold mb-4">About Us</li>
            <li className="mb-2">How it works</li>
            <li className="mb-2">Testimonials</li>
            <li className="mb-2">Careers</li>
            <li className="mb-2">Investors</li>
            <li className="mb-2">Terms of Service</li>
          </ul>
        </div>

        <div>
          <ul>
            <li className="text-2xl font-bold mb-4">Contact Us</li>
            <li className="mb-2">Contact</li>
            <li className="mb-2">Support</li>
            <li className="mb-2">Destinations</li>
            <li className="mb-2">Sponsorships</li>
          </ul>
        </div>

        <div>
          <ul>
            <li className="text-2xl font-bold mb-4"> Videos</li>
            <li className="mb-2">Submit Video</li>
            <li className="mb-2">Ambassadors</li>
            <li className="mb-2">Agency</li>
            <li className="mb-2">Influencer</li>
          </ul>
        </div>

        <div>
          <ul>
            <li className="text-2xl font-bold mb-4">Social Media</li>
            <li className="mb-2">Instagram</li>
            <li className="mb-2">Facebook</li>
            <li className="mb-2">Youtube</li>
            <li className="mb-2">Twitter</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-7 mt-12 lg:flex lg:flex-row lg:gap-[270px] lg:justify-center lg:items-center lg:mt-14">
        <div className="font-bold text-4xl">TRVL</div>
        <div className="font-bold text-sm">TRVL &copy; 2020</div>
        <div className="flex flex-row gap-8 ">
          <div>
            <i class="fa fa-facebook fa-lg" aria-hidden="true"></i>
          </div>
          <div>
            <i class="fa fa-youtube-play fa-lg" aria-hidden="true"></i>
          </div>
          <div>
            <i class="fa fa-instagram fa-lg" aria-hidden="true"></i>
          </div>
          <div>
            <i class="fa fa-twitter fa-lg" aria-hidden="true"></i>
          </div>
          <div>
            <i class="fa fa-linkedin fa-lg" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
