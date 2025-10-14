"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import {
  BookMarked,
  BrickWall,
  ChevronRight,
  Gem,
  Goal,
  Lightbulb,
  Rocket,
  Telescope,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  {
    title: "Home",
    icon: Rocket,
    items: [
      { title: "Introduction", href: "/docs/introduction" },
      { title: "Meet the team", href: "/docs/team" },
      { title: "SDG", href: "/docs/sdgs" },
    ],
  },
  {
    title: "Problem Statement",
    icon: Lightbulb,
    items: [
      { title: "Overview", href: "/docs/problem-statement" },
      { title: "Details", href: "/docs/problem-statement-stats" },
    ],
  },
  {
    title: "Vision",
    icon: Telescope,
    items: [
      { title: "Basic Usage", href: "/docs/examples" },
      { title: "Advanced Patterns", href: "/docs/examples#advanced" },
    ],
  },
  {
    title: "Mission",
    icon: Goal,
    items: [
      { title: "Discussion", href: "/docs/api-reference" },
      { title: "Our missions", href: "/docs/api-reference#hooks" },
    ],
  },
  {
    title: "Challenges",
    icon: BrickWall,
    items: [
      { title: "Overview", href: "/docs/challenges" },
      { title: "Migation Strategy", href: "/docs/api-reference#hooks" },
    ],
  },
  {
    title: "Values",
    icon: Gem,
    items: [
      { title: "Saber", href: "/docs/api-reference" },
      { title: "Our missions", href: "/docs/api-reference#hooks" },
    ],
  },
  {
    title: "References",
    icon: BookMarked,
    items: [
      { title: "Papers", href: "/docs/references" },
      { title: "Statistics", href: "/docs/stats-references" },
    ],
  },
];

export function DocsSidebar() {
  const pathname = usePathname();
  const [openSections, setOpenSections] = useState<string[]>(["Home"]);

  const toggleSection = (title: string) => {
    setOpenSections((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Explore</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigation.map((section, index) => {
                const Icon = section.icon;
                const isOpen = openSections.includes(section.title);

                return (
                  <SidebarMenuItem key={index}>
                    <SidebarMenuButton
                      onClick={() => toggleSection(section.title)}
                      className="w-full"
                    >
                      <Icon className="h-4 w-4" />
                      <span>{section.title}</span>
                      <ChevronRight
                        className={cn(
                          "ml-auto h-4 w-4 transition-transform",
                          isOpen && "rotate-90"
                        )}
                      />
                    </SidebarMenuButton>

                    {isOpen && (
                      <SidebarMenuSub>
                        {section.items.map((item, index) => {
                          const isActive =
                            pathname === item.href ||
                            (item.href.includes("#") &&
                              pathname === item.href.split("#")[0]);

                          return (
                            <SidebarMenuSubItem key={index}>
                              <SidebarMenuSubButton asChild isActive={isActive}>
                                <Link href={item.href}>{item.title}</Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          );
                        })}
                      </SidebarMenuSub>
                    )}
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
