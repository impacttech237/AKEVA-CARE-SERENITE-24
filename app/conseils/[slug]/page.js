import { redirect } from "next/navigation";
import { articles } from "@/lib/content";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export default function Page({ params }) {
  redirect(`/blog/${params.slug}`);
}
