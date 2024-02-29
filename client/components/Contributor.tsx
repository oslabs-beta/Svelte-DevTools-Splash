import React from "react";
import Box from "@mui/material/Box";
const linkedInPng = require("../assets/linkedIn.svg");
const githubPng = require("../assets/github.svg");
const maciejImg = require("../assets/MaciejPng.png");
const lauraImg = require("../assets/LauraPng.png");
const francisImg = require("../assets/FrancisPng.png");
const janiceImg = require("../assets/JanicePng.png");
const alexImg = require("../assets/AlexPng.png");

const styles = {
  icons: {
    width: "40px",
    height: "40px",
    marginLeft: "10px",
    marginRight: "10px",
    marginBottom: "30px",
    marginTop: "10px",
    display: "flex",
    cursor: "pointer",
  },
};

type TeamMember = {
  id: number;
  img: string;
  firstName: string;
  lastName: string;
  gitHub: string;
  linkedIn: string;
};

const francis: TeamMember = {
  id: 0,
  img: francisImg,
  firstName: "Francis",
  lastName: "Espinoza",
  gitHub: "https://github.com/francis8933",
  linkedIn: "https://www.linkedin.com/in/espinozafrancis/",
};

const alex: TeamMember = {
  id: 1,
  img: alexImg,
  firstName: "Alexander",
  lastName: "Vranas",
  gitHub: "https://github.com/avranas",
  linkedIn: "https://www.linkedin.com/in/avranas/",
};

const laura: TeamMember = {
  id: 2,
  img: lauraImg,
  firstName: "Laura",
  lastName: "Glass-Johnston",
  gitHub: "https://github.com/ellgeejay",
  linkedIn: "https://www.linkedin.com/in/laura-glass-johnston/",
};

const maciej: TeamMember = {
  id: 3,
  img: maciejImg,
  firstName: "Maciej",
  lastName: "Małecki",
  gitHub: "https://github.com/maciekmalecki/",
  linkedIn: "https://www.linkedin.com/in/mmaciej/",
};

const janice: TeamMember = {
  id: 4,
  img: janiceImg,
  firstName: "Janice",
  lastName: "Chu",
  gitHub: "https://github.com/JaniceKZ",
  linkedIn: "https://www.linkedin.com/in/janice-chu-075705284/",
};

const team: Array<TeamMember> = [];
team.push(francis);
team.push(alex);
team.push(laura);
team.push(maciej);
team.push(janice);

const Contributor = () => {
  // Creating contributors cards
  const svelteSquad: JSX.Element[] = team.map((member: TeamMember) => {
    return (
      <Box
        key={member.firstName + "-" + member.lastName}
        className="contributor"
      >
        <Box className="contributor">
          <Box component="img" src={member.img}></Box>
          <h5>
            {member.firstName} {member.lastName}
          </h5>
          <p>Software Engineer</p>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Box
              id="link"
              component="img"
              onClick={() => {
                window.open(`${member.linkedIn}`);
              }}
              style={styles.icons}
              src={linkedInPng}
              sx={{ ":hover": { width: "10px" } }}
            ></Box>
            <Box
              id="link"
              component="img"
              onClick={() => {
                window.open(`${member.gitHub}`);
              }}
              style={styles.icons}
              src={githubPng}
            ></Box>
          </Box>
        </Box>
      </Box>
    );
  });

  return (
    <div
      id="teamTopDiv"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "150px",
      }}
    >
      <div
        id="TeamBio"
        style={{
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>Meet Our Engineering Team</h2>
        <Box
          id="members"
          justifyContent="center"
          alignContent="center"
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap",
            alignItems: "flex-start",
            mb: 10,
          }}
        >
          {svelteSquad}
        </Box>
      </div>
    </div>
  );
};
export default Contributor;
