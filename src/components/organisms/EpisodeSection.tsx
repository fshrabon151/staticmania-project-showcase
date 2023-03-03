import Card from "@components/molecules/Card";
import EpisodeHeading from "@components/molecules/EpisodeHeading";
import episodesData, { episodesDataInterface } from "@data/episodeData";

const EpisodeSection = () => (
  <div className="container space-y-14">
    <EpisodeHeading />
    <div className="grid lg:grid-cols-3 gap-4">
      {episodesData.map(
        (
          { src, heading, description, btnLabel }: episodesDataInterface,
          index
        ) => (
          <Card
            key={index}
            src={src}
            heading={heading}
            description={description}
            btnLabel={btnLabel}
            hasBtnIcon
            hasImageIcon
          />
        )
      )}
    </div>
  </div>
);

export default EpisodeSection;
