import type { NextPage } from "next";
import { Header } from "../components/Header";
import { Banner } from "../components/Banner";
import { TravelTypeSection } from "../components/TravelTypeSection";
import { Divider, useBreakpointValue } from "@chakra-ui/react";
import { ContinentSection } from "../components/ContinentSection";

const Home: NextPage = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <>
      <Header />
      <Banner />
      <TravelTypeSection />
      <Divider
        width={isWideVersion ? '90px' : '60px'}
        opacity={1}
        margin="0 auto"
        borderColor="gray.600"
        borderBottomWidth={isWideVersion ? 2 : 1}
      />
      <ContinentSection />
    </>
  );
};

export default Home;
