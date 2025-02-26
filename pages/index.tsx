import BackgroundLines from "@/components/background-lines";
import MotionQueue from "@/components/MotionProvider/motion-queue";
import { AnimationQueueAnimationProps } from "@/components/MotionProvider/types";
import DefaultLayout from "@/layouts/default";
import { Spinner } from "@heroui/spinner";
const headerText = "Julia".split("");

export default function Home() {
  return (
    <DefaultLayout>
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
        <div className="w-full p-4 h-auto items-center justify-center flex flex-row gap-2">
          <Spinner color="primary" size="md" />{" "}
          <span>| Application Initializing...</span>
        </div>
      </div>
    </DefaultLayout>
  );
}
