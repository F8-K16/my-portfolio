import ProjectCard from "./ProjectCard";
import SectionLabel from "./SectionLabel";

const works = [
  {
    imgSrc: "/images/project-topcv.png",
    title: "TopCV",
    tags: ["Next.js", "Express.js", "Full-Stack"],
    description:
      "A hiring platform with job search, CV tools, employer workflows, and an admin dashboard.",
    projectLink: "https://github.com/F8-K16/nextjs-topcv",
    featured: true,
  },
  {
    imgSrc: "/images/project-1.png",
    title: "Youtube Music",
    tags: ["API", "Development"],
    description:
      "A music player for albums, playlists, charts, and moods. Sign in to save playlists and get recommendations.",
    projectLink: "https://prj-module2.vercel.app",
  },
  {
    imgSrc: "/images/project-2.png",
    title: "Instagram",
    tags: ["API", "SPA", "Web-design"],
    description:
      "A photo feed with sign-up, search, explore, comments, saved posts, messages, and notifications.",
    projectLink: "https://prj-module3.vercel.app/",
  },
];

export default function Work() {
  return (
    <section id="work" className="section">
      <div className="container">
        <SectionLabel icon="work" className="reveal-up">
          03 — Work
        </SectionLabel>
        <h2 className="headline-2 mb-8 reveal-up">Selected projects</h2>

        <div className="grid gap-4 md:grid-cols-2">
          {works.map(
            ({ imgSrc, title, tags, projectLink, description, featured }) => (
              <ProjectCard
                key={title}
                imgSrc={imgSrc}
                title={title}
                tags={tags}
                description={description}
                featured={featured}
                projectLink={projectLink}
                classes={(featured ? "md:col-span-2 " : "") + "reveal-up"}
              />
            ),
          )}
        </div>
      </div>
    </section>
  );
}
