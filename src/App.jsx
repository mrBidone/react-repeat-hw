import "./App.css";

import article from "./data/article.json";
import Section from "./components/Section/Section";
import Container from "./components/Container/Container";
import Heading from "./components/Heading/Heading";
import BlogCard from "./components/BlogCard/BlogCard";

const App = () => {
  return (
    <>
      <Section>
        <Container>
          <Heading title="Task 1 Blog Card" bottom />
          <BlogCard
            poster={article.poster}
            tag={article.tag}
            title={article.title}
            description={article.description}
            userName={article.name}
            avatar={article.avatar}
            postedAt={article.postedAt}
          />
        </Container>
      </Section>
    </>
  );
};

export default App;
