import { useState, useEffect } from "react";
// impor img
import profil from "../assets/img/profil.jpg";
import temanUniv from "../assets/img/teman-univ.jpeg";
import temanUniv2 from "../assets/img/teman-persiapan-demo.jpeg";
import temanUniv3 from "../assets/img/teman-demo.jpeg";
// import component
import ButtonCompenent from "../compenents/Button";

export default function Home({ dataPersonal, dataProjects, dataTestimonials }) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % dataTestimonials.length);
    }, 5000); // Berganti setiap 5 detik
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <main className="w-full mt-8">
        {/* Hero */}
        <section id="hero">
          <div className="container_">
            <div className="section-spacing">
              <h1 className="text-heading mb-4">PORTFOLIO</h1>
              <p className="mb-6">
                Halo! saya Ferdi seorang mahasiswa matematika yang senang
                terhadap pemrograman, seni, dan sastra.
              </p>
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Foto Atas (Selalu tampil) */}
                <div className="sm:col-span-2 h-96 relative overflow-hidden">
                  <img
                    src={temanUniv3}
                    alt="teman-teman demo"
                    className="w-full h-full object-cover filter grayscale sepia contrast-90 brightness-95 border border-gray-300 shadow-sm"
                  />
                </div>

                {/* Foto Bawah Kiri (Muncul hanya sm ke atas) */}
                <div className="h-64 hidden sm:block relative overflow-hidden">
                  <img
                    src={temanUniv2}
                    alt="teman-teman persiapan demo"
                    className="w-full h-full object-cover filter grayscale sepia contrast-90 brightness-95 border border-gray-300 shadow-sm"
                  />
                </div>

                {/* Foto Bawah Kanan (Muncul hanya sm ke atas) */}
                <div className="h-64 hidden sm:block relative overflow-hidden">
                  <img
                    src={temanUniv}
                    alt="teman-teman matematika 2024"
                    className="w-full h-full object-cover filter grayscale sepia contrast-90 brightness-95 border border-gray-300 shadow-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* About */}
        <section id="about">
          <div className="container_">
            <div className="section-spacing">
              {/* Layoutin About */}
              <div className="flex justify-between flex-col-reverse sm:flex-row">
                {/* Left */}
                <div className="mr-4 mt-8 sm:mt-0">
                  <h2 className="mb-2 sm:mb-4 text-subheading">Tentang saya</h2>
                  <div className="mb-2 sm:mb-4 pr-4">
                    <h3>Pendidikan</h3>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: dataPersonal.pendidikan,
                      }}
                    ></p>
                  </div>
                  <div className="mb-2 sm:mb-4 pr-4">
                    <h3>Peminatan</h3>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: dataPersonal.peminatan,
                      }}
                    ></p>
                  </div>
                  <div className="mb-2 sm:mb-4 pr-4">
                    <h3>Pekerjaan</h3>
                    <ul className="list-disc pl-5">
                      <li>{dataPersonal.pekerjaan[0]}</li>
                      <li>{dataPersonal.pekerjaan[1]}</li>
                      <li>{dataPersonal.pekerjaan[2]}</li>
                    </ul>
                  </div>
                  <div className="flex space-x-4 mt-4">
                    <a href="/about" className="bg-black text-white px-4 py-2">
                      Details
                    </a>
                    <ButtonCompenent href="/contact">
                      Contact me
                    </ButtonCompenent>
                  </div>
                </div>
                {/* Right */}
                <div className="md:w-1/2 w-full">
                  <img
                    src={profil}
                    alt="foto profil"
                    className="w-auto sm:w-full h-60 md:h-auto object-cover filter grayscale sepia contrast-90 brightness-95 border border-gray-300 shadow-sm mx-auto sm:mx-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Projects */}
        <section id="projects">
          <div className="container_">
            <div className="section-spacing">
              <div className="gap-x-0 md:gap-x-8 lg:gap-x-0 flex flex-col lg:space-x-16 md:flex-row">
                {/* Left - Judul */}
                <div className="flex flex-row items-center md:items-start gap-x-6 md:gap-x-0 md:flex-col">
                  <h1 className="mb-4 md:mb-8 text-heading">
                    Discover My Project
                  </h1>
                  <div className="hidden md:block sm:w-8 sm:h-8 bg-black rounded-full animate-pulse"></div>
                </div>
                {/* Right - Carousel */}
                <div
                  id="carousel"
                  className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 scrollbar-hide"
                >
                  {dataProjects.map((project) => (
                    <div
                      key={project.id}
                      className="snap-start shrink-0 w-full"
                    >
                      <article className="flex w-full flex-col items-start justify-between">
                        <div className="relative group w-full mb-2">
                          <div className="bg-transparent">
                            {/* Image */}
                            <a
                              href={project.link || `/projects/${project.slug}`}
                            >
                              <img
                                src={
                                  project.image ||
                                  "src/assets/img/bg-sementara.avif"
                                }
                                alt={project.title}
                                className="image-style"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="flex items-center gap-x-4 text-xs mb-2">
                          <time>Diunggah pada {project.uploadDate}</time>
                          <a
                            href={`/projects?category=${project.category.slug}`}
                            className="rounded-full bg-gray-50 px-3 whitespace-nowrap py-1.5 font-medium hover:bg-gray-100"
                          >
                            {project.category.name}
                          </a>
                        </div>
                        <div className="group w-full">
                          <h3 className="text-lg line-clamp-2 lg:line-clamp-1 font-semibold text-gray-900">
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
                      </article>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Banner */}
        <section
          id="banner"
          className="bg-yellow-100 py-16 mb-40 hidden lg:block"
        >
          <div className="container_">
            <blockquote className="text-center italic text-gray-700 text-xl md:text-3xl">
              "Keadilan bukan milik penguasa, ia adalah milik semua orang yang
              memperjuangkannya." — Munir Said Thalib
            </blockquote>
          </div>
        </section>
        {/* Testimoni */}
        <section id="wordToMe">
          <div className="container_">
            <div className="section-spacing">
              <h2 className="mb-4 md:mb-8 lg:mb-16 text-subheading text-center">
                Apa yang mereka katakan tentang saya
              </h2>
              {/* Testimonial Carousel */}
              {dataTestimonials.length > 0 ? (
                <div className="flex justify-center items-center">
                  <div className="w-full md:w-2/3 flex flex-col p-6 min-h-60 justify-between text-center gap-x-4 border border-gray-200 rounded-lg shadow-sm">
                    <p className="font-bold mb-4 italic text-lg">
                      "{dataTestimonials[currentTestimonial].quote}"
                    </p>
                    <div>
                      <h1 className="font-bold">
                        {dataTestimonials[currentTestimonial].name}
                      </h1>
                      <span className="text-sm text-gray-600">
                        {dataTestimonials[currentTestimonial].position}
                      </span>
                    </div>
                    {/* Dots Navigation */}
                    <div className="flex justify-center gap-2 mt-4">
                      {dataTestimonials.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentTestimonial(index)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            index === currentTestimonial
                              ? "bg-black"
                              : "bg-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <h1 className="text-center mt-30 mb-40 font-heading text-black font-bold text-2xl md:text-4xl">
                  Belum ada testimoni
                </h1>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
