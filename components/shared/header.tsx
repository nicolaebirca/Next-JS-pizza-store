import React from "react";
import { cn } from "@/lib/utils";
import { Container } from "./container";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShoppingCart, User, ArrowRight } from "lucide-react";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn("border border-b", className)}>
      <Container className="flex items-center justify-between py-8">
        {/* Left side */}
        <div className="flex items-center gap-4">
          <Image src="/logo.png" alt="logo" width={35} height={35} />
          <div>
            <h1 className="text-2xl uppercase font-black">Next Pizza</h1>
            <p className="text-sm text-gray-400 leading-3">
              It couldn&apos;t be any more delicious
            </p>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-1">
          <Button
            variant="outline"
            className="relative group px-6 py-2 overflow-hidden isolate border border-border
    hover:bg-white hover:text-orange-500 transition-all duration-300"
          >
            <span
              className="flex items-center gap-2 relative z-10
      group-hover:-translate-y-4 group-hover:opacity-0 transition-all duration-300"
            >
              <User size={16} />
              Log in
            </span>

            <span
              className="absolute inset-0 flex items-center justify-center z-0
      translate-y-6 opacity-0 group-hover:opacity-100 group-hover:translate-y-0
      transition-all duration-300 text-orange-500 font-semibold"
            >
              Welcome
            </span>
          </Button>

          <div>
            <Button className="group relative">
              <b>4.99$</b>
              <span className="h-full w-[1px] bg-white/30 mx-3" />
              <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                <ShoppingCart className="h-4 w-4 relative" strokeWidth={2} />
                <b>3</b>
              </div>
              <ArrowRight className="w-5 absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};
