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
  uid: string;
  imageURL: string;
  creatorName: string;
  creatorAvatarURL: string;
  description: string;
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
            image={props.imageURL}
            alt="green iguana"
          />
          <Avatar
            src={props.creatorAvatarURL}
            sx={{
              bgcolor: red[500],
              marginTop: "-30px",
              width: "70px",
              height: "70px",
              border: "5px solid white",
            }}
          >
            S
          </Avatar>
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
