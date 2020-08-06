import React from "react";
import { Card, Image } from "semantic-ui-react";
const Portfolio = () => (
  <Card.Group
    style={{
      paddingBottom: "60px",
      align: "center",
    }}
  >
    <Card>
      <Image src="/images/GoBeer.jpeg" wrapped ui={false} />
      <Card.Content>
        <Card.Header>Go Beer!</Card.Header>
        <Card.Meta>Project #1</Card.Meta>
        <Card.Description>
          Go Beer! helps you find the best breweries near you!
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a href="https://ngalter.github.io/gobeer/">Go Beer!</a>
      </Card.Content>
    </Card>{" "}
    <Card>
      <Image src="/images/Fright.jpeg" wrapped ui={false} />
      <Card.Content>
        <Card.Header>FrightFinder</Card.Header>
        <Card.Meta>Project #2</Card.Meta>
        <Card.Description>
          FrightFinder will uncover haunted places lurking in the shadows right
          under your nose!
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a href="https://frightfinder.herokuapp.com/">FrightFinder</a>
        <br />
        <a href="https://github.com/Colin-Cunningham/FrightFinder">GitHub</a>
      </Card.Content>
    </Card>{" "}
    <Card>
      <Image src="/images/wine.jpeg" wrapped ui={false} />
      <Card.Content>
        <Card.Header>Good Wine and Fine Spirits</Card.Header>
        <Card.Meta>Project #3</Card.Meta>
        <Card.Description>
          No matter that you are in quarantine, you can still get booze! We have
          a large inventory of fine wines, spirits and craft beers ready to
          deliver to your front stoop!
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a href="https://goodwinefinespirits.herokuapp.com/">
          <br />
          <a href="https://github.com/jarrodfinn/Project-3">GitHub</a>
          Grab some suds!{" "}
        </a>
      </Card.Content>
    </Card>{" "}
    <Card>
      <Image src="/images/workout.jpeg" wrapped ui={false} />
      <Card.Content>
        <Card.Header>Fitness Tracker</Card.Header>
        <Card.Meta></Card.Meta>
        <Card.Description>
          Keep track on all your great workouts and progress!
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a href="https://jpf-workout-tracker.herokuapp.com/">Fitness Tracker</a>
        <br />
        <a href="https://github.com/jarrodfinn/Homework-17">GitHub</a>
      </Card.Content>
    </Card>{" "}
    <Card>
      <Image src="/images/budget.jpeg" wrapped ui={false} />
      <Card.Content>
        <Card.Header>Personal Budget</Card.Header>
        <Card.Meta></Card.Meta>
        <Card.Description>
          See how you can stay on top of your monthly budget.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a href="https://jpf-budget-tracker.herokuapp.com/">
          <br />
          <a href="https://jarrodfinn.github.io/Homework-18/">GitHub</a>
          See how I stay on financial track!
        </a>
      </Card.Content>
    </Card>{" "}
    <Card>
      <Image src="/images/Stern.jpeg" wrapped ui={false} />
      <Card.Content>
        <Card.Header>Employee Tracker</Card.Header>
        <Card.Meta>React Application</Card.Meta>
        <Card.Description>
          Get to know all your favorite Howard Stern staff members!
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a href="https://jpf-employee-directory.herokuapp.com/">
          <br />
          <a href="https://github.com/jarrodfinn/Homework-19">GitHub</a>
          Employee Tracker
        </a>
      </Card.Content>
    </Card>{" "}
  </Card.Group>
);
export default Portfolio;
