import { Link, useSearch } from "wouter";
// import component
import ButtonCompenent from "../compenents/Button";
import bgSementara from "../assets/img/bg-sementara.avif";

export default function Projects({ projects }) {
  const search = useSearch();
  const queryParams = new URLSearchParams(search);
  const selectedCategory = queryParams.get("category");

  const filteredProjects = selectedCategory
    ? projects.filter((project) => project.category?.slug === selectedCategory)
    : [];

  return (
    <>
      {!selectedCategory ? (
        <>
          {/* Project Terbaru */}
          <section id="newsProject" className="w-full mb-40 mt-20">
            {/* Judul */}
            <div className="lg:w-5/6 mx-auto px-4">
              <h1 className="text-subheading mb-4 sm:mb-6 lg:mb-8">
                Project Terbaru
              </h1>
            </div>
            {/* Carousel */}
            <div className="lg:w-5/6 mx-auto px-4 relative">
              {/* Tombol Prev */}
              <button
                id="prevBtn"
                className="hidden sm:inline absolute left-2 lg:-left-8 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full hover:bg-gray-100"
              >
                <svg
                  class="w-6 h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              {/* Tombol Next */}
              <button
                id="nextBtn"
                className="hidden sm:inline absolute right-2 lg:-right-8 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full hover:bg-gray-100"
              >
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Wrapper Carousel */}
              <div
                id="carousel"
                className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
              >
                {/* Looping data */}
                {projects &&
                  projects.map((project) => (
                    <div
                      key={project.id}
                      className="snap-start shrink-0 w-[calc(100%/1.25)] sm:w-[calc(100%/1.5)] md:w-[calc(100%/2)] lg:w-[calc(100%/3)]"
                    >
                      <article className="flex w-full flex-col items-start justify-between">
                        <div className="relative group w-full mb-2">
                          <div className="bg-transparent">
                            {/* Image */}
                            <a
                              href={project.link || `/projects/${project.slug}`}
                            >
                              <img
                                src={project.image || bgSementara}
                                alt={project.title}
                                className="image-style"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="flex items-center gap-x-4 text-xs mb-2">
                          <time>
                            Diunggah pada{" "}
                            {new Date(project.uploadDate).toLocaleDateString(
                              "id-ID",
                              {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              },
                            )}
                          </time>
                          {/* Kategori */}
                          <Link
                            href={`?category=${project.category?.slug}`}
                            className="rounded-full bg-gray-50 px-3 whitespace-nowrap py-1.5 font-medium hover:bg-gray-100"
                          >
                            {project.category?.name}
                          </Link>
                        </div>
                        <div className="group w-full">
                          {/* Judul */}
                          <h3 className="text-lg line-clamp-1 lg:line-clamp-1 font-semibold text-gray-900">
                            {/* Judul */}
                            <a
                              href={project.link || `/projects/${project.slug}`}
                            >
                              <span>{project.title}</span>
                            </a>
                          </h3>
                          <p className="mb-2 line-clamp-3 text-sm text-justify">
                            {project.description}
                          </p>
                        </div>
                        <ButtonCompenent
                          href={project.link || `/projects/${project.slug}`}
                        >
                          Kunjungi &raquo;
                        </ButtonCompenent>
                      </article>
                    </div>
                  ))}
              </div>
            </div>
          </section>

          {/* Semua Project */}
          <section id="allProjects" className="w-full mb-40 mt-30">
            {/* Judul */}
            <div className="lg:w-5/6 mx-auto px-4">
              <h1 className="text-subheading mb-4 sm:mb-6 lg:mb-8">
                Semua Project
              </h1>
              {/* Looping data */}
              <div className="grid gap-x-4 gap-y-6 lg:gap-y-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                {projects &&
                  projects.map((project) => (
                    <article
                      key={project.id}
                      className="flex w-full flex-col items-start justify-between"
                    >
                      <div className="relative group w-full mb-2">
                        <div className="bg-transparent">
                          {/* Image */}
                          <a href={project.link || `/projects/${project.slug}`}>
                            <img
                              src={project.image || bgSementara}
                              alt={project.title}
                              className="image-style"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center gap-x-4 text-xs mb-2">
                        <time>
                          Diunggah pada{" "}
                          {new Date(project.uploadDate).toLocaleDateString(
                            "id-ID",
                            { year: "numeric", month: "long", day: "numeric" },
                          )}
                        </time>
                        {/* Kategori */}
                        <Link
                          href={`?category=${project.category.slug}`}
                          className="rounded-full bg-gray-50 px-3 whitespace-nowrap py-1.5 font-medium hover:bg-gray-100"
                        >
                          {project.category.name}
                        </Link>
                      </div>
                      <div className="group w-full">
                        {/* Judul */}
                        <h3 className="text-lg line-clamp-1 lg:line-clamp-1 font-semibold text-gray-900">
                          {/* Judul */}
                          <a href={project.link || `/projects/${project.slug}`}>
                            <span>{project.title}</span>
                          </a>
                        </h3>
                        <p className="mb-2 line-clamp-3 text-sm text-justify">
                          {project.description}
                        </p>
                      </div>
                      <ButtonCompenent
                        href={project.link || `/projects/${project.slug}`}
                      >
                        Kunjungi &raquo;
                      </ButtonCompenent>
                    </article>
                  ))}
              </div>
            </div>
          </section>
        </>
      ) : (
        <>
          {/* Project Filtering */}
          <section id="filteredProjects" className="w-full mb-40 mt-20">
            {/* Judul */}
            <div className="lg:w-5/6 mx-auto px-4">
              <h1 className="text-subheading mb-4 sm:mb-6 lg:mb-8">
                Project by Category
              </h1>
              {/* Looping data */}
              <div className="grid gap-x-4 gap-y-6 lg:gap-y-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                {filteredProjects &&
                  filteredProjects.map((project) => (
                    <article
                      key={project.id}
                      className="flex w-full flex-col items-start justify-between"
                    >
                      <div className="relative group w-full mb-2">
                        <div className="bg-transparent">
                          {/* Image */}
                          <a href={project.link || `/projects/${project.slug}`}>
                            <img
                              src={project.image || bgSementara}
                              alt={project.title}
                              className="image-style"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center gap-x-4 text-xs mb-2">
                        <time>
                          Diunggah pada{" "}
                          {new Date(project.uploadDate).toLocaleDateString(
                            "id-ID",
                            { year: "numeric", month: "long", day: "numeric" },
                          )}
                        </time>
                        {/* Kategori */}
                        <Link
                          href={`?category=${project.category.slug}`}
                          className="rounded-full bg-gray-50 px-3 whitespace-nowrap py-1.5 font-medium hover:bg-gray-100"
                        >
                          {project.category.name}
                        </Link>
                      </div>
                      <div className="group w-full">
                        {/* Judul */}
                        <h3 className="text-lg line-clamp-1 lg:line-clamp-1 font-semibold text-gray-900">
                          {/* Judul */}
                          <a href={project.link || `/projects/${project.slug}`}>
                            <span>{project.title}</span>
                          </a>
                        </h3>
                        <p className="mb-2 line-clamp-3 text-sm text-justify">
                          {project.description}
                        </p>
                      </div>
                      <ButtonCompenent
                        href={project.link || `/projects/${project.slug}`}
                      >
                        Kunjungi &raquo;
                      </ButtonCompenent>
                    </article>
                  ))}
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}
