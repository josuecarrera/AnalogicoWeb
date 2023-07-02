import React from "react";
import { Heading } from "../common/Heading";
import { blog } from "../data/dummydata";

export const Blog = () => {
  return (
    <>
      <section className="blog">
        <div className="container">
          <Heading title="Blog" />
          <div className="content grid3">
            {blog.map((item) => (
              <div className="box" data-aos="flip-left" key={item.id}>
                <div className="img" data-aos="fade-up">
                  {/* Incrusta el reproductor de video de YouTube */}
                  <iframe
                    width="400"
                    height="450"
                    src={`https://www.youtube.com/embed/${getYouTubeVideoId(item.video)}`}
                    title={item.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="text">
                  <h3 data-aos="fade-right">{item.title}</h3>
                  <label data-aos="fade-left">
                    By {item.author} {item.date}
                  </label>
                  <p data-aos="fade-up-right">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

// Función auxiliar para obtener el ID del video de YouTube
const getYouTubeVideoId = (videoUrl) => {
  // Extrae el ID del video de la URL de YouTube
  const regExp =
    /^(?:(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=|https?:\/\/youtu\.be\/|www\.youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/;
  const match = videoUrl.match(regExp);
  return match && match[1];
};
