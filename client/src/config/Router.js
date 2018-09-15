import React from "react";
import Loadable from "config/Loadable";
import { Switch, Route, BrowserRouter, NavLink } from "react-router-dom";
import { Menu, Segment, Header, Container } from "semantic-ui-react";

const Home = Loadable({ loader: () => import("pages/Home") });
const Details = Loadable({ loader: () => import("pages/Details") });

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    exact: true,
    nav: true
  },
  {
    path: "/details",
    name: "Details",
    component: Details,
    nav: true
  },
  {
    path: "",
    component: () => <Header textAlign="center">Page Not Found</Header>
  }
];

const Navigation = () => (
  <Menu pointing secondary>
    {routes.map(({ nav, path, name }) => {
      if (nav) {
        return (
          <NavLink className="item" to={path} exact>
            {name}
          </NavLink>
        );
      }
    })}
  </Menu>
);

export default () => (
  <BrowserRouter>
    <Container>
      <Navigation />
      <Segment>
        <Switch>
          {routes.map(({ path, exact, component }, i) => (
            <Route key={path} exact={exact} component={component} path={path} />
          ))}
        </Switch>
      </Segment>
    </Container>
  </BrowserRouter>
);
