import React from "react";
import TvCard from "../components/tvCard";
import SampleTv from "./sampleData";
import { MemoryRouter } from "react-router";
import TvsContextProvider from "../contexts/tvsContext";
import { action } from "@storybook/addon-actions";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";

export default {
  title: "Home Page/TvCard",
  component: TvCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <TvsContextProvider>{Story()}</TvsContextProvider>,
  ],
};

export const Basic = () => {
  return (
    <TvCard
      tv={SampleTv}
      action={(tv) => <AddToFavoritesIcon tv={tv} />}
      taging={(tv) => null}
    />
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoPoster = { ...SampleTv, poster_path: undefined };
  return (
    <TvCard
      tv={sampleNoPoster}
      action={(tv) => <AddToFavoritesIcon tv={tv} />}
      taging={(tv) => null}
    />
  );
};
Exceptional.storyName = "exception";
