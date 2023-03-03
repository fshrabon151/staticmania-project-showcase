import ArticleNewsLeftItem from "@components/molecules/ArticleNewsLeftItem";
import Card from "@components/molecules/Card";
import articleNewsData, {
  articleNewsDataInterface,
} from "@data/articleNewsData";

const ArticlesNewsSection = () => {
  return (
    <div className="container">
      <div className="grid lg:grid-cols-3 gap-12 lg:gap-4">
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
      </div>
    </div>
  );
};

export default ArticlesNewsSection;
