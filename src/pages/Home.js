import React from "react";
import View from "../components/View";
import client from "../contentful/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import TopSection from "../components/TopSection";
import MidSection from "../components/MidSection";
import Card from "../components/Card";

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
      <MidSection
        midTitle={page.fields.middleTitle}
        midBodyText={documentToReactComponents(page.fields.middleBodyText)}
      />
      <div>
        {projects &&
          projects.map((project, i) => {
            return (
              <Card
                key={i}
                imgURL={project.fields.image.fields.file.url}
                cardTitle={project.fields.title}
                projectURL={project.fields.link}
              />
            );
          })}
      </div>
    </View>
  );
};

export default Home;
