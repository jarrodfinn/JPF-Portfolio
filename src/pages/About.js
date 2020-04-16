import React from "react";
import { Grid, Image } from "semantic-ui-react";

const About = () => (
  <div>
    <Grid>
      <Grid.Column width={7}>
        <Image src="/images/DCRice.jpeg" />
      </Grid.Column>
      <Grid.Column width={9}>
        <p>
          My name is Jarrod Finn. I am new to coding and have chosen to begin
          the learning journey by taking a coding bootcamp through Penn LPS and
          Trilogy Education Services. The importance of learning how to code
          truly excites me and will surely enrich my career.
        </p>
        <p>
          My goal is to be an asset to my existing company, as well as
          facilitating in creating and maintaining websites, not only for my
          current company, but also for the amazingly talented winemakers we are
          lucky enough to import to the United States.
        </p>
      </Grid.Column>
    </Grid>{" "}
  </div>
);

export default About;
