import { Grid, GridItem } from "@chakra-ui/react";
import Modality from "./modality";

const modalities = [
  { icon: "cocktail", text: "Vida Noturna" },
  { icon: "surf", text: "Praia" },
  { icon: "building", text: "Mordeno" },
  { icon: "museum", text: "Clássico" },
  { icon: "earth", text: "E mais..." },
];

export default function Modalities() {
  return (
    <Grid 
      templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
      w="100%"
      justifyContent="space-between"
      alignItems="center"
      mt={["10", "32"]}
      mx="auto"
      maxW="1160px"
      gap={[1, 5]}
    >
      {modalities.map((modality) => {
        if (modality.icon !== 'earth') {
          return (
            <GridItem key={modality.icon}>
              <Modality icon={modality.icon} text={modality.text} />
            </GridItem>
          )
        }

        if (modality.icon === 'earth') {
          return (
            <GridItem key={modality.icon} colSpan={[2, 2, 2, 1]}>
              <Modality icon={modality.icon} text={modality.text} />
            </GridItem>
          )
        }
      })}
    </Grid>
  );
}

