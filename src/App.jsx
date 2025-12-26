import { Suspense } from "react";
import Loading from "./components/common/Loading";
import AppRouter from "./routes/AppRouter";
const App = () => {
  const isUser =false
  return (
    <>
      <Suspense fallback={<Loading />}>
        <AppRouter user={isUser} />
      </Suspense>
    </>
  );
};

export default App;
