import MotionContainer from "@/components/MotionProvider/motion-container";
import MotionQueue from "@/components/MotionProvider/motion-queue";
import { AnimationQueueAnimationProps } from "@/components/MotionProvider/types";
import DefaultLayout from "@/layouts/default";

const headerText = "Julia.".split("");

export default function Home() {
  return (
    <DefaultLayout>
      <MotionContainer
        mode={["fadeIn"]}
        elementType="div"
        duration={6}
        className="fixed z-50 bg-gradient-to-r from-[#15a1d9fd] to-[#15a1d9fd]  h-[362px] w-[362px] rounded-full blur-[120px] -top-16 -left-16"
      />
      <div className="w-full h-auto absolute -translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2 z-20 items-center flex justify-center flex-col">
        <h2 className="flex flex-wrap gap-[0.5px] ">
          <MotionQueue
            elementType="span"
            animations={
              Array.from({ length: headerText.length }).fill({
                mode: ["filterBlurIn", "fadeRight", "funTwinkleToes"],
                duration: 1,
              }) as AnimationQueueAnimationProps[]
            }
            isDynamicallyQueued
            children={headerText}
            delayLogic="bounce"
            className="text-9xl font-extrabold tracking-tighter -mt-16"
            duration={1.5}
          />
        </h2>
      </div>
    </DefaultLayout>
  );
}
