import Link from "next/link";

export default function BlogCard({
  title,
  body,
  blogpostLink,
}: {
  title: string;
  body: string;
  blogpostLink: string;
}) {
  return (
    <Link
      href={blogpostLink}
      className="flex flex-col gap-4 justify-center items-center h-96 border border-white rounded-md bg-black px-4 py-6 col-span-1"
    >
      <h2 className="text-xl font-extrabold h-[20%]">{title}</h2>
      <p className="h-[80%] overflow-y-scroll mt-5">{body}</p>
    </Link>
  );
}
