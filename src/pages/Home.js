import React from "react";
import View from "../components/View";
import client from "../contentful/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import TopSection from "../components/TopSection";

const Home = () => {
  const [page, setPage] = React.useState(null);
  const [projects, setProjects] = React.useState([]);

  React.useEffect(() => {
    client
      .getEntries({ content_type: "homePage" })
      .then((response) => setPage(response.items[0]))
      .catch(console.error);
  }, []);

  React.useEffect(() => {
    client
      .getEntries({ content_type: "project" })
      .then((response) => setProjects(response.items))
      .catch(console.error);
  }, []);

  if (!page || !projects) {
    return <div>Loading...</div>;
  }

  return (
    <View className="home-view">
      <TopSection
        title={page.fields.title}
        bodyText={documentToReactComponents(page.fields.bodyText)}
        portraitImg={page.fields.portraitImage.fields.file.url}
        alt={page.fields.portraitImage.fields.file.alt}
      />
      {projects &&
        projects.map((project, i) => {
          console.log(project);

          return (
            <div key={i}>
              <img
                className="project-img"
                src={project.fields.image.fields.file.url}
                alt="project"
                loading="lazy"
              />
              <h4>{project.fields.title}</h4>
              <a href={project.fields.link}>
                <button>Visit Website ></button>
              </a>
            </div>
          );
        })}
    </View>
  );
};

export default Home;
