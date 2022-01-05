import { Box, Text } from "@chakra-ui/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { ContinentDisplay } from "./ContinentDisplay";
import { useEffect, useState } from "react";
import { Continent } from "../../types/Continent";
import 'swiper/css/bundle';

export const ContinentSection = () => {
  const [continents, setContinents] = useState<Continent[]>([])

  useEffect(() => {
    const getContinents = async () => {
      const data = await fetch('/api/continents').then((res) => res.json())
      setContinents(data.continents)
    }
    getContinents()
  })

  return (
    <Box maxW="1190" mx="auto" pb="10">
      <Text
        as="h1"
        my={["6", "12"]}
        px="4"
        textAlign="center"
        fontWeight={500}
        fontSize={{ base: '20px', lg: '36px' }}
      >
        Vamos Nessa? <br />
        Então escolha seu continente
      </Text>
      <Swiper
        navigation
        slidesPerView={1}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        pagination={{ clickable: true }}
      >
        {continents?.map((continent) => (
          <SwiperSlide key={continent.id}>
            <ContinentDisplay continent={continent}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
