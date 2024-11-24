import { Grid, GridItem, Show } from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area={"nav"} bg={"coral"} width={"100vw"}>
        nav
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} bg={"gold"}>
          aside
        </GridItem>
      </Show>
      <GridItem area={"main"} bg={"orange"}>
        main
      </GridItem>
    </Grid>
  );
};

export default Navbar;
