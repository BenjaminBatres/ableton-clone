import Image from "next/image";
import Navbar from "./components/Navbar";
// Images
import SectionLeftImage from "../app/assets/pexels-www-erzetich-com-2426085.jpg";
import SectionRightImage from "../app/assets/pexels-tima-miroshnichenko-4988131.jpg";
import SectionLeftImage2 from "../app/assets/pexels-stephendn-63703.jpg";
import SectionRightImage2 from "../app/assets/pexels-pixabay-164938.jpg";
import SectionLeftImage3 from "../app/assets/pexels-john-taran-166597215-11044765.jpg";
import SectionRightImage3 from "../app/assets/pexels-anna-pou-8132978.jpg";
import SectionLeftImage4 from "../app/assets/pexels-cottonbro-5657668.jpg";
import SectionVerticalImage from "../app/assets/pexels-rdne-8197290.jpg";

// Components
import SectionInfo from "./components/SectionInfo";
import SectionCenterImage from "../app/assets/pexels-tima-miroshnichenko-4988128.jpg";
import Footer from "./components/Footer";

import { MdArrowForwardIos } from "react-icons/md";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="max-w-[1600px] mx-auto w-full bg-white relative">
        <div className="px-8">
          <ul className="flex items-center gap-8 sticky bg-white/85 w-full h-15 top-0 z-40">
            <li className="font-futura-medium cursor-not-allowed text-Orange">About</li>
            <li className="font-futura-medium cursor-not-allowed">Jobs</li>
            <li className="font-futura-medium cursor-not-allowed">Apprenticeships</li>
          </ul>

          <div className="py-4">
            <div className="max-w-[1370px] mx-auto w-full py-100 bg-center bg-cover bg-[url(../app/assets/pexels-jeancont-6577455.jpg)]">
              <h2 className="text-Orange text-center text-7xl md:text-9xl font-futura-medium">
                Ableton
              </h2>
            </div>
          </div>

          <div className="py-[10%]">
            <div className="max-w-[800px] mx-auto w-full">
              <h3 className="font-futura-medium text-xl lg:text-3xl mb-6">
                We make{" "}
                <span className="text-Dark-blue">Live, Push, Note,</span> Move
                and Link — unique software and hardware for music creation and
                performance. With these products, our community of users creates
                amazing things.
              </h3>
              <p className="font-futura-light lg:text-xl">
                Ableton was founded in 1999 and released the first version of
                Live in 2001. Our products are used by a community of dedicated
                musicians, sound designers, and artists from across the world.
              </p>
            </div>
          </div>

          <div className="py-8 relative">
            <div className="max-w-[1400px] mx-auto">
              <div className="flex">
                <div className="w-[50%] z-10">
                  <Image src={SectionLeftImage} alt="" className="" />
                </div>
                <div className="w-[50%] z-10">
                  <Image
                    src={SectionRightImage}
                    alt=""
                    className="p-2 sm:p-10 lg:p-20"
                  />
                </div>
                <div className="absolute bg-Yellow right-0 top-0 sm:-top-5 lg:-top-10 w-[65%] h-full xl:h-150 "></div>
              </div>
            </div>
          </div>

          <div className="py-10 lg:py-20">
            <SectionInfo
              title={
                "Making music isn’t easy. It takes time, effort, and learning. But when you’re in the flow, it’s incredibly rewarding."
              }
              para={
                "We feel the same way about making Ableton products. The driving force behind Ableton is our passion for what we make, and the people we make it for."
              }
            />
          </div>

          <div className="py-8">
            <div className="max-w-[800px] mx-auto">
              <div
                className="relative w-full overflow-hidden mb-2"
                style={{ paddingTop: "56.25%" }}
              >
                <iframe
                  src="https://www.youtube.com/embed/9SbnhgjeyXA"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                ></iframe>
              </div>
              <p className="font-futura-medium pl-2">
                Why Ableton - Juanpe Bolivar
              </p>
            </div>
          </div>

          <div className="py-10 lg:py-20">
            <SectionInfo
              paddingMobile={10}
              paddingDesktop={10}
              title={
                "We are more than 350 people from 30 different countries divided between our headquarters in Berlin and our offices in Los Angeles and Tokyo."
              }
              para={
                "Most of us are active musicians, producers, and DJs, and many of us use Live and Push every day. We come from a wide range of cultural and professional backgrounds. Some of us have PhDs, some are self-taught, and most of us are somewhere in between. What connects us is the shared belief that each of us has the skills and knowledge to contribute to something big: helping to shape the future of music culture."
              }
            />
          </div>

          <div className="py-10 relative">
            <div className="max-w-[1400px] mx-auto">
              <div className="flex">
                <div className="flex-[40%] z-10 py-2 px-5 space-y-[20%]">
                  <Image src={SectionLeftImage2} alt="" width={500} />
                  <Image src={SectionVerticalImage} alt="" width={500} />
                </div>
                <div className="flex-1/2 z-10 py-10 flex items-center">
                  <Image src={SectionRightImage2} alt="" className=" " />
                </div>
                <div className="absolute bg-Lightgreen left-0 top-0 lg-top-5 w-[60%] h-full xl:h-220 "></div>
              </div>
            </div>
          </div>

          <div className="py-10 lg:py-30">
            <SectionInfo
              title={
                "We believe it takes focus to create truly outstanding instruments. We only work on a few products and we strive to make them great."
              }
              para={
                "Rather than having a one-size-fits-all process, we try to give our people what they need to work their magic and grow. We’ve learned that achieving the best results comes from building teams that are richly diverse, and thus able to explore problems from a wider set of perspectives. We don’t always agree with each other, but opinion and debate are valued and openly encouraged."
              }
            />
          </div>

          <div className="sm:py-10">
            <div className="max-w-[1400px] mx-auto">
              <Image src={SectionCenterImage} alt="" />
            </div>
          </div>

          <div className="py-20">
            <SectionInfo
              title={
                "We’re passionate about what we do, but we’re equally passionate about improving who we are."
              }
              para={
                "We work hard to foster an environment where people can grow both personally and professionally, and we strive to create a wealth of opportunities to learn from and with each other."
              }
            />
            <SectionInfo
              para={
                "Alongside an internal training program, employees are actively supported in acquiring new knowledge and skills, and coached on applying these in their daily work. In addition, staff-organized development and music salons are a chance to discuss new technologies, production techniques and best practices."
              }
            />
          </div>

          <div className="py-10 relative">
            <div className="max-w-[1400px] mx-auto">
              <div className="flex">
                <div className="flex-1/2 z-10 flex items-center">
                  <Image src={SectionLeftImage3} alt="" className="w-[700px]" />
                </div>
                <div className="flex-1/2 z-10 pl-10 md:p-20">
                  <Image src={SectionRightImage3} alt="" />
                </div>
                <div className="absolute bg-Lightpurple left-0 top-0 translate-x-[25%] lg-top-5 w-[70%] h-full xl:h-255 "></div>
              </div>
            </div>
          </div>

          <div className="py-20">
            <SectionInfo
              title={
                "We want our employees to love it here. Since we’re looking for exceptional talent from around the world, we will do everything we can to make your transition as easy as possible."
              }
              para={
                "If you're joining us in Berlin, we'll help with relocation and paperwork. We’ll even provide you with free German or English lessons. Plus, working in Germany means you can expect comprehensive health insurance for you and your family, as well as generous maternity and paternity leave. Office hours are flexible, but it’s not all work; we have several company and team outings throughout the year as well as a variety of fun, informal small-group activities."
              }
            />
          </div>

          <div className="pb-10 md:py-25">
            <div className="max-w-[1400px] mx-auto bg-Lightblue">
              <div className="flex flex-col xl:flex-row">
                <div className="flex-1/2">
                  <Image src={SectionLeftImage4} alt="" />
                </div>
                <div className="flex-1/2 flex flex-col justify-center">
                  <div className="max-w-[800px] xl:max-w-[400px] mx-auto p-[8.3vw] xl:py-15 xl:px-0">
                    <h3 className="font-futura-medium text-xl lg:text-3xl mb-5">
                      We’re really proud of the work we’ve done so far. But
                      there’s so much more to come. If you’d like to be a part
                      of it, please join us.
                    </h3>
                    <div className="flex items-center gap-2 cursor-not-allowed">
                      <p className="text-Dark-blue text-xl lg:text-3xl font-futura-medium">
                        See latest jobs
                      </p>
                      <MdArrowForwardIos className="text-Dark-blue mt-1.5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
