import * as React from "react";
import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import data from "../data.json";

interface ExploreCardProps {
  id: string;
  nftName: string;
  creatorName: string;
  sellerName: string;
  image: string;
}

export default function ExploreCard(props: ExploreCardProps) {
  return (
    <Link href={"/explore/" + props.uid} passHref>
      <Card>
        <CardActionArea
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <CardMedia
            component="img"
            height="170"
            image={props.image}
            alt="green iguana"
          />
          
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ textAlign: "center" }}
            >
              {props.creatorName}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                textAlign: "center",
                fontSize: "18px",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}



<Box sx={{ flexGrow: 1 }}>
<Grid
  container
  spacing={{ xs: 2, md: 3 }}
  columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
>
  {nfts.map((nft, i) => (
    <Grid item xs={1} sm={1} md={1} lg={1} xl={1} key={i}>
      <ExploreCard
        id={nft.tokenId}
        nftName={nft.name}
        creatorName={nft.owner}
        sellerName={nft.seller}
        image={nft.image}
      />
    </Grid>
  ))}
</Grid>
</Box>