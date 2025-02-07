import { json, type LoaderFunction, type MetaFunction } from "@remix-run/node";
import { tinaField, useTina } from "tinacms/dist/react";
import client from "tina/__generated__/client";
import { useLoaderData } from "@remix-run/react";
import type { PageQuery } from "tina/__generated__/types";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader: LoaderFunction = async () => {
  const response = await client.queries.page({ relativePath: "index.mdx" });
  return json(response);
};

// Icon object list.
const Icon = {
  lightning: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
    >
      <path
        d="M8.51851 12.0741L7.92592 18L15.6296 9.7037L11.4815 7.33333L12.0741 2L4.37036 10.2963L8.51851 12.0741Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  click: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
    >
      <path
        d="M4.561 12.749L3.15503 14.1549M3.00811 8.99944H1.01978M3.15503 3.84489L4.561 5.2508M8.3107 1.70923L8.3107 3.69749M13.4655 3.84489L12.0595 5.2508M18.1868 17.0974L16.635 18.6491C16.4636 18.8205 16.1858 18.8205 16.0144 18.6491L13.568 16.2028C13.383 16.0178 13.0784 16.0347 12.915 16.239L11.2697 18.2956C11.047 18.5739 10.6029 18.4847 10.505 18.142L7.85215 8.85711C7.75756 8.52603 8.06365 8.21994 8.39472 8.31453L17.6796 10.9673C18.0223 11.0653 18.1115 11.5094 17.8332 11.7321L15.7766 13.3773C15.5723 13.5408 15.5554 13.8454 15.7404 14.0304L18.1868 16.4767C18.3582 16.6481 18.3582 16.926 18.1868 17.0974Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  docs: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
    >
      <path
        d="M9.99981 10.0751V9.99992M17.4688 17.4688C15.889 19.0485 11.2645 16.9853 7.13958 12.8604C3.01467 8.73546 0.951405 4.11091 2.53116 2.53116C4.11091 0.951405 8.73546 3.01467 12.8604 7.13958C16.9853 11.2645 19.0485 15.889 17.4688 17.4688ZM2.53132 17.4688C0.951566 15.8891 3.01483 11.2645 7.13974 7.13963C11.2647 3.01471 15.8892 0.951453 17.469 2.53121C19.0487 4.11096 16.9854 8.73551 12.8605 12.8604C8.73562 16.9853 4.11107 19.0486 2.53132 17.4688Z"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  discord: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="20"
      viewBox="0 0 24 20"
      fill="none"
      className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
    >
      <path
        d="M15.0686 1.25995L14.5477 1.17423L14.2913 1.63578C14.1754 1.84439 14.0545 2.08275 13.9422 2.31963C12.6461 2.16488 11.3406 2.16505 10.0445 2.32014C9.92822 2.08178 9.80478 1.84975 9.67412 1.62413L9.41449 1.17584L8.90333 1.25995C7.33547 1.51794 5.80717 1.99419 4.37748 2.66939L4.19 2.75793L4.07461 2.93019C1.23864 7.16437 0.46302 11.3053 0.838165 15.3924L0.868838 15.7266L1.13844 15.9264C2.81818 17.1714 4.68053 18.1233 6.68582 18.719L7.18892 18.8684L7.50166 18.4469C7.96179 17.8268 8.36504 17.1824 8.709 16.4944L8.71099 16.4904C10.8645 17.0471 13.128 17.0485 15.2821 16.4947C15.6261 17.1826 16.0293 17.8269 16.4892 18.4469L16.805 18.8725L17.3116 18.717C19.3056 18.105 21.1876 17.1751 22.8559 15.9238L23.1224 15.724L23.1528 15.3923C23.5873 10.6524 22.3579 6.53306 19.8947 2.90714L19.7759 2.73227L19.5833 2.64518C18.1437 1.99439 16.6386 1.51826 15.0686 1.25995ZM16.6074 10.7755L16.6074 10.7756C16.5934 11.6409 16.0212 12.1444 15.4783 12.1444C14.9297 12.1444 14.3493 11.6173 14.3493 10.7877C14.3493 9.94885 14.9378 9.41192 15.4783 9.41192C16.0471 9.41192 16.6209 9.93851 16.6074 10.7755ZM8.49373 12.1444C7.94513 12.1444 7.36471 11.6173 7.36471 10.7877C7.36471 9.94885 7.95323 9.41192 8.49373 9.41192C9.06038 9.41192 9.63892 9.93712 9.6417 10.7815C9.62517 11.6239 9.05462 12.1444 8.49373 12.1444Z"
        strokeWidth="1.5"
      />
    </svg>
  ),
  deployment: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
    >
      <path
        d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5M10 13.3333L10 2.5M10 2.5L5.83333 6.66667M10 2.5L14.1667 6.66667"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

export default function Index() {
  const loaderData = useLoaderData<typeof loader>();

  const { data } = useTina<PageQuery>(loaderData);

  const page = data.page;

  return (
    <div className="flex flex-col h-screen items-center justify-between">
      <div className="flex flex-col items-center gap-16 my-auto">
        <header className="flex flex-col items-center gap-9">
          <h1
            data-tina-field={tinaField(page, "header")}
            className="leading text-2xl font-bold text-gray-800 dark:text-gray-100"
          >
            {page.header} <span className="sr-only">Remix</span>
          </h1>
          <div className="h-[144px] w-[434px]">
            <img
              data-tina-field={tinaField(page, "logo.light")}
              src={page.logo?.light || "#"}
              alt="Remix"
              className="block w-full dark:hidden"
            />
            <img
              data-tina-field={tinaField(page, "logo.dark")}
              src={page.logo?.dark || "#"}
              alt="Remix"
              className="hidden w-full dark:block"
            />
          </div>
        </header>
        <nav className="flex flex-col items-center justify-center gap-4 rounded-3xl border border-gray-200 p-6 dark:border-gray-700">
          <p className="leading-6 text-gray-700 dark:text-gray-200">
            What&apos;s next?
          </p>
          <ul>
            {page.links?.map((link, index) => (
              <li
                key={link?.url || "#"}
                data-tina-field={tinaField(page, `links.${index}`)}
              >
                <a
                  className="group flex items-center gap-3 self-stretch p-3 leading-normal text-blue-700 hover:underline dark:text-blue-500"
                  href={link?.url || "#"}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link?.icon ? Icon[link?.icon] : null}
                  {link?.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex w-full justify-center py-6 relative overflow-hidden dark:bg-gray-950 bg-white">
        <div className="absolute inset-0 bg-footer-gradient-light dark:bg-footer-gradient-dark animate-wave" />
        <div className="flex items-center gap-2 text-xl relative z-10">
          <img src="/llama.svg" alt="Tina CMS Llama Logo" className="w-[30px] h-auto" />
          <a 
            href="https://tina.io" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-700 dark:text-gray-200 no-underline pt-2 hover:text-[#EC4815]"
          >
            Powered by TinaCMS
          </a>
        </div>
      </div>
    </div>
  );
}