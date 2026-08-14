import BlogCard from "./BlogCard";

import blogImage1 from "../../assets/images/blog-1.png";
import blogImage2 from "../../assets/images/blog-2.png";
import blogImage3 from "../../assets/images/blog-3.png";
import blogImage4 from "../../assets/images/blog-4.png";
import blogImage5 from "../../assets/images/blog-5.png";
import blogImage6 from "../../assets/images/blog-6.png";

const posts = [
  {
    image: blogImage1,
    category: "RESTAURANT",
    date: "12 Mar, 2024",
    title: "The Art of Flavor: How We Craft Each Pizza with Care.",
    slug: "the-art-of-flavor-how-we-craft-each-plate-with-care",
  },
  {
    image: blogImage2,
    category: "CHINESE FOOD",
    date: "12 Mar, 2024",
    title: "A Taste of Tradition: The Story Behind Our Signature Dish.",
    slug: "a-taste-of-tradition",
  },
  {
    image: blogImage3,
    category: "BUSINESS",
    date: "12 Mar, 2024",
    title: "Why Fresh Ingredients Make All the Difference in Every Bite.",
    slug: "why-fresh-ingredients-matter",
  },
  {
    image: blogImage4,
    category: "RESTAURANT",
    date: "12 Mar, 2024",
    title: "From Farm to Fork: Our Commitment to Local Sourcing.",
    slug: "from-farm-to-fork",
  },
  {
    image: blogImage5,
    category: "RESTAURANT",
    date: "12 Mar, 2024",
    title: "Behind the Scenes: A Day in the Life of Our Chefs.",
    slug: "behind-the-scenes-our-chefs",
  },
  {
    image: blogImage6,
    category: "CHINESE FOOD",
    date: "12 Mar, 2024",
    title: "Celebrating Flavors: The Inspiration Behind Our Seasonal Menu.",
    slug: "inspiration-behind-our-seasonal-menu",
  },
];

const BlogComponent = () => {
  return (
    <main className="min-h-screen bg-[#F8F1E8] px-6 py-20">
      {/* Header */}
      <div className="mx-auto max-w-3xl text-center">
        <span className="text-[9px] font-medium uppercase text-[#171717]">
          <span className="text-[#CA2F06]">⊙</span> Home / Blog
        </span>

        <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight text-[#171717] md:text-5xl">
          Discover Delicious Ideas and
          <br />
          Insights from Our Kitchen.
        </h1>
      </div>

      {/* Blog Grid */}
      <div className="mx-auto mt-12 grid max-w-[850px] grid-cols-1 gap-5 md:grid-cols-2">
        {posts.map((post) => (
          <BlogCard key={post.title} post={post} />
        ))}
      </div>
    </main>
  );
};

export default BlogComponent;
