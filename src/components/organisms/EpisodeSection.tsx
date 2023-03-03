import GridContainer from "@components/atoms/GridContainer";
import Card from "@components/molecules/Card";
import EpisodeHeading from "@components/molecules/EpisodeHeading";
import episodesData, { episodesDataInterface } from "@data/episodeData";

const EpisodeSection = () => (
  <GridContainer headingSection={<EpisodeHeading />}>
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
  </GridContainer>
);

export default EpisodeSection;
