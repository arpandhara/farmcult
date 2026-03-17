import WfcHeader from "../../components/WhyFarmcult/WfcHeader";
import ContactSection from "../../components/ContactSection";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Link } from "react-router-dom";
import blogs from "../../assets/docs/blogs.js";
import { useEffect, useState } from "react";

const Blog = () => {
  const { id } = useParams();

  const blog = blogs.find((b) => b.id === Number(id));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  const selectedBlogs = blogs.filter(b => blog.selectedIds.includes(b.id));
  const [content, setContent] = useState("");
  
    useEffect(() => {
      fetch(`${blog.content}`)
        .then((res) => res.text())
        .then((text) => setContent(text));
    }, [blog.content]);

  return (
    <div className="blog-page">
      <WfcHeader tag="BLOG" title={blog.title} subtitle={blog.description} />
      <div
        className="w-full h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${blog.image})`,
        }}
      />
      <section className="flex justify-center px-16 py-16">
        <div className="max-w-[1152px] flex gap-16">
          {/* Article */}
          <div className="max-w-[788px] text-[15px] leading-[29px] text-[#343434] prose lg:prose-lg">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
          </div>

          {/* Sidebar */}
          <div className="w-[300px] h-min border-x border-[#DEDEDE] px-5 flex flex-col gap-6">
            <h3 className="text-lg font-bold">Our Farms in Action</h3>

            <p className="text-sm leading-7">
              Follow real projects, site updates, and behind-the-scenes farm
              progress.
            </p>

            <div className="flex gap-4 text-[#8DC83A]">
              <span>Instagram</span>
              <span>LinkedIn</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#ECECEC] px-16 py-16 flex justify-center">
        <div className="max-w-[1152px] flex gap-16">
          {/* Left text */}
          <div className="w-[300px] flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-6">
              <h2 className="text-[32px] font-medium">
                Ideas Driving Modern Farming
              </h2>

              <p className="text-sm leading-7">
                Industry updates, hydroponic knowledge, and practical insights
                shaping modern agriculture in India.
              </p>
            </div>

            <button className="bg-[#343434] text-white px-6 py-3 rounded-full w-fit">
              View All Blogs
            </button>
          </div>

          {/* Cards */}
          <div className="flex gap-6">
            {selectedBlogs.map((blog, i) => (
              <Link to={`/blog/${blog.id}`}>
                <div
                  key={i}
                  className="bg-white rounded-xl p-8 w-[382px] h-full flex flex-col gap-6 cursor-pointer hover:scale-[1.02] transition-transform duration-300 ease-in-out"
                >
                  <span className="bg-[#8DC83A40] px-3 py-1 rounded-full text-sm w-fit">
                    Blog
                  </span>

                  <img
                    src={blog.image}
                    className="rounded-xl h-[250px] object-cover"
                  />

                  <h3 className="font-bold text-lg">{blog.title}</h3>

                  <p className="text-sm leading-7">
                    {blog.description}
                  </p>

                  <span className="text-[#8DC83A] font-bold">{blog.date}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Blog;
