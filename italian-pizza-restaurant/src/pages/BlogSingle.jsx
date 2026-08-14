import { useParams } from "react-router-dom";
import { blogData } from "../data/blogData";

const BlogSingle = () => {
  const { slug } = useParams();

  const blog = blogData.find((post) => post.slug === slug);

  // In case the slug doesn't exist
  if (!blog) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">Blog post not found.</h1>
      </section>
    );
  }

  return (
    <main className="bg-[#fff7ef] min-h-screen">
      {/* Header */}
      <section className="pt-10 pb-12">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="mb-4 text-xs">⦿ HOME / BLOG / BLOG SINGLE</p>

          <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
            {blog.title}
          </h1>

          {/* Author information */}
          <div className="mt-8 flex items-center justify-between max-w-3xl mx-auto">
            <div className="flex items-center gap-3 text-left">
              {blog.authorImage && (
                <img
                  src={blog.authorImage}
                  alt={blog.author}
                  className="h-10 w-10 rounded-full object-cover"
                />
              )}

              <div>
                <p className="text-sm font-medium">{blog.author}</p>
                <p className="text-xs">{blog.authorRole}</p>
              </div>
            </div>

            <p className="text-xs uppercase">({blog.category})</p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="mx-auto max-w-6xl px-6">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full rounded-lg object-cover"
        />
      </section>

      {/* Article */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[80px_1fr]">
          {/* Date / Social */}
          <aside>
            <p className="text-xs leading-5 uppercase">{blog.date}</p>

            <div className="mt-6 flex flex-row gap-3 md:flex-col">
              <button className="flex h-8 w-8 items-center justify-center rounded-full bg-[#CA2F06] text-white">
                f
              </button>

              <button className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-xs">
                X
              </button>

              <button className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-xs">
                in
              </button>
            </div>
          </aside>

          {/* Article Content */}
          <article className="space-y-8">
            {/* Introduction */}
            <p className="text-sm leading-6">{blog.introduction}</p>

            {/* Sections */}
            {blog.sections?.map((section, index) => (
              <section key={index}>
                <h2 className="mb-4 text-xl font-semibold">
                  {section.heading}
                </h2>

                <p className="text-sm leading-7">{section.content}</p>
              </section>
            ))}

            {/* Quote */}
            {blog.quote && (
              <blockquote className="rounded-xl bg-[#CA2F06] px-8 py-6 text-white">
                <p className="text-base font-medium">"{blog.quote.text}"</p>

                <footer className="mt-4 text-sm">{blog.quote.author}</footer>
              </blockquote>
            )}

            {/* Conclusion */}
            {blog.conclusion && (
              <section>
                <h2 className="mb-4 text-xl font-semibold">
                  {blog.conclusion.heading}
                </h2>

                <p className="text-sm leading-7">{blog.conclusion.content}</p>
              </section>
            )}
          </article>
        </div>
      </section>
    </main>
  );
};

export default BlogSingle;
