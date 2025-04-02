import BlogCard from "@/components/BlogCard";

type BlogType = {
  id: number;
  title: string;
  body: string;
  tags: string[];
};

export default async function Home() {
  const getBlogs = async () => {
    try {
      const response = await fetch("https://dummyjson.com/posts");
      const blog_res = await response.json();
      return blog_res.posts;
    } catch (err) {
      console.error("Couldnt Fetch Data", err);
      return [];
    }
  };

  const blogs: BlogType[] = await getBlogs();

  return (
    <main className="w-full flex flex-col justify-center items-center px-10 py-10">
      <h1 className="flex text-center w-full justify-center items-center text-3xl py-4 px-6 font-extrabold">
        My Dummy Blogs
      </h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center gap-x-5 gap-y-10 mt-10">
        {blogs.length > 0 ? (
          blogs.map((blog: any, index: any) => {
            return (
              <BlogCard
                key={index}
                title={blog.title}
                body={blog.body}
                blogpostLink={`blogpost/${blog.id}`}
              />
            );
          })
        ) : (
          <div>No Blogs Found</div>
        )}
      </div>
    </main>
  );
}
