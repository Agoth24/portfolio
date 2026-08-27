import { BlogPosts } from 'app/components/posts'
import { getBlogPosts } from 'app/blog/utils'

export const metadata = {
  title: 'Writing',
  description: 'Some throwaway thoughts.',
}

export default function Page() {
  let hasPosts = getBlogPosts().length > 0

  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        Some Throwaway Thoughts
      </h1>
      {hasPosts ? (
        <BlogPosts />
      ) : (
        <p className="text-neutral-600 dark:text-neutral-400">
          Writing soon — in the meantime, find me on{' '}
          <a
            href="https://www.linkedin.com/in/agoth-arop-9b19203a3/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-neutral-400 dark:decoration-neutral-600 underline-offset-2 transition-all hover:text-neutral-800 dark:hover:text-neutral-200"
          >
            LinkedIn
          </a>{' '}
          or{' '}
          <a
            href="https://github.com/agoth24"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-neutral-400 dark:decoration-neutral-600 underline-offset-2 transition-all hover:text-neutral-800 dark:hover:text-neutral-200"
          >
            GitHub
          </a>
          .
        </p>
      )}
    </section>
  )
}
