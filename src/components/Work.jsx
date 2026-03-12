import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/images/project-1.png",
    title: "Youtube Music Website",
    tags: ["API", "Development"],
    projectLink: "https://prj-module2.vercel.app",
  },
  {
    imgSrc: "/images/project-2.png",
    title: "Instagram Clone",
    tags: ["API", "SPA", "Web-design"],
    projectLink: "https://prj-module3.vercel.app/",
  },
];

export default function Work() {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My portfolio highlights</h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,minmax(280px,1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
