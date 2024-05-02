import Bounded from '@/components/Bounded';
import Heading from '@/components/Heading';
import { Content } from '@prismicio/client';
import { PrismicNextImage } from '@prismicio/next';
import { FaArrowLeft } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from '@prismicio/react';

/**
 * Props for `Hero`.
 */
const components: JSXMapSerializer = {
  // heading1: ({ children }) => (
  //   <Heading as="h1" size="xl" className="">
  //     {children}
  //   </Heading>
  // ),
  heading1: ({ children }) => <h1 className="text-5xl">{children}</h1>,
  paragraph: ({ children }) => (
    <p className="text-[16px] lg:text-[16px] xl:text-[16px] 2xl:text-[21px] font-normal w-10/12 ">
      {children}
    </p>
  ),
};
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <Bounded
      className="mt-9 md:mt-8 lg:mt-8 xl:mt-10 "
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 md:gap-7 lg:gap-12 xl:gap-16">
        {' '}
        <div className="flex flex-col lg:gap-3 xl:gap-3 2xl:gap-4">
          <div className="relative">
            <PrismicNextImage field={slice.primary.img_1} />
            <div className="absolute top-12 left-3  ">
              <div className="flex justify-between items-center w-full">
                <button className="mx-auto text-white bg-black py-4 px-5 rounded-[40px] 2xl:text-[26.67px] flex items-center justify-center lg:gap-3 xl:gap-3 2xl:gap-4">
                  <span>
                    <FaArrowLeft />
                  </span>{' '}
                  All Gear
                </button>
              </div>
            </div>
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 ">
              <div className="flex justify-between items-center w-full">
                <button className="mx-auto  bg-white px-2 py-2 rounded-r-[30px]">
                  <IoIosArrowBack />
                </button>
              </div>
            </div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 ">
              <div className="flex justify-between items-center w-full">
                <button className="mx-auto bg-white px-2 py-2 rounded-l-[30px]">
                  <IoIosArrowForward />
                </button>
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="flex flex-col lg:gap-3 xl:gap-3 2xl:gap-4">
              <PrismicNextImage field={slice.primary.img_2} />
              <PrismicNextImage field={slice.primary.img_3} />
            </div>
          </div>
        </div>
        <div className=" lg:pt-12 xl:pt-14 2xl:pt-20">
          {/* <PrismicRichText
            field={slice.primary.heading}
            components={components}
          /> */}
          <h5 className="text-[7vw] leading-[42px] sm:leading-[48px] md:text-[6vw] md:leading-[45px] lg:text-[3.2vw] lg:leading-[50px] xl:text-[3vw] xl:leading-[63px] 2xl:text-[3.3vw] font-normal 2xl:leading-[84px]">
            Gear Guard Double-Sided T-shirt
          </h5>
          <div className="">
            {' '}
            <PrismicRichText
              field={slice.primary.description}
              components={components}
            />
          </div>
        </div>
      </div>

      {/* Placeholder component for hero (variation: {slice.variation}) Slices */}
    </Bounded>
  );
};

export default Hero;
