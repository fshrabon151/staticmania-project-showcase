import GridContainer from "@components/atoms/GridContainer";
import ArticleNewsLeftItem from "@components/molecules/ArticleNewsLeftItem";
import Card from "@components/molecules/Card";
import articleNewsData, {
  articleNewsDataInterface,
} from "@data/articleNewsData";

const ArticlesNewsSection = () => (
  <GridContainer>
    <ArticleNewsLeftItem />
    {articleNewsData.map(
      (
        { src, heading, description, btnLabel }: articleNewsDataInterface,
        index
      ) => (
        <Card
          key={index}
          src={src}
          heading={heading}
          description={description}
          btnLabel={btnLabel}
        />
      )
    )}
  </GridContainer>
);

export default ArticlesNewsSection;
