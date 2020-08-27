import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { shoeContex } from '../Context/ContextApi';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles((theme) => ({
    root:{
        // color:"#f7f7f7f",
        // height:"100%"
    },
    grd: {
        border:"2px solid #D3D3D3",
        borderRadius:"5px",
        margin:"20px",
        backgroundColor:"white"
    },
    desc:{
        margin:"0px 20px"
    },
    img: {
        height:"100%",
        width:"100%"
    },
    formControl: {
        width:"200px"
    },
    button: {
        margin:"0px 20px"
    }
  }));


export const ProductDetails = () => {
    const classes = useStyles();
    const {id}=useParams();
    const [size, setSize] = React.useState(6);
    const {Add_shoe}=useContext(shoeContex);
  
    const handleChange = (event) => {
      setSize(event.target.value);
    };


    const imageName=id;
    return (
        <div>
            <Grid container spacing={0}>
                <Grid item xs={12} lg={12} style={{marginLeft:"20px",}}>
                    <h2>Nike Air Max 90</h2>
                </Grid>
                <Grid item xs={10} sm={5} md={4} lg={4} className={classes.grd}>
                    <img src={require(`./../Img/${imageName}.jpg`)} alt="Img"  className={classes.img}/>
                </Grid>
                <Grid item xs={10} sm={5} md={4} lg={4} className={classes.desc}>
                    <h2>$150</h2>
                    <h2>Nike Air Max 90</h2>
                    <FormControl className={classes.formControl}>
                        <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                        Available Sizes
                        </InputLabel>
                        <Select
                        labelId="demo-simple-select-placeholder-label-label"
                        id="demo-simple-select-placeholder-label"
                        value={size}
                        onChange={handleChange}
                        displayEmpty
                        className={classes.selectEmpty}
                        >
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={6}>6</MenuItem>
                            <MenuItem value={7}>7</MenuItem>
                            <MenuItem value={8}>8</MenuItem>
                            <MenuItem value={9}>9</MenuItem>
                        </Select>
                    </FormControl>
                    <h3>Description</h3>
                    <p>The Nike Air Max 90 stays true to its OG running roots with an iconic Waffle outsole, 
                        stitched overlays and classic colour-accented TPU plates. 
                        The Laser Blue tone celebrates the original and is paired perfectly with the striking greyscale upper,
                        while Max Air cushioning adds comfort to your journey.</p>
                    <Box component="fieldset" mb={3} borderColor="transparent">
                        <Typography component="legend"><strong>Reviews(7)</strong></Typography>
                        <Rating name="read-only" value="4" readOnly />
                    </Box>
                    <Button
                        id="btn1"
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        startIcon={<ShoppingCartIcon></ShoppingCartIcon>}
                        onClick={()=>{Add_shoe("Men_shoes_01"); console.log(document.getElementById("btn1").value)}}
                    >
                                Add To Cart
                    </Button>
                    <Button variant="contained" color="secondary">
                        Add Favorite
                    </Button>
                </Grid>
            
            </Grid>
        </div>
    )
}
