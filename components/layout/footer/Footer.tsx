import { SiteContainer } from "@/components/layout/SiteContainer";
import { FooterMainGrid } from "./FooterMainGrid";
import { FooterBottomBar } from "./FooterBottomBar";

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={`bg-foreground text-background ${className ?? ""}`}>
      <SiteContainer>
        <div className="mx-auto w-full max-w-5xl">
          <div className="py-14 lg:py-16">
            <FooterMainGrid />
          </div>

          <div className="border-t border-background/10">
            <FooterBottomBar />
          </div>
        </div>
      </SiteContainer>
    </footer>
  );
}
