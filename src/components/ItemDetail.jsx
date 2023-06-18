import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

const ItemDetail = ({ item }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" image={item.image} alt="imagen del producto" />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {item.title}
        </Typography>
        <Typography gutterBottom variant="p" component="div">
          {item.description}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "space-between",
          }}
        >
          <CardActions>
            <Button>Add to cart</Button>
          </CardActions>
          <Typography variant="h4">${item.price}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
export default ItemDetail;
