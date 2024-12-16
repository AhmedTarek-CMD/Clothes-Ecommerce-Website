import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] my-10 mb-20 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="Logo" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
            sapiente error rem doloribus quibusdam omnis molestias dolor modi
            fugiat dolorum. Laudantium sed quidem asperiores saepe, eaque vitae
            quaerat voluptatibus soluta.
          </p>
        </div>
        <div>
          <p className="mb-5 text-xl font-medium mt-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>HOME</li>
            <li>COLLECTION</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
          </ul>
        </div>
        <div>
          <p className="mb-5 text-xl font-medium mt-5">Get In Touch</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+20 1029 645 794</li>
            <li>ahmedtarekofficial799@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copy Right @ 2024 All Rights Belongs to Ahmed Tarek
        </p>
      </div>
    </>
  );
};

export default Footer;
