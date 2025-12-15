import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Chip from '@mui/material/Chip';

export default function AlbumCard({isSongs,album}) {

  const formatFollows = (count) => {
  if (count >= 1000) {
    return `${Math.floor(count / 1000)}k`;
  }
  return `${count}`;
};

const value = album.follows ?? album.likes;
const label = album.follows != null ? "follows" : "likes";




  return (
    <>
    <Card sx={{ maxWidth: 190,  borderRadius: 5}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="204"
          image={album.image}
          alt="green iguana"
        />
      </CardActionArea>
      <CardActions >
        <Chip label={`${formatFollows(value)} ${label}`} color="primary"  sx={{
      height: 23, color: "#ffff"}}/>
      </CardActions>
    </Card>
    <Typography gutterBottom  component="div"   sx={{
    marginBottom: 4
  }}>
            {album.title}
          </Typography>
    </>
  );
}
