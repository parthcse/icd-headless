import { gql } from "@apollo/client";
import client from "../lib/apollo-client";

const GET_HOME_PAGE = gql`
  query GetHomePage {
    page(id: "home", idType: URI) {
      title
      content
    }
  }
`;

type HomePageQuery = {
  page: {
    title: string;
    content: string;
  } | null;
};

export default async function Home() {
  const { data } = await client.query<HomePageQuery>({
    query: GET_HOME_PAGE,
  });

  const page = data?.page ?? null;

  if (!page) {
    return (
      <main className="min-h-screen bg-zinc-50 px-4 py-16 text-center font-sans dark:bg-black dark:text-zinc-50">
        <div className="mx-auto max-w-2xl">
          <h1 className="mb-4 text-3xl font-semibold">Home page not found</h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Make sure you have a published WordPress page with the slug{" "}
            <span className="font-mono font-semibold">home</span> and that WPGraphQL is enabled.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-zinc-50 px-4 py-16 font-sans dark:bg-black dark:text-zinc-50">
      <div className="mx-auto flex max-w-3xl flex-col gap-8">
        <header className="border-b border-zinc-200 pb-6 dark:border-zinc-800">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
            Headless WordPress
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight">{page.title}</h1>
          <p className="mt-3 max-w-xl text-zinc-600 dark:text-zinc-400">
            This homepage is rendered in Next.js using content from your WordPress installation
            via WPGraphQL.
          </p>
        </header>

        <section className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100 dark:bg-zinc-950 dark:ring-zinc-800">
          <h2 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            Page content
          </h2>
          <div
            className="prose max-w-none prose-zinc dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: page.content }}
          />
        </section>

        <section className="rounded-2xl bg-gradient-to-r from-zinc-900 to-zinc-700 p-[1px] dark:from-zinc-800 dark:to-zinc-600">
          <div className="flex flex-col gap-4 rounded-2xl bg-zinc-950 px-8 py-6 text-zinc-50 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-semibold">Ready for the next step?</h2>
              <p className="mt-1 text-sm text-zinc-300">
                We can add custom ACF fields, more pages, and dynamic routes whenever you&apos;re
                ready.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
