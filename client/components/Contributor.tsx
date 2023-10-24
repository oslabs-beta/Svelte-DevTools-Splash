import { Box } from '@mui/material';
const linkedInPng = require('../assets/linkedIn.svg');
const githubPng = require('../assets/github.svg');
const maciej = require('../assets/MaciejPng.png');
const laura = require('../assets/LauraPng.png');
const francis = require('../assets/FrancisPng.png');
const janice = require('../assets/JanicePng.png');
const alex = require('../assets/AlexPng.png');

const styles = {
  icons: {
    width: '40px',
    height: '40px',
    marginLeft: '10px',
    marginRight: '10px',
    marginBottom: '30px',
    marginTop: '10px',
    display: 'flex',
    cursor: 'pointer',
  },
};

type TeamMember = {
  id: number;
  firstName: string;
  lastName: string;
  github: string;
  linkedin: string;
};

const picArr = [francis, alex, laura, maciej, janice];
const firstArr = ['Francis', 'Alexander', 'Laura', 'Maciej', 'Janice'];
const lastArr = ['Espinoza', 'Vranas', 'Glass-Johnston', 'Małecki', 'Chu'];
const gitArr = [
  'https://github.com/francis8933',
  'https://github.com/avranas',
  'https://github.com/ellgeejay',
  'https://github.com/maciekmalecki/',
  'https://github.com/JaniceKZ',
];
const linkArr = [
  'https://www.linkedin.com/in/espinozafrancis/',
  'https://www.linkedin.com/in/avranas/',
  'https://www.linkedin.com/in/laura-glass-johnston/',
  'https://www.linkedin.com/in/mmaciej/',
  'https://www.linkedin.com/in/janice-chu-075705284/',
];

const teammates: Array<TeamMember> = [];

for (let i = 0; i < gitArr.length; i++) {
  const newMember: TeamMember = {
    id: i,
    firstName: firstArr[i],
    lastName: lastArr[i],
    github: gitArr[i],
    linkedin: linkArr[i],
  };
  teammates.push(newMember);
}

const Contributor = () => {
  /*
    Getting Contributors from Database
  // const [teammates, setTeammates] = useState([]);

  // const team = async () => {
  //   let people = await fetch('http://localhost:3000/contributors', {
  //     method: 'GET',
  //     headers: { 'Content-Type': 'application/json' },
  //   });
  //   const response = await people.json();
  //   console.log(response, 'response contributors');
  //   setTeammates(response);
  // };

  // useEffect(() => {
  //   team();
  // }, []);
*/

  // Creating contributors cards
  const svelteSquad: JSX.Element[] = teammates.map((person: TeamMember) => {
    return (
      <Box className="contributor" style={{}}>
        <Box
          component="img"
          src={picArr[person.id]}
        ></Box>
        <h5>
          {person.firstName} {person.lastName}
        </h5>
        <p>Software Engineer</p>
        <Box
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <Box
            id="link"
            component="img"
            onClick={() => {
              window.open(`${person.linkedin}`);
            }}
            style={styles.icons}
            src={linkedInPng}
            sx={{ ':hover': { width: '10px' } }}
          ></Box>
          <Box
            id="link"
            component="img"
            onClick={() => {
              window.open(`${person.github}`);
            }}
            style={styles.icons}
            src={githubPng}
          ></Box>
        </Box>
      </Box>
    );
  });

  return (
    <div
      id="teamTopDiv"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '150px',
      }}
    >
      <div
        id="TeamBio"
        style={{
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h2>Meet Our Engineering Team</h2>
        <Box
          id="members"
          justifyContent="center"
          alignContent="center"
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
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
