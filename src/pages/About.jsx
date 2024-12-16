import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";
import Title from "../components/Title";

const About = () => {
  return (
    <div>
      <div className="text-2xl pt-8 border-t text-center">
        <Title firstText={"ABOUT"} secondText={"US"} />
      </div>
      <div className="flex flex-col sm:flex-row gap-16 my-10">
        <img
          src={assets.about_img}
          className="md:max-w-[480px] w-full"
          alt="Image"
        />
        <div className="text-gray-600 flex flex-col gap-6 justify-center md:w-2/4">
          <p>
            Welcome to Forever, where innovation meets simplicity. We are a
            passionate team of professionals dedicated to providing high-quality
            products and services that make your life easier, more enjoyable,
            and more connected. With a focus on excellence and customer
            satisfaction, we strive to create solutions that resonate with the
            needs of our community.
          </p>
          <p>
            Founded on the principles of trust, creativity, and integrity, we
            take pride in building relationships that go beyond transactions.
            Whether it’s through the products we offer or the experiences we
            create, our goal is to inspire confidence and foster a lasting
            connection with everyone we serve.
          </p>
          <b>Our Mission</b>
          <p>
            At Forever, our mission is to empower individuals and communities by
            delivering exceptional solutions that enrich lives and drive
            progress.
          </p>
        </div>
      </div>
      <div className="text-xl pt-4">
        <Title firstText={"WHY"} secondText={"CHOOSE US"} />
      </div>
      <div className="mb-20 flex flex-col md:flex-row text-sm">
        <div className="border px-10 md:px-16 py-8 sm:py20 flex flex-col gap-5">
          <b>Quality Assurance: </b>
          <p className="text-gray-600">
            Welcome to Forever, where innovation meets simplicity. We are a
            passionate team of professionals dedicated to providing high-quality
            products and services that m
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py20 flex flex-col gap-5">
          <b>Conveniance: </b>
          <p className="text-gray-600">
            Founded on the principles of trust, creativity, and integrity, we
            take pride in building relationships that go beyond transactions.
            Whether it’s through
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py20 flex flex-col gap-5">
          <b>Excepictional Customer Service: </b>
          <p className="text-gray-600">
            Founded on the principles of trust, creativity, and integrity, we
            take pride in building relationships tha
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default About;
