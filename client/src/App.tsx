import { Container, Stack } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export const BASE_URL =
  import.meta.env.ENV === "development" ? "http://localhost:5000/api" : "/api";

function App() {
  return (
    <Stack h="100vh">
      <Navbar />
      <Container maxW={"750px"}>
        <TodoForm />
        <TodoList />
      </Container>
    </Stack>
  );
}

export default App;
