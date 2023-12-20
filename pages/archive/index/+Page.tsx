import Folder from "~icons/eva/folder-outline"
import * as m from "#lang/paraglide/messages"
import README from "#components/README"
import { userScrolledDown } from "#hooks/userScrolledDown"
import Button from "#components/Button"

export default function Page() {
  return (
    <div class="w-full">
      <section class="w-full">
        <div class="flex items-center lg:mt-6 mb-6 bg-light-zinc/95 backdrop-blur-xl dark:bg-black/90 sticky top-0 lg:top-14 z-50">
          <h1
            class={
              "transition-all tabular-nums " +
              (userScrolledDown(40)
                ? "font-medium py-2"
                : "text-3xl font-semibold lg:py-2")
            }
          >
            Archive
          </h1>
        </div>
        <div class="py-0.5 pb-8">
          <a
            href="/archive/projects"
            class="flex justify-between border-b border-b-zinc-100 dark:border-b-zinc-900 gap-4 leading-none md:items-center group/link py-4 transition-colors hover:bg-zinc-100 rounded-md dark:hover:bg-zinc-900"
          >
            <p class="font-medium leading-snug md:col-span-2 flex items-center">
              <Folder class="w-5 flex-shrink-0 text-zinc-400 mr-2" />
              Projects
            </p>
            <Button
              type="text"
              link="/archive/projects"
              class="relative md:ml-auto col-span-2 md:col-span-1 group-hover/link:underline"
              chevron
            >
              {m.button_open()}
            </Button>
          </a>
          <a
            href="/archive/short-projects"
            class="flex justify-between border-b border-b-zinc-100 dark:border-b-zinc-900 gap-4 leading-none md:items-center group/link py-4 transition-colors hover:bg-zinc-100 rounded-md dark:hover:bg-zinc-900"
          >
            <p class="font-medium leading-snug md:col-span-2 flex items-center">
              <Folder class="w-5 flex-shrink-0 text-zinc-400 mr-2" />
              Short Projects
            </p>
            <Button
              type="text"
              link="/archive/projects"
              class="relative md:ml-auto col-span-2 md:col-span-1 group-hover/link:underline"
              chevron
            >
              {m.button_open()}
            </Button>
          </a>
          <a
            href="/archive/copyables"
            class="flex justify-between gap-4 leading-none md:items-center group/link py-4 transition-colors hover:bg-zinc-100 rounded-md dark:hover:bg-zinc-900"
          >
            <p class="font-medium leading-snug md:col-span-2 flex items-center">
              <Folder class="w-5 flex-shrink-0 text-zinc-400 mr-2" />
              Copyables
            </p>
            <Button
              type="text"
              link="/archive/projects"
              class="relative md:ml-auto col-span-2 md:col-span-1 group-hover/link:underline"
              chevron
            >
              {m.button_open()}
            </Button>
          </a>
        </div>
        <README>
          <p class="text-zinc-500 max-w-lg dark:text-zinc-400">
            {m.archive_description()}
          </p>
        </README>
      </section>
    </div>
  )
}
