import { Rocket } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";
import { LightRays } from "@/components/ui/light-rays";
import Link from "next/link";

export const Hero = () => {
  const words = ["shine", "create", "succeed"];
  return (
    <div className="relative w-full overflow-hidden rounded-xl border">
      <section className="py-32">
        <div className=" text-center">
          <div className="mx-auto flex max-w-5xl flex-col gap-6">
            <h1 className="text-2xl font-semibold lg:text-6xl ">
              You have the chance to
              <FlipWords duration={1000} words={words} />
              <br />
            </h1>
            <p className="text-muted-foreground text-balance lg:text-lg">
              We help you navigate through the digital world, shape your vision
              and create your own luck.
            </p>
          </div>
          <Button asChild size="lg" className="mt-10">
            <Link href="/docs">
              <Rocket /> Explore More
            </Link>
          </Button>
        </div>
        <LightRays color="oklch(0.52 0.14 195)" />
      </section>
    </div>
  );
};
