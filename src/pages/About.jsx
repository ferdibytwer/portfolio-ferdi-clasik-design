import profil from "../assets/img/profil.jpg";
// import component
import ButtonCompenent from "../compenents/Button";

export default function About({ dataPersonal, dataSertifs, dataPosts }) {
  return (
    <>
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
                  <ButtonCompenent href="/contact">Contact me</ButtonCompenent>
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
      {/* Sertif */}
      <section id="sertifs" className="w-full mb-40 mt-20 sm:mt-30">
        {/* Judul */}
        <div className="lg:w-5/6 mx-auto px-4">
          <h1 className="text-subheading mb-4 sm:mb-6 lg:mb-8">Sertifikat</h1>
        </div>
        {/* Carousel */}
        <div className="lg:w-5/6 mx-auto px-4 relative">
          {/* Tombol Prev */}
          <button
            id="prevBtn"
            className="hidden sm:inline absolute left-2 lg:-left-8 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full hover:bg-gray-100"
          >
            <svg
              className="w-6 h-6 text-gray-700"
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
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Wrapper Carousel */}
          <div
            id="carousel"
            className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
          >
            {/* Loooping */}
            {/* @foreach ($sertifs as $sertif) */}
            {dataSertifs.map((sertif) => (
              <div
                key={sertif.id}
                className="snap-start shrink-0 w-[calc(100%/1.25)] sm:w-[calc(100%/1.5)] md:w-[calc(100%/2)] lg:w-[calc(100%/3)]"
              >
                <article className="flex w-full flex-col items-start justify-between">
                  <div className="relative group w-full mb-2">
                    <div className="bg-transparent">
                      {/* image */}
                      <a href={sertif.link || "#"}>
                        <img
                          src={
                            sertif.image || "src/assets/img/bg-sementara.avif"
                          }
                          className="image-style"
                          alt={sertif.title}
                        />
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-x-4 text-xs mb-2">
                    <span>Diberikan oleh {sertif.lembaga}</span>
                    {/* Kategori */}
                    <a
                      href="#"
                      className="rounded-full bg-gray-50 px-3 py-1.5 whitespace-nowrap font-medium hover:bg-gray-100"
                    >
                      {sertif.category.name}
                    </a>
                  </div>
                  <div className="group w-full h-auto">
                    {/* Judul */}
                    <h3 className="text-lg line-clamp-2 lg:line-clamp-1 font-semibold text-gray-900">
                      {/* Judul */}
                      <a href={sertif.link || "#"}>
                        <span>{sertif.title}</span>
                      </a>
                    </h3>
                    <p className="mb-2 line-clamp-3 md:line-clamp-2 text-sm text-justify">
                      {sertif.desciption}
                    </p>
                  </div>
                  <ButtonCompenent href={sertif.link || "#"}>
                    Kunjungi &raquo;
                  </ButtonCompenent>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Semua Posts */}
      <section id="blog" className="w-full mb-40 mt-30">
        {/* Judul */}
        <div className="container_">
          <h1 className="text-subheading mb-4 sm:mb-6 lg:mb-8">Blog</h1>
          {/* Looping data */}
          <div className="grid gap-x-4 gap-y-6 lg:gap-y-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
            {dataPosts.map((post) => (
              <article className="flex w-full flex-col items-start justify-between">
                <div className="relative group w-full mb-2">
                  <div className="bg-transparent">
                    {/* Image */}
                    <a href={post.link || "#"}>
                      <img
                        src={
                          post.image ||
                          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w"
                        }
                        alt={post.title}
                        className="image-style"
                      />
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-x-4 text-xs mb-2">
                  <time>Diunggah pada {post.uploadDate}</time>
                  {/* Kategori */}
                  <div className="rounded-full bg-gray-50 px-3 py-1.5 font-medium hover:bg-gray-100">
                    {post.category.name}
                  </div>
                </div>
                <div className="group w-full">
                  {/* Judul */}
                  <h3 className="text-lg line-clamp-2 font-semibold text-gray-900">
                    <a href={post.link || "#"} className="text-left">
                      <span>{post.title}</span>
                    </a>
                  </h3>
                  <p className="mb-2 line-clamp-3 text-sm text-justify">
                    {post.description}
                  </p>
                </div>
                <ButtonCompenent href={post.link || "#"}>
                  Kunjungi &raquo;
                </ButtonCompenent>
              </article>
            ))}
          </div>
          {/* Pagination */}
        </div>
      </section>
    </>
  );
}
