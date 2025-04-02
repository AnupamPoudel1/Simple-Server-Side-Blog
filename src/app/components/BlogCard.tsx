export default function BlogCard({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <div className="flex flex-col gap-4 justify-center items-center w-96 h-96 border border-white rounded-md bg-black px-4 py-6">
      <h2 className="text-xl font-extrabold h-[20%]">{title}</h2>
      <p className="h-[80%] overflow-y-scroll mt-5">{body}</p>
    </div>
  );
}
