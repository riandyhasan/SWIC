import react from "react";
import { Flex, Box, Square, Text, Heading, Spacer } from "@chakra-ui/react";
import Image from "next/image";

const SponsorImage = ({ src, size }) => {
  let sSize = [];
  if (size == "big") {
    sSize = ["5em", "8em", "7em", "10em"];
  } else {
    sSize = ["3em", "2em", "4em", "6em"];
  }
  return (
    <Flex position="relative" h={sSize} w="full">
      <Image
        src={`/assets/images/logo/logo-${src}.png`}
        layout="fill"
        objectFit="contain"
      />
    </Flex>
  );
};

export default function Sponsor() {
  let p = ["1em", "1em", "1em", "2em"];
  let mt = ["0", "0.4em", "1em", "2em"];
  let fs = ["1.5em", "2em", "2.5em", "3em"];
  let mt2 = ["3em", "3em", "6em", "6em"];
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      color="white"
      w="full"
      mt={mt2}
      mb="5em"
    >
      <Flex
        flexDirection="column"
        alignItems="center"
        p={p}
        pt="1.5rem"
        w="82%"
        border="2px"
        borderColor="rgba(255, 255, 255, 0.25)"
        borderRadius="2rem"
        bg="rgba(255,255,255,0.3)"
      >
        <Heading textAlign="center" fontSize={fs} fontWeight="medium">
          Sponsored By
        </Heading>
        <Flex w="full" justifyContent="space-between" mt={mt}>
          <SponsorImage src="ITB" size="big" />
          <SponsorImage src="ITB" size="big" />
          <SponsorImage src="ITB" size="big" />
          <SponsorImage src="ITB" size="big" />
          <SponsorImage src="ITB" size="big" />
        </Flex>
        <Flex w="94%" justifyContent="space-between" mt={mt}>
          <SponsorImage src="ITB" size="small" />
          <SponsorImage src="ITB" size="small" />
          <SponsorImage src="ITB" size="small" />
          <SponsorImage src="ITB" size="small" />
          <SponsorImage src="ITB" size="small" />
          <SponsorImage src="ITB" size="small" />
          <SponsorImage src="ITB" size="small" />
        </Flex>
      </Flex>
    </Flex>
  );
}
