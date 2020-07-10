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
          // style={{
          //   height: "auto",
          //   maxHeight: "500px",
          //   width: "auto",
          //   maxWidth: "400px",
          // }}
        />
      </Grid.Column>
            {/* <Grid.Column
        width={4}
      ></ Grid.Column> */}

      <Grid.Column
        width={10
        }
        // style={{
        //   overflow: "auto",
        // }}
      >
        <h1>
          <strong>
            Hi! My name is Jarrod Finn and I want to welcome you here!
          </strong>
        </h1>
        <h3>
          <strong>
            I built this website to show the world what I can do! Since you are
            here, click the portfolio tab above to take a look at some of my Web
            Development and Coding projects that I have completed. I am very
            passionate about the world of web developmnent and am always
            learning more. My goal is to get a little bit better each day.
          </strong>
        </h3>
        <h3>
          <strong>
            The importance of learning how to code truly excites me and will
            surely enrich my career. My goal is to integrate the knowledge of
            coding with my love of and history with working in the wine
            industry.
          </strong>
        </h3>
        <h3>
          <strong>
            My goal is to be an asset to my existing company, as well as
            facilitating the creation and maintainence of websites, not only for
            my current company, MFW Wine Company, but also for the amazingly
            talented artisanal winemakers we are lucky enough to import to the
            United States.
          </strong>
        </h3>
      </Grid.Column>
    </Grid>{" "}
  </div>
);

export default About;
