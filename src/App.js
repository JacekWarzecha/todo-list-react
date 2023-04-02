import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import AuthorPage from "./features/author/AuthorPage";
import TaskPage from "./features/Tasks/TaskPage";

import TasksPage from "./features/Tasks/TasksPage";
import { StyledNavLink, Navigation, List, ListItem } from "./styled";

export default () => (
  <HashRouter>
    <Navigation>
      <List>
        <ListItem>
          <StyledNavLink to="/zadania">Zadania</StyledNavLink>
        </ListItem>
        <ListItem>
          <StyledNavLink to="/autor">O autorze</StyledNavLink>
        </ListItem>
      </List>
      <Switch>
        <Route path="/zadania/:id">
          <TaskPage />
        </Route>
        <Route path="/zadania">
          <TasksPage />
        </Route>
        <Route path="/autor">
          <AuthorPage />
        </Route>
        <Route path="/">
          <Redirect to="/zadania" />
        </Route>
      </Switch>
    </Navigation>
  </HashRouter>
);
