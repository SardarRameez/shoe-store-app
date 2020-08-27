import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import m1 from './../Img/Men_shoes_01.jpg'
import m2 from './../Img/Men_shoes_02.jpg'
import k1 from './../Img/Kid_shoes_01.jpg'
import k2 from './../Img/Kid_shoes_02.jpg'
import w1 from './../Img/Women_shoes_01.jpg'
import w2 from './../Img/Women_shoes_02.jpg'
import { useNavigate } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    padding:"20px"
  },
  media: {
    height: 240,
    width:"100%"
  },
  grd: {
    border:"2px solid #D3D3D3",
    padding:"20px",
    margin:"auto",
    marginTop:"20px"
},
});

export default function Home() {
  const classes = useStyles();
  const navigate=useNavigate();

  return (
        <div className={classes.root}>
          <h2>Top Rated Products:</h2>
          <Grid container spacing={0}>
            <Grid item xs={10} sm={5} md={3} lg={3} className={classes.grd}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={m1}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                      across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary" onClick={()=>{navigate("/products/Men_shoes_01")}}>
                    Deatils
                  </Button>
                  <Button size="small" color="primary" onClick={()=>{navigate("/products")}}>
                    Explore Products
                  </Button>
                </CardActions>
              </Card>
            </Grid>


            <Grid item xs={10} sm={5} md={3} lg={3} className={classes.grd}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={k1}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                      across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary" onClick={()=>{navigate("/products/Kid_shoes_01")}}>
                    Deatils
                  </Button>
                  <Button size="small" color="primary" onClick={()=>{navigate("/products")}}>
                    Explore Products
                  </Button>
                </CardActions>
              </Card>
            </Grid>


            <Grid item xs={10} sm={5} md={3} lg={3} className={classes.grd}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={w1}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                      across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary" onClick={()=>{navigate("/products/Women_shoes_01")}}>
                    Deatils
                  </Button>
                  <Button size="small" color="primary" onClick={()=>{navigate("/products")}}>
                    Explore Products
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>


          {/* Most Reviewed Products */}

          <h2>Most Reviewed Products:</h2>
          <Grid container spacing={0}>
            <Grid item xs={10} sm={5} md={3} lg={3} className={classes.grd}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={m2}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                      across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary" onClick={()=>{navigate("/products/Men_shoes_02")}}>
                    Deatils
                  </Button>
                  <Button size="small" color="primary" onClick={()=>{navigate("/products")}}>
                    Explore Products
                  </Button>
                </CardActions>
              </Card>
            </Grid>


            <Grid item xs={10} sm={5} md={3} lg={3} className={classes.grd}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={k2}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                      across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary" onClick={()=>{navigate("/products/Kid_shoes_02")}}>
                    Deatils
                  </Button>
                  <Button size="small" color="primary" onClick={()=>{navigate("/products")}}>
                    Explore Products
                  </Button>
                </CardActions>
              </Card>
            </Grid>


            <Grid item xs={10} sm={5} md={3} lg={3} className={classes.grd}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={w2}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                      across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary" onClick={()=>{navigate("/products/Women_shoes_02")}}>
                    Deatils
                  </Button>
                  <Button size="small" color="primary" onClick={()=>{navigate("/products")}}>
                    Explore Products
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </div>
  );
}

