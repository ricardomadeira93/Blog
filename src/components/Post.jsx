import { formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";

export default function Post({
  _id,
  title,
  summary,
  image,
  content,
  createdAt,
  author,
}) {
  return (
    <div className="">
      <div class="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
        <div class="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
          <a
            href="#"
            class="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
          >
            <img
              src="/api/uploads/098442cee8a00a5538202fec5c09e9ee.jpg"
              loading="lazy"
              alt="Photo by Minh Pham"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
          </a>
        </div>
        <div class="mb-10 md:mb-16">
          <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            {title}
          </h2>

          <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            {summary}
          </p>
        </div>
      </div>
    </div>
  );
}
