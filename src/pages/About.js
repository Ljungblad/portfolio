import React from "react";
import View from "../components/View";
import client from "../contentful/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import TopSection from "../components/TopSection";

const About = () => {
  const [page, setPage] = React.useState(null);

  React.useEffect(() => {
    client
      .getEntries({ content_type: "aboutPage" })
      .then((response) => setPage(response.items[0]))
      .catch(console.error);
  }, []);

  if (!page) {
    return <div>Loading...</div>;
  }

  return (
    <View className="about-view">
      <h1>{page.fields.title}</h1>
      <TopSection
        bodyText={documentToReactComponents(page.fields.bodyText)}
        portraitImg={page.fields.portraitImage.fields.file.url}
      />
    </View>
  );
};

export default About;
