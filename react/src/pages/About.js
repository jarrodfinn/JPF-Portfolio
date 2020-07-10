import React from "react";
import { Grid, Image } from "semantic-ui-react";
import "./style.css";
const About = () => (
  <div>
    <Grid>
      <Grid.Column width={6}>
        <Image
          src="../images/DCRice.jpeg"
          className="DCRice"
          style={{
            height: "auto",
            maxHeight: "500px",
            width: "auto",
            maxWidth: "400px",
          }}
        />
      </Grid.Column>
      <Grid.Column width={10}>
        <p>
          Hi! My name is Jarrod Finn. I am on my way to becoming a coding
          master!
        </p>
        <p>
          I chose to begin the learning journey by taking the Coding Bootcamp
          through Penn LPS and Trilogy Education Services. This is a six month
          intensive program that surveys any coding language that you might come
          across in the modern software and website development world.
          <p>
            {" "}
            The importance of learning how to code truly excites me and will
            surely enrich my career. My goal is to integrate the knowledge of
            coding with my love of and history with working in the wine
            industry.
          </p>
        </p>
        <p>
          My goal is to be an asset to my existing company, as well as
          facilitating the creation and maintainence of websites, not only for
          my current company, MFW Wine Company, but also for the amazingly
          talented artisanal winemakers we are lucky enough to import to the
          United States.
        </p>
        <p>I am currently</p>
      </Grid.Column>
    </Grid>{" "}
  </div>
);

export default About;
