import { Link } from "react-router-dom";

const BlogCard = ({ post }) => {
  return (
    <article className="rounded-[18px] bg-white p-4 md:p-5">
      {/* Image */}
      <div className="overflow-hidden rounded-[10px]">
        <img
          src={post.image}
          alt={post.title}
          className="aspect-[1.7/1] w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="px-2 pb-3 pt-6 text-center">
        <div className="flex items-center justify-center gap-2 text-[8px] uppercase text-[#171717]">
          <span>({post.category})</span>
          <span>•</span>
          <span>{post.date}</span>
        </div>

        <h2 className="mx-auto mt-3 max-w-[260px] text-sm font-medium leading-[1.15] text-[#171717]">
          {post.title}
        </h2>

        <Link
          to={`/blog/${post.slug}`}
          className="mt-5 inline-flex rounded-full bg-[#CA2F06] px-5 py-2.5 text-[8px] font-bold uppercase text-white transition hover:bg-[#a92504]"
        >
          Read Full Blog
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
