import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { Loader2Icon } from "lucide-react";

export function Programs() {
  return (
    <section id="programs" className="py-20 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Our Programs
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
            Comprehensive courses designed to empower communities with the
            skills they need to thrive in the digital age.
          </p>
        </div>

        <Empty>
          <EmptyMedia variant="icon">
            <Loader2Icon className="animate-spin" />
          </EmptyMedia>
          <EmptyHeader>
            <EmptyTitle>Coming soon</EmptyTitle>
            <EmptyDescription>
              Our programs will be published ASAP.
            </EmptyDescription>
          </EmptyHeader>
        </Empty>
      </div>
    </section>
  );
}
