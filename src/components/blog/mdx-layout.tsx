import TableOfContents from "./table-of-contents";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-24">
      <div className="mx-auto max-w-5xl grid-cols-3 gap-5 px-5 md:grid">
        <div
          id="content"
          className="content prose prose-zinc dark:prose-invert prose-h1:md:text-7xl prose-h1:text-5xl prose-h1:mb-8 prose-h2:scroll-mt-36 prose-h1:lg:text-7xl prose-h1:scroll-mt-36 prose-h3:scroll-mt-36 prose-hr:border-2 prose-hr:border-foreground/70 col-span-2"
        >
          {children}
        </div>
        <TableOfContents />
      </div>
    </div>
  );
}
