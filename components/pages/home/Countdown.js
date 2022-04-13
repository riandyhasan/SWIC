import React from "react";
import { Flex, Square, Text, Box, Skeleton } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const TextCountdown = ({ p, tens, ones, isLoading }) => {
  return (
    <Box h="100%">
      <Flex>
        {isLoading ?
        <Skeleton h="2.85em" w="2.85em" marginRight="0.3em" borderRadius="0.4em" startColor="gray.400" endColor="white" />:
        <Square
          bg="white"
          size="1.9em"
          borderRadius="0.4rem"
          fontSize={["1em", "1.3em", "1.3em", "1.5em"]}
          fontWeight="semibold"
          marginRight="0.3em"
          color="black"
        >
          {tens}
        </Square>
        }
        {isLoading ?
        <Skeleton h="2.85em" w="2.85em" marginRight="0.3em" borderRadius="0.4em" startColor="gray.400" endColor="white" />:
        <Square
          bg="white"
          size="1.9em"
          borderRadius="0.4rem"
          fontSize={["1em", "1.3em", "1.3em", "1.5em"]}
          fontWeight="semibold"
          marginRight="0.3em"
          color="black"
        >
          {ones}
        </Square>
        }
        <Flex alignItems="flex-end">
          <Text
            mx="0.3em"
            fontWeight="bold"
            fontSize={["0.8em", "0.8em", "1em", "1em"]}
          >
            {p}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};
export default function Countdown() {
  const [isLoading, setIsLoading] = useState(true);

  const finishTime = new Date("2022-04-14");
  const currtime = new Date();
  const totalDays = Math.floor(
    (finishTime.getTime() - currtime.getTime()) / 86400000
  );
  const [time, setTime] = useState({});

  const count = () => {
    let ctime = (finishTime.getTime() - currtime.getTime()) / 1000;

    let day = Math.floor(ctime / 86400);
    let hour = Math.floor((ctime - day * 86400) / 3600);
    let minute = Math.floor((ctime - day * 86400 - hour * 3600) / 60);
    let second = Math.floor(ctime - day * 86400 - hour * 3600 - minute * 60);

    setTime({ day: day, hour: hour, minute: minute, second: second });
    setIsLoading(false);
  };

  useEffect(() => {
    count();
  });

  return (
    <Flex justifyContent={["center", "center", "center", "start"]}>
      <TextCountdown
        isLoading={isLoading}
        p="D"
        tens={Math.floor(time.day / 10)}
        ones={time.day % 10}
        />
      <TextCountdown
        isLoading={isLoading}
        p="H"
        tens={Math.floor(time.hour / 10)}
        ones={time.hour % 10}
        />
      <TextCountdown
        isLoading={isLoading}
        p="M"
        tens={Math.floor(time.minute / 10)}
        ones={time.minute % 10}
        />
      <TextCountdown
        isLoading={isLoading}
        p="S"
        tens={Math.floor(time.second / 10)}
        ones={time.second % 10}
      />
    </Flex>
  );
}
