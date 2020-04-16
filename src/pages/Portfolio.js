import React from "react";
import { Card, Image } from "semantic-ui-react";
const Portfolio = () => (
  <Card.Group>
    <Card>
      <Image src="/images/DCRice.jpeg" wrapped ui={false} />
      <Card.Content>
        <Card.Header>Go Beer!</Card.Header>
        <Card.Meta>Project #1</Card.Meta>
        <Card.Description>
          Go Beer! helps you find the best breweries near you!
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a href=""></a>
      </Card.Content>
    </Card>{" "}
    <Card>
      <Image src="/images/DCRice.jpeg" wrapped ui={false} />
      <Card.Content>
        <Card.Header>FrightFinder</Card.Header>
        <Card.Meta>Project #2</Card.Meta>
        <Card.Description>
          FrightFinder will uncover all those haunted places lurking in the
          shadows right under your nose!
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a href=""></a>
      </Card.Content>
    </Card>{" "}
    <Card>
      <Image src="/images/DCRice.jpeg" wrapped ui={false} />
      <Card.Content>
        <Card.Header>Good Wine and Fine Spirits</Card.Header>
        <Card.Meta>Project #3</Card.Meta>
        <Card.Description>
          No matter that you are in quarantine, you can still get booze!
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a href="">Grab some suds! </a>
      </Card.Content>
    </Card>{" "}
    <Card>
      <Image src="/images/DCRice.jpeg" wrapped ui={false} />
      <Card.Content>
        <Card.Header>Employee Tracker</Card.Header>
        <Card.Meta>React Application</Card.Meta>
        <Card.Description>
          Get to know all your favorite Howard Stern staff members!
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a href="https://jpf-employee-directory.herokuapp.com/">Employee Tracker</a>
      </Card.Content>
    </Card>{" "}
  </Card.Group>
);
export default Portfolio;
