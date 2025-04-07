import { ColorModeButton } from "@/components/ui/color-mode";
import { Box, Container, Flex, Text } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Container maxW={"900px"}>
      <Box
        bg={{ base: "gray.300", _dark: "gray.700" }}
        px={4}
        my={4}
        rounded="md"
        bgBlendMode="multiply"
      >
        <Flex h={16} align={"center"} justify={"space-between"}>
          {/* LEFT SIDE */}
          <Flex
            justify={"center"}
            align={"center"}
            gap={3}
            display={{ base: "none", sm: "flex" }}
          >
            <img src="/react.png" alt="logo" width={50} height={50} />
            <Text fontSize={"40"}>+</Text>
            <img src="/go.png" alt="logo" width={40} height={40} />
            <Text fontSize={"40"}>=</Text>
            <img src="/explode.png" alt="logo" width={50} height={50} />
          </Flex>

          {/* RIGHT SIDE */}
          <Flex align={"center"} gap={3}>
            <Text fontSize={"lg"} fontWeight={500}>
              Daily Tasks
            </Text>
            {/* Toggle Color Mode */}
            <ColorModeButton />
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
};

export default Navbar;
