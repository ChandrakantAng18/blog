import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { useNavigate } from "react-router-dom";

export default function BlogCard({ blog }) {
  let navigate = useNavigate();
  return (
    <Card sx={{ width: 345 }}>
      <CardMedia
        component="img"
        height="140"
        src={blog.full_img}
        alt="Blog-Images"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {blog.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {blog.detail}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => {
            navigate("/blog-detail", { state: { blog: blog } });
          }}
        >
          know more
        </Button>
      </CardActions>
    </Card>
  );
}
