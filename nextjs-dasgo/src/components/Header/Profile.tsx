import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Leonardo Oliveira</Text>
          <Text color="gray.300" fontSize="small">leonardo_oliveira1@outlook.com</Text>
        </Box>
      )}

      <Avatar size="md" name="Leonardo Oliveira" src="https://github.com/LeonardoVini.png" />
    </Flex>
  );
}
