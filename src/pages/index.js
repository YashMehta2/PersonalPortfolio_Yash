import Layout from "@/components/Layout";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import Hireme from "@/components/Hireme";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <TransitionEffect />

      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2">
              <Image
                src={profilePic}
                alt="Yash Mehta"
                className="w-full h-auto lg:w-full lg:inline-block md:inline-block md:w-full"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl text-dark dark:text-light"
              />
              <p className="my-4 text-2xl lg:text-xl md:text-lg sm:text-base font-medium text-dark/75 dark:text-light/75">
                As a skilled Frontend Software Engineer, I am dedicated to
                turning ideas into innovative applications. Explore my latest
                projects and articles, showcasing my expertise in Software
                Development, Web development and App Development.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center ">
                <Link
                  href="/Resume-YashMehta.pdf"
                  target={"_blank"}
                  className="flex items-center xs:text-base dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light bg-dark text-light p-2.5 px-6 md:px-4 md:p-2 sm:px-3 rounded-lg text-2xl lg:text-xl md:text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark shadow-lg hover:shadow-xl transition-all"
                  download={true}
                >
                  Resume <LinkArrow className={"w-6 ml-1 sm:w-5 xs:w-4"} />
                </Link>
                <Link
                  href="mailto:myash299@gmail.com"
                  target={"_blank"}
                  className="ml-6 md:ml-4 sm:ml-2 text-2xl lg:text-xl md:text-lg sm:text-base font-semibold capitalize text-dark underline dark:text-light hover:text-primary dark:hover:text-primaryDark transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <Hireme />
        <div className="absolute right-8 bottom-8 inline-block w-24 lg:hidden">
          <Image src={lightBulb} alt="Light Bulb" className="w-full h-auto" />
        </div>
      </main>
    </>
  );
}
