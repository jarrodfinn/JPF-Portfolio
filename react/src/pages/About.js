import React from "react";
import { Grid, Image } from "semantic-ui-react";

const About = () => (
  <div>
    <Grid>
      <Grid.Column width={7}>
        <Image src="../images/DCRice.jpeg" />
      </Grid.Column>
      <Grid.Column width={9}>
        <p>
          My name is Jarrod Finn and I am on my way to becoming a coding master! I chose to begin
          the learning journey by taking the Coding Bootcamp through Penn LPS and
          Trilogy Education Services. The importance of learning how to code
          truly excites me and will surely enrich my career. My goal is to integrate the knowledge of coding with my love of and history with working in the wine industry.
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
