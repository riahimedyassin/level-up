import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Search } from "lucide-react";
import Link from "next/link";

export function DocsHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center px-4 gap-4">
        <SidebarTrigger />

        <Link href={"/"} className="flex items-center gap-2 font-semibold">
          <img src="/logo.png" alt="logo" width={20} height={20} />
          <span className="text-lg">LevelUP</span>
        </Link>

        <div className="flex-1 flex items-center justify-center max-w-md mx-auto">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search documentation..."
              className="pl-9 bg-muted/50"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a href="https://github.com/riahimedyassin/level-up" target="_blank" className="cursor-pointer">
            <Button variant="ghost" size="sm">
              GitHub
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}
