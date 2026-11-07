import type { ReactNode } from "react";

type CardProps = {
  title: string;
  children: ReactNode;
};

// Basic box used on every page. Restyle it here and every page updates.
export default function Card({ title, children }: CardProps) {
  return (
    <section className="rounded-xl border border-black/10 p-4 shadow-sm dark:border-white/10">
      <h2 className="mb-2 font-semibold">{title}</h2>
      <div className="text-sm text-black/70 dark:text-white/70">{children}</div>
    </section>
  );
}
