import Container from "../../common/Container";
import Button from "../../common/Button";

import blogOne from "../../../assets/images/blog-1.png";
import blogTwo from "../../../assets/images/blog-2.png";

const blogs = [
  {
    id: 1,
    image: blogOne,
    category: "Restaurant",
    date: "12 Mar, 2024",
    title: "The Art of Flavor: How We Craft Each Plate with Care.",
  },
  {
    id: 2,
    image: blogTwo,
    category: "Chinese Food",
    date: "12 Mar, 2024",
    title: "A Taste of Tradition: The Story Behind Our Signature Dish.",
  },
];

const BlogSection = () => {
  return (
    <section className="bg-[#F8F1E8] py-28">
      <Container>
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em]">
            ⊛ Blog
          </span>

          <h2 className="mt-5 text-6xl font-black uppercase leading-tight">
            Discover Delicious Ideas And
            <br />
            Insights From Our Kitchen.
          </h2>
        </div>

        {/* Blog Cards */}
        <div className="mt-20 grid gap-10 lg:grid-cols-2">
          {blogs.map((blog) => (
            <article key={blog.id} className="rounded-[36px] bg-white p-8">
              <img
                src={blog.image}
                alt={blog.title}
                className="h-[320px] w-full rounded-[20px] object-cover"
              />

              <div className="mt-8 text-center">
                <p className="text-sm uppercase text-gray-600">
                  ({blog.category}) • {blog.date}
                </p>

                <h3 className="mx-auto mt-5 max-w-md text-3xl font-semibold leading-tight">
                  {blog.title}
                </h3>

                <Button className="mt-10 px-8 py-4">Read Full Blog</Button>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default BlogSection;
