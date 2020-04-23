import React from "react";
import { Card, Image } from "semantic-ui-react";
const Portfolio = () => (
  <Card.Group>
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
        <a href="https://www.cellarratwine.com/">Grab some suds! </a>
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
          Employee Tracker
        </a>
      </Card.Content>
    </Card>{" "}
    <Card>
      <Image src="" wrapped ui={false} />
      <Card.Content>
        <Card.Header>Curriculum Vitae</Card.Header>
        <Card.Meta></Card.Meta>
        <Card.Description></Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a href="https://drive.google.com/open?id=1nmtOf6ClDlIzS3zN55P71jQ6zptgChhz">
          Read my Resume
        </a>
      </Card.Content>
    </Card>{" "}
    <Card>
      <Image src="/images/linkedin.jpeg" wrapped ui={false} />
      <Card.Content>
        <Card.Header>LinkedIn</Card.Header>
        <Card.Meta></Card.Meta>
        <Card.Description>
          If you want to know more about what else I've done, click the link.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a href="https://www.linkedin.com/in/jarrod-finn-41175665/">LinkedIn</a>
      </Card.Content>
    </Card>{" "}
  </Card.Group>
);
export default Portfolio;
