import React from 'react';
import Paragraph from '../layer/Paragraph';
import Button from '../layer/Button';
import Heading from '../layer/Heading';
import QuoteComponent from '../layer/QuoteComponent';
import Img from '../layer/Img';
import CrossMessage from '../layer/CrossMessage';
import BrainMassage from '../layer/BrainMassage';
import DownMassage from '../layer/DownMassage';
import ModuleCard from './ModuleCard';
import Module from './Module';

const PricingSection = () => {




  return (
    <>
      <section className="text-center flex flex-col items-center">
        <Paragraph className='text-center max-w-[700px]'>
          Read the page if you want every single piece of information. Or just scroll to the main details by clicking the button below.
        </Paragraph>
        <div className="flex items-center justify-center w-full gap-x-10 gap-y-5 max-md:flex-col">
          <Button buttonName='Scroll to the Details' bgFrom="#4c8eff" bgTo="#73baf8" />
          <Button buttonName='Explore pricing options' bgFrom="#854CFF" bgTo="#B573F8" />
        </div>
      </section>
      <section>
        {/* DetailSection - Enter the new era of React. */}
        <Heading className='mt-20 '>
          Enter the new era of React.
        </Heading>

        <Paragraph className="text-left">
          <p>Here’s a little known fact.</p>
          <p className="font-bold my-10">17% of the top 1 million websites use Next.js.</p>
          <p>Are these some nameless websites? Who are these companies?</p>
          <p className="">Take a look.</p>
        </Paragraph>
      </section>
      <section className="">
        {/* Image with lazy loading */}
        <Img src='assets/courses/images/logos.webp' />

        {/* Text content */}

        <Paragraph className="text-left">
          <p>Again, it's a little known fact.</p>
          <p className="font-semibold mt-6 max-w-[800px]">But the best companies have already realized they need to use Next.js or get left behind.</p>
        </Paragraph>
      </section>


      <QuoteComponent>
        "Great. I'll use Next right now."
      </QuoteComponent>


      <section>
        <Paragraph>
          <p>Here’s the catch.

          </p>
          <p className='my-5'>Me and these massive companies don’t use Next like plain React.

          </p>
          <p className='mb-5'>If you try using Next.js like React, you’ll make a mediocre app and miss the whole point of Next.

          </p>
          <p>That’s because you’re taught that...</p>
        </Paragraph>
      </section>

      <QuoteComponent>
        "Next.js is just good old React"
      </QuoteComponent>

      <section>
        <Paragraph>
          <p className='font-bold'>
            Wrong. Next.js is an iceberg.
          </p>
          <p className='my-5'>
            You <b><i>think</i></b> you know it because you only see the 15% of it that’s above water.
          </p>
          <p>
            So you start coding. And like the Titanic sinking after hitting an iceberg they thought was tiny, what you didn’t know gets you.
          </p>
        </Paragraph>
      </section>

      <Img src="assets/courses/images/iceberg.webp" />

      <section>
        <Paragraph className='flex flex-col gap-5'>
          <p className='font-bold'>
            The same thing happened to me.
          </p>
          <p>
            I jumped into <b>the new Next.js</b> thinking it’s the same <b>Next</b> and <b>React</b> I’m used to.
          </p>
          <p>
            My team and I built our website with it.
          </p>
          <p>
            After adding line after line of code for months?
          </p>
          <p>
            Without realizing it the app turned into a slow client-side mess.
          </p>
        </Paragraph>
      </section>

      <Img src="assets/courses/images/stats.webp" />

      <CrossMessage>
        It’s not your fault. What’s out there sucks
      </CrossMessage>

      <section>
        <Paragraph className='flex flex-col gap-5'>
          <p className='font-bold'>
            Next.js 13 & 14 are new. There is no good way to learn them out there.
          </p>
          <p>
            Every piece of content you see is basic.
          </p>
          <p>
            It doesn’t teach you the best practices.
          </p>
          <p>
            Most of the people teaching it have no experience building massive production-ready apps with Next 14 - so they give superficial advice (if the advice is up to date at all).
          </p>
          <p>
            You don’t want to read the never-ending docs or 7153 articles you need to learn it all.
          </p>
          <p className='font-bold'>
            What if you could just take one course with...
          </p>
        </Paragraph>



      </section>
      <BrainMassage>
        A whole new approach to learning
      </BrainMassage>

      <section>
        <Paragraph className='flex flex-col gap-5'>
          <p className='font-bold'>
            I spent almost a year deep in the Next.js ocean.
          </p>
          <ul className='list-disc list-inside flex flex-col gap-5'>
            <li>
              Building massive 5 and 6-figure apps for clients on our agency side.
            </li>
            <li>
              Making tutorials & mentoring devs.
            </li>
            <li>
              Rebuilding my course platform from scratch because the old way of building Next & React apps made production apps a mess.
            </li>
          </ul>
          <p className='font-bold'>
            After all this? After countless daily requests for a Next14 course & after perfecting my website?
          </p>
        </Paragraph>



      </section>

      <Img className='rounded-xl' src="/assets/courses/images/stats-good.png" />

      <p className="base-semibold text-gradient_orange mt-6 sm:mt-5">
        I finally decided on this three-part learning method for learning Next14 so you don’t have to struggle:
      </p>
      <h3 className="base-semibold sm:heading3 w-full my-2 sm:mb-3 sm:mt-6">
        1. <span className="text-gradient_blue">Deep dive</span> & understand how it works
      </h3>

      <section>
      <Paragraph className='flex flex-col gap-5'>
        <p className='font-bold'>
          Just knowing how to do something isn’t enough.
        </p>
        <p>
          Not with <b>ChatGPT</b>, <b>GitHub Copilot</b>, and new tools that can output better code every day.
        </p>
        <p>
          See, understanding how the web actually works makes you future-proof.
        </p>
        <p>
          You’ll be able to prompt little pieces of code and bring them together into a well-architectured app instead of getting replaced.
        </p>
        <p>
          Here’s a little demo of our deep dive lectures.
        </p>
      </Paragraph>
      <Img src="/assets/courses/images/deep-dive.gif" />
    </section>

    <section className="flex-start mt-10 w-full  flex-col gap-3 sm:mt-12 sm:gap-4">
      <h3 className="base-semibold sm:heading3 self-start my-2 sm:mb-3 sm:mt-6">
        2. <span className="text-gradient_blue">Build and deploy</span> a complex app
      </h3>
      <Paragraph className="body-regular sm:paragraph-regular text-white-800 lg:w-[700px] flex w-full flex-col gap-4 sm:w-[345px] sm:gap-6">
        <p>If you have half the pieces of a puzzle?</p>
        <p>You have a terrible puzzle.</p>
      </Paragraph>
      <Img src="/assets/courses/images/puzzle.webp" />
      <Paragraph className="body-regular sm:paragraph-regular text-white-800 lg:w-[700px] flex w-full flex-col gap-4 sm:mt-2 sm:gap-6">
        <p>
          That’s why theory, short tutorials, and docs aren’t enough. How do you actually bring it all together into a production-ready app?
        </p>
        <p className="max-sm:leading-[22px]">
          That’s what separates a great dev from the mediocre junior who just takes on tasks given from above like a robot.
        </p>
        <p>And finally...</p>
      </Paragraph>
    </section>

    <section className="flex-start mt-6 w-full  flex-col gap-4 pr-2 sm:mt-10 sm:gap-4">
      <h3 className="base-semibold sm:heading3 my-2 sm:mb-3 sm:mt-6">
        3. <span className="text-gradient_orange">Active lessons</span> so you’re 100% confident you can code it yourself
      </h3>
      <Paragraph className="body-regular sm:paragraph-regular text-white-800 lg:w-[700px] flex w-full flex-col gap-5 sm:gap-7">
        <p>Look. The biggest issue with project-based tutorials is that people sometimes just follow along.</p>
        <p>You need to practice yourself because no one will code the app for you.</p>
        <p>This is why I added Active lessons.</p>
        <p>Here you code the most important parts of the app.</p>
        <p>You master the features of Next14 to guarantee you walk away with the skills to build stunning apps with Next14 on your own.</p>
        <p>Here’s what these lessons look like.</p>
      </Paragraph>

      <div className="flex-center w-full">
        <div className="flex-center mt-12 overflow-hidden rounded-[20px] lg:w-[899px] 3xl:w-[80%] !lg:w-full !3xl:w-full !w-full">
          <video
            controls
            preload="none"
            poster="https://www.jsmastery.pro/assets/courses/images/lesson.png"
            className="w-full overflow-hidden"
          >
            <source src="https://player.vimeo.com/progressive_redirect/playback/867278363/rendition/720p/file.mp4?loc=external&log_user=0&signature=a96c109fc17ffeb87686ef9b50e14123b7bc56bc0544d60c7a5eeaf7d56c2ab9" />
          </video>
        </div>
      </div>
    </section>

    <section className="mt-12 w-full  gap-0 sm:mt-6">
      <h3 className="base-semibold sm:heading3 my-2 sm:mb-3 sm:mt-6">
        🥁 And the unique app you’ll build is...
      </h3>
      <p className="base-semibold text-gradient_blue sm:mt-7">
        A modern StackOverflow clone.
      </p>
      <div className="flex-center mt-12 overflow-hidden rounded-[20px] lg:w-[899px] 3xl:w-[80%] !lg:w-full !3xl:w-full !w-full">
        <video
          controls
          preload="none"
          poster="https://i.ibb.co/ZxfmJV7/image-309.png"
          className="w-full overflow-hidden"
        >
          <source src="https://player.vimeo.com/progressive_redirect/playback/867166075/rendition/1080p/file.mp4?loc=external&log_user=0&signature=db9564f2f4aa62a44c8abd662e323b02f1fa8085495fe9252df2ef4dfd6e90d0" />
        </video>
      </div>

      <Paragraph className="body-regular sm:paragraph-regular text-white-800 lg:w-[700px] mt-7 flex w-full flex-col gap-7 sm:mt-9">
        <p>Not an Amazon or Youtube clone every dev and their mother has in their portfolio 😬</p>
        <p>Nope.</p>
        <div className="body-regular sm:paragraph-regular mt-[-10px] sm:mt-0">
          The DevOverflow app has:
          <ol className="flex list-decimal flex-col gap-3 [&>li]:ml-[22px] sm:[&>li]:ml-8">
            <li className="body-semibold sm:paragraph-semibold mt-6 sm:mt-7">
              A recommendation system for posts (no one teaches this)
            </li>
            <li>Global database data-fetching</li>
            <li className="body-semibold sm:paragraph-semibold">AI generated answers to questions</li>
            <li>Badge & Reputation System</li>
            <li className="body-semibold sm:paragraph-semibold">Views and Voting Mechanism</li>
            <li className="body-semibold sm:paragraph-semibold">Filter and Pagination for almost all pages & so much more</li>
          </ol>
        </div>
      </Paragraph>

      <div className='flex flex-col items-center'>
      <p className="font-semibold mt-12 text-center">“Okay okay, you convinced me.”</p>
      <Button bgFrom="#4c8eff" bgTo="#73baf8" buttonName="Take me to the pricing section!" />
      </div>
    </section>

    <section className="my-20">
      <h3 className="base-semibold">
        Master the most sought-after tech stack of 2023 and beyond
      </h3>
      <Img src="/assets/courses/images/logos-short.webp" />
      <Paragraph className="body-regular sm:paragraph-regular w-full text-white-800 lg:w-[700px] mt-5 flex flex-col gap-[28px] sm:mt-2">
        <p>
          You’ll need intermediate knowledge of JavaScript (e.g., array methods, spread, try catch...) and beginner knowledge of React (components & JSX syntax, managing state, functional components) to take the course.
        </p>
        <p>
          If you’re unfamiliar with these, don’t worry. We’ll provide you the resources to get you up to speed, but it definitely won’t be as easy as if you had experience beforehand.
        </p>
        <p>
          If you’re asking if you need to know TypeScript - you don’t. Here at JSM, we learn by building apps, and this is the perfect chance to learn it since TypeScript is used in most industry projects.
        </p>
      </Paragraph>
    </section>


    <section>
      <Heading>The reviews are in.(এই সেকশন টা বাদ আছে)</Heading>
    </section> 


    <section className='mt-20'>
      <DownMassage>
      See what you’ll learn
      </DownMassage>

      {/* <div className='grid grid-cols-2'>
        <ModuleCard />
      </div> */}
      <Module/>
    </section>

    </>
  );
};

export default PricingSection;
