import Card from "@/components/Card";
import PageHeader from "@/components/PageHeader";
import { features } from "@/lib/features";

// Placeholder for feature pages nobody has built yet.
export default function ComingSoon({ href }: { href: string }) {
  const feature = features.find((f) => f.href === href);

  return (
    <>
      <PageHeader title={feature?.label ?? "Coming soon"} description={feature?.description} />
      <Card title="Not built yet">
        Replace this page with the real feature. The file is <code>src/app{href}/page.tsx</code>.
      </Card>
    </>
  );
}
