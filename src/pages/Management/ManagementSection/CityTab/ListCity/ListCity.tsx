import { Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ListCity = () => {
  const navigate = useNavigate();

  return (
    <Grid container>
      <Grid item>List City</Grid>
      <Button onClick={() => navigate("/app/management/hadith")}>
        To Hadith - /hadith
      </Button>
    </Grid>
  );
};

export default ListCity;
