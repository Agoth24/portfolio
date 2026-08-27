import { BlogPosts } from "app/components/posts";
import { Projects } from "app/components/projects";
import { getBlogPosts } from "app/blog/utils";

export default function Page() {
  let hasPosts = getBlogPosts().length > 0;

  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Agoth Arop
      </h1>
      <p className="mb-4">
        I'm a software engineer and CS & Economics undergraduate at the
        University of Alberta.
      </p>
      <p>Currently, I'm working on research in Natural Language Processing, focused on making LLMs cheaper and more efficient.</p>
      <div className="my-8">
        <h2 className="mb-4 text-lg font-medium tracking-tight">
          What I'm working on
        </h2>
        <Projects />
      </div>
      {hasPosts && (
        <div className="my-8">
          <h2 className="mb-4 text-lg font-medium tracking-tight">Writing</h2>
          <BlogPosts />
        </div>
      )}
    </section>
  );
}
