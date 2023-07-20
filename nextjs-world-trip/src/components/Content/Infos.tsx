import { Flex, Heading, Icon, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Text } from "@chakra-ui/react";
import { RiInformationLine } from "react-icons/ri";

export default function Infos() {
  return (
    <Flex 
      align="center"
      justify="space-between"
    >
      <Flex direction="column" justify="center" align={["flex-start", "flex-start", "center"]}>
        <Heading fontSize={["2xl", "5xl"]} color="yellow.400" fontWeight="500">50</Heading>
        <Text fontSize={["md", "xl"]} fontWeight="600" color="gray.600">países</Text>
      </Flex>

      <Flex direction="column" justify="center" align={["flex-start", "flex-start", "center"]}>
        <Heading fontSize={["2xl", "5xl"]} color="yellow.400" fontWeight="500">60</Heading>
        <Text fontSize={["md", "xl"]} fontWeight="600" color="gray.600">línguas</Text>
      </Flex>

      <Flex direction="column" justify="center" align={["flex-start", "flex-start", "center"]}>
        <Heading fontSize={["2xl", "5xl"]} color="yellow.400" fontWeight="500">27</Heading>
        <Flex align="baseline">
          <Text fontSize={["md", "xl"]} fontWeight="600" color="gray.600">
            cidades +100
          </Text>

          <Popover>
            <PopoverTrigger>
              <span>
                <Icon cursor="pointer" as={RiInformationLine} ml="1" color="gray.400" w={["10px", "16px"]} h={["10px", "16px"]} />
              </span>
            </PopoverTrigger>

            <PopoverContent color="yellow.400">
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody fontWeight="400" fontSize="lg">
                Paris, Alverga, Toulose...
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Flex>

      </Flex>
    </Flex>
  )
}