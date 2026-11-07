"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { features } from "@/lib/features";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className="flex w-full flex-row gap-1 overflow-x-auto border-b border-black/10 p-3 md:w-56 md:flex-col md:border-r md:border-b-0 dark:border-white/10">
      <Link href="/" className="mb-0 mr-4 px-2 py-1 text-lg font-bold md:mb-4 md:mr-0">
        HowlHub
      </Link>
      {features.map((feature) => {
        const active = pathname === feature.href;
        return (
          <Link
            key={feature.href}
            href={feature.href}
            className={`whitespace-nowrap rounded-md px-3 py-2 text-sm ${
              active ? "bg-red-700 text-white" : "hover:bg-black/5 dark:hover:bg-white/10"
            }`}
          >
            {feature.label}
          </Link>
        );
      })}
    </nav>
  );
}
