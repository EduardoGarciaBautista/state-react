
import GotProvider from "./context/GotContext";
import AppLayout from "./pages/AppLayout";

const App = () => {
  return (
    <GotProvider>
      <AppLayout />
    </GotProvider>
  );
};

export default App;
