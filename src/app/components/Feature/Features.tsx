import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { Container as ContainerBase, ContentWithPaddingXl } from "components/misc/Layouts";
import { SectionDescription } from "components/misc/Typography";

const Container = tw(ContainerBase)`my-8 lg:my-10 bg-primary-900 text-gray-100 -mx-8 px-8`;
const HeadingContainer = tw.div``;
const Heading = tw(SectionHeading)`sm:text-3xl md:text-4xl lg:text-5xl`;
const Subheading = tw(SubheadingBase)`text-gray-100 text-center`;
const Description = tw(SectionDescription)`text-gray-400 text-center mx-auto max-w-screen-md`;

const StatsContainer = tw.div`mt-8 flex flex-col sm:flex-row items-center justify-center flex-wrap max-w-screen-md justify-between mx-auto`
const Stat = tw.div`flex flex-col text-center p-4 tracking-wide`
const StatKey = tw.div`text-xl font-medium`
const StatValue = tw.div`text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-black`

export default ({
  subheading = "",
  heading = "Over 9000 Projects Completed",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  stats = [
    {
      key: "Clients",
      value: "2500+",
    },
    {
      key: "Revenue",
      value: "$100M+",
    },
    {
      key: "Employees",
      value: "150+",
    },
  ]
}) => {
  return (
<<<<<<< HEAD
    <div>
      <div className="flex-col items-center justify-items-center w-full bg-blue-800 text-white px-6 ">
        <h2 className='flex text-4xl font-bold pt-8 px-9 py-6 sm:text-4xl'>Over 9000 Projects Completed</h2>
        <p className="py-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className='md:flex py-7 gap-9 '>
            <div className='md:flex-col'>
            <div className='font-bold text-2xl sm:text-4xl'>
               2500+
            </div>
            <div className='text-xl sm:text-2xl'>
                Clients
            </div>
            </div>
            <div className='md:flex-col'>
            <div className='font-bold text-2xl sm:text-4xl'>
                $100M+
            </div>
            <div className='text-xl sm:text-2xl'>
                Revenue
            </div>
            </div>
            <div className='md:flex-col'>
            <div className='font-bold text-2xl sm:text-4xl' >
                150+
            </div>
            <div className='text-xl sm:text-2xl'>
                Employees
            </div>
            </div>
        </div>
        </div>

        <div className='flex-col items-center space-y-3 py-6 justify-items-center'>
            <h5 className='text-2xl text-blue-800 font-bold'>
                Features
            </h5>
            <h2 className='text-4xl sm:text-6xl text-gray-800 font-bold '>
                Amazing
                <span className='text-4xl sm:text-6xl text-blue-800 font-semibold'>  Features</span>
            </h2>
            <p className='items-center text-gray-500 px-8'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className='grid grid-row-[20px_1fr_20px] relative mt-4 flex h-fit max-w-7xl flex-col items-center gap-10 px-8 sm:gap-16 md:my-0 md:h-[30.9vh] md:flex-row md:gap-0 lg:px-12 xl:m-auto xl:gap-0 xl:overflow-hidden md:flex items-center space-y-3 py-6 justify-items-center'>
            <div className='flex-col items-center justify-items-center'>
            <h3 className='text-2xl text-blue-800 font-bold'>
                Secure
            </h3>
            <p className='items-center px-14 text-gray-500'>
            We strictly only deal with vendors that provide top notch security.
            </p>
        </div>
        <div className='flex-col items-center  py-6 justify-items-center'>
            <h5 className='text-2xl text-blue-800 font-bold'>
                24/7 Support
            </h5>
            <p className='items-center px-14 text-gray-500'>
            Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud.
             </p>
            
        </div>
        <div className='flex-col items-center py-6 justify-items-center'>
            <h5 className='text-2xl text-blue-800 font-bold'>
                Customizable
            </h5>
            <p className='items-center px-14  text-gray-500 '>
               Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud.
            </p>
        </div>
        <div className='flex-column items-center  py-6 justify-items-center'>
            <h1 className=' text-2xl text-blue-800 font-bold'>
                Reliable
            </h1>
            <p className='items-center px-14  text-gray-500 '>
            Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud.
            </p>
        </div>
        <div className='flex-column items-center justify-items-center'>
            <h5 className='text-2xl text-blue-800 font-bold'>
                Fast
            </h5>
            <p className='items-center px-14  text-gray-500'>
            Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud.
             </p>
        </div>
        <div className='flex-column items-center justify-items-center'>
            <h5 className='text-2xl text-blue-800 font-bold'>
                Easy
            </h5>
            <p className='items-center px-14  text-gray-500 '>
            Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud.
             </p>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Features;
=======
    <Container>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          <Heading>{heading}</Heading>
          {description && <Description>{description}</Description>}
        </HeadingContainer>
        <StatsContainer>
          {stats.map((stat, index) => (
            <Stat key={index}>
              <StatValue>{stat.value}</StatValue>
              <StatKey>{stat.key}</StatKey>
            </Stat>
          ))}
        </StatsContainer>
      </ContentWithPaddingXl>
    </Container>
  );
};
>>>>>>> 53a91e93449bd084ccbb43fd9fbddd26def88fa3
