import React, { useContext } from 'react'
import { shoeContex } from '../Context/ContextApi';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({

    grd: {
        border:"2px solid #D3D3D3",
        borderRadius:"5px",
        margin:"30px 50px 40px 20px",
        backgroundColor:"white"
    },
    img:{
        width:"100%",
        height:"100%"
    },
    btn: {
        width:"100%"
    },
    formControl: {
        width:"200px",
        marginLeft:"20px"
    },
  }))

export const Carts = () => {
    const [size, setSize] = React.useState(6);
    const classes = useStyles();
    const {state}=useContext(shoeContex);
    const {Delete_shoe}=useContext(shoeContex)
    const handleChange = (event) => {
        setSize(event.target.value);
      };

    return (
        <div>
            {state.map((image)=>
                <div>
                    <Grid container spacing={0}>
                        <Grid item xs={10} sm={5} md={3} lg={3} className={classes.grd}>
                            <img src={require(`./../Img/${image.img}.jpg`)} alt="img" className={classes.img}/>
                            <Button variant="contained" color="secondary" onClick={()=>{Delete_shoe(image.img)}} className={classes.btn}>
                                Delete
                            </Button>
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
                            <FormControl className={classes.formControl}>
                                <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                                Quantity
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
                            <Box component="fieldset" mb={3} borderColor="transparent">
                                <Typography component="legend"><strong>Reviews(7)</strong></Typography>
                                <Rating name="read-only" value="4" readOnly />
                            </Box>
                        </Grid>
                    </Grid>
                </div>)}
        </div>
    )
}

