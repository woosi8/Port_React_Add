import { styled } from "@mui/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Divider } from "@mui/material";

const BorderGrid = styled(Grid)({
    borderBottom: "1px solid rgba(0,0,0,0.12)"
});

const InfoBox = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    margin: 50,
});

const StyledCard = styled(Card)({
  minWidth: 1000,
  border: "1px solid rgba(0,0,0,0.12)",
  borderRadius: 2,
})



const basic = [
    {
        title: "NAME", content: "Jacka Coen",
    },
    {
        title: "Birthday", content: "1999-10-02",
    },
    {
        title: "Gender", content: "Rather not say",
    }
]

const contact = [
  {
      title: "E-mail", content: "choen1024@gmail.com",
  },
  {
      title: "Phone", content: "82 456 8897",
  },
]


function BasicRow() {
  return (
    <>
    {basic.map( (el) => {
        return ( 
        <>    
        <BorderGrid item xs={2}>
            <Typography variant="overline" display="block" color="primary" gutterBottom>
            {el.title}
            </Typography>
        </BorderGrid>
        <BorderGrid item xs={10}>
            <Typography variant="body1">{el.content}</Typography>
        </BorderGrid>
        </>
        )
    })}
    </>
  );
}


function ContactRow() {
  return (
    <>
    {contact.map( el => {
        return ( 
        <>    
        <BorderGrid item xs={2}>
            <Typography variant="overline" display="block" color="primary" gutterBottom>
            {el.title}
            </Typography>
        </BorderGrid>
        <BorderGrid item xs={10}>
            <Typography variant="body1">{el.content}</Typography>
        </BorderGrid>
        </>
        )
    })}
    </>
  );
}

export default function MyAccount() {
  return (
    <>
    <InfoBox>
      <StyledCard>
        <CardHeader
          sx={{ padding: 3 }}
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Basic Info"
          subheader="September 14, 2020"
        ></CardHeader>
        <Divider />

        <CardContent sx={{ minHeight: 150, padding: 3 }}>
          <Grid container spacing={1}>
            <Grid container item spacing={2}>
              <BasicRow />
            </Grid>
          </Grid>
        </CardContent>

      </StyledCard>
    </InfoBox>


    <InfoBox>
      <StyledCard>
        <CardHeader
          sx={{ padding: 3 }}
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Contact Info"
        ></CardHeader>
        <Divider />

        <CardContent sx={{ minHeight: 150, padding: 3 }}>
          <Grid container spacing={1}>
            <Grid container item spacing={2}>
              <ContactRow />
            </Grid>
          </Grid>
        </CardContent>

      </StyledCard>
    </InfoBox>
    </>
  );
}