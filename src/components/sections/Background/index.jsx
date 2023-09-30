import { useRef, useEffect, useContext, useState } from "react";

import SelftQoutes from "./qoutes";

const MyStory = (props) => {
  const myStory = useRef(null);
  const storyFirstParagraph = useRef(null);
  const storySecondParagraph = useRef(null);
  const storyThirdParagraph = useRef(null);

  useEffect(() => {
    const myStoryEl = myStory.current;
    const storyFirstParagraphEl = storyFirstParagraph.current;
    const storySecondParagraphEl = storySecondParagraph.current;
    const storyThirdParagraphEl = storyThirdParagraph.current;

    ScrollTrigger.create({
      trigger: myStoryEl,
      start: "top bottom",
      end: "top 20%",
      scrollContainer: window,
      scrub: true,
      onEnter: () => {
        gsap.from(storyFirstParagraphEl, {
          opacity: 0,
          x: -80,
          duration: 2,
        });
        gsap.to(storyFirstParagraphEl, {
          opacity: 1,
          x: 0,

          duration: 2,
        });
        gsap.from(storySecondParagraphEl, {
          opacity: 0,
          x: 80,
          duration: 3,
        });
        gsap.to(storySecondParagraphEl, {
          opacity: 1,
          x: 0,
          duration: 3,
        });
        gsap.from(storyThirdParagraphEl, {
          opacity: 0,
          x: -80,
          duration: 4,
        });
        gsap.to(storyThirdParagraphEl, {
          opacity: 1,
          x: 0,
          duration: 4,
        });
      },
    });
  }, [props.isAboutVisible]);

  return (
    <>
      <SelftQoutes isAboutVisible={props.isAboutVisible} />
      <h1 className="uppercase text-3xl font-semibold pb-5   2xl:text-5xl 2xl:pb-10">
        My Story
      </h1>
      <div ref={myStory} id="backGroundSection" className="space-y-4">
        <p ref={storyFirstParagraph} className="indent-10 2xl:text-[22px]">
          I graduated with a Bachelor of Science in Computer Science in 2022. My
          love for computers began with video games,yip! just like any normal
          kid. Back then, I didn't have access to gadgets and other resources
          due to my family's financial limitations. Nevertheless, I would always
          find a way to play games and surf the internet. I was even willing to
          skip meals and save up my daily allowance just to rent a computer for
          an hour or two every day. It's not a story I typically share since
          it's not worth sharing, but those days hold a special part in my life
          as they mark the beginning of my{" "}
          <span className="text-c_Orange">
            Passion and Curiosity for technologies
          </span>
          .
        </p>
        <br />
        <p ref={storySecondParagraph} className="indent-10 2xl:text-[22px]">
          I met programming when I started college. To be honest, I wasn't the
          sharpest one in the room when it came to programming. I didn't possess
          the ultra-mega-alpha-elon-zuckerberg level of logical thinking. I was
          just your average guy, not at the back, but not exactly a front-row
          student either.But I've always believed that there's something within
          me, something not so extraordinary but enough to make myself feel
          fulfilled and hopefully some people around me. And, damn, I absolutely
          love the art of creating something out of nothing, and{" "}
          <span className="text-c_Orange">Programming </span>
          has given me that quirk. That's why I{" "}
          <span className="text-c_Orange">Find joy in it</span>, even when I
          don't grasp or understand things on the first try. I kept at it, and
          before I knew it, it became part of my life.
        </p>
        <br />
        <p ref={storyThirdParagraph} className="indent-10 2xl:text-[22px]">
          Okiii, you may have just wasted some time reading something seemingly
          pointless again. But I wanted to convey a random message i just made
          up: if you feel like you're lacking something in life, whether it's
          innate talent like intelligence or even resources, you can compensate
          for it with time and effort. And most importantly, be patient with the
          process. I'm far from being a wildly successful individual , I may
          even not become one lol! I'm just a random developer who's crafting
          random sentences to add more content to my personal site. Anyway,
          thank you for your time, and remember to be kind, especially to
          yourself. Forgive your mistakes, and{" "}
          <span className="text-c_Orange">
            Strive for Personal Fulfillment!
          </span>
        </p>
      </div>
    </>
  );
};

export default MyStory;
