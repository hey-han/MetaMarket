import { NextPage } from "next";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import { WithLogin } from "../../components/AuthModal";
import ExploreCard from "../../components/ExploreCard";
import data from "../../data.json";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Explore: NextPage = () => {
  return (
    <div
      style={{
        margin: "100px",
        marginTop: "60px",
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
        >
          {data.nft.map((data, index) => (
            <Grid item xs={1} sm={1} md={1} lg={1} xl={1} key={index}>
              <ExploreCard
                uid={data.uid}
                creatorName={data.creatorName}
                creatorAvatarURL={data.creatorAvatarURL}
                imageURL={data.imageURL}
                description={data.description}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

// export default WithLogin(Explore);
export default Explore;
