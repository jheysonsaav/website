import React, { lazy, Suspense } from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import "./styles/variables.scss";

function App(): JSX.Element {
  const Home = lazy(() => import("./pages/Home"));

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Suspense>
  );
}

export default App;
