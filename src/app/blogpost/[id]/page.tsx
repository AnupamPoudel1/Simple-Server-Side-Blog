import { notFound } from "next/navigation";

type BlogType = {
  id: number;
  title: string;
  body: string;
};

type Params = Promise<{ id: string }>;

export default async function BlogPost(props: { params: Params }) {
  const params = await props.params;
  const { id } = params;

  if (!id) return notFound();

  const fetchBlog = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/posts/${id}`, {
        cache: "no-store",
      });

      if (!response.ok) return null;

      return await response.json();
    } catch (err) {
      console.error(err);
      return null;
    }
  };

  const blog: BlogType = await fetchBlog();

  if (!blog) return notFound();

  return (
    <main className="p-5 md:p-10 flex flex-col items-center justify-center gap-10 w-full">
      <article className="w-80 md:w-[500px] flex flex-col gap-10 justify-center items-center border border-white rounded-md py-5 px-2 md:py-10 md:px-6">
        <h1 className="font-extrabold text-2xl">{blog.title}</h1>
        <div className="flex flex-col items-center justify-center gap-4">
          <p>{blog.body}</p>
          <p>{blog.body}</p>
          <p>{blog.body}</p>
          <p>{blog.body}</p>
          <p>{blog.body}</p>
        </div>
      </article>
    </main>
  );
}
