import React, { useContext } from 'react'

import k1 from './../Img/Kid_shoes_01.jpg'
import k2 from './../Img/Kid_shoes_02.jpg'
import k3 from './../Img/Kid_shoes_03.jpg'
import k4 from './../Img/Kid_shoes_04.jpg'
import k5 from './../Img/Kid_shoes_05.jpg'
import k6 from './../Img/Kid_shoes_06.jpg'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Grid from '@material-ui/core/Grid';
import { useNavigate } from 'react-router-dom';
import { shoeContex } from '../Context/ContextApi';


const useStyles = makeStyles((theme) => ({
    root:{
        // color:"#f7f7f7f",
    },
    card: {
        maxWidth:345,
        margin:"10px"
    },
    link: {
        textDecoration:"none",
        borderColor:"10px solid black"
    },
    grd: {
        border:"2px solid #D3D3D3",
        borderRadius:"5px",
        marginTop:"20px",
        marginLeft:"40px",
        margin:"auto",
        backgroundColor:"white"
    },
    img:{
        width:"100%",
        height:"100%"
    },
    desc: {
        textAlign:"center",
        marginBottom:"20px"
    }
  }));

export const Kids = () => {
    const classes = useStyles();
    const navigate=useNavigate();
    const {Add_shoe}=useContext(shoeContex);

    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                    <Grid item xs={10} sm={5} md={3} lg={3} className={classes.grd}>
                        <div onClick={()=>{navigate("/products/Kid_shoes_01")}}>
                            <img src={k1} className={classes.img} alt=""></img>                     
                        </div>
                        <div className={classes.desc}>
                            <p>Nike Blazer Mid '77 Vintage</p>  
                            <Button
                                id="btn1"
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                startIcon={<ShoppingCartIcon></ShoppingCartIcon>}
                                onClick={()=>{Add_shoe("Kid_shoes_02"); console.log(document.getElementById("btn1").value)}}
                            >
                                Add To Cart
                            </Button>
                        </div>
                    </Grid>
                    <Grid item xs={10} sm={5} md={3} lg={3} className={classes.grd}>
                        <div onClick={()=>{navigate("/products/Kid_shoes_02")}}>
                            <img src={k2} className={classes.img} alt=""></img>                     
                        </div>
                        <div className={classes.desc}>
                            <p>Nike Blazer Mid '77 Vintage</p>  
                            <Button
                                id="btn1"
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                startIcon={<ShoppingCartIcon></ShoppingCartIcon>}
                                onClick={()=>{Add_shoe("Kid_shoes_02"); console.log(document.getElementById("btn1").value)}}
                            >
                                Add To Cart
                            </Button>
                        </div>
                    </Grid>
                    <Grid item xs={10} sm={5} md={3} lg={3} className={classes.grd}>
                        <div onClick={()=>{navigate("/products/Kid_shoes_03")}}>
                            <img src={k3} className={classes.img} alt=""></img>                     
                        </div>
                        <div className={classes.desc}>
                            <p>Nike Blazer Mid '77 Vintage</p>  
                            <Button
                                id="btn1"
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                startIcon={<ShoppingCartIcon></ShoppingCartIcon>}
                                onClick={()=>{Add_shoe("Kid_shoes_03"); console.log(document.getElementById("btn1").value)}}
                            >
                                Add To Cart
                            </Button>
                        </div>
                    </Grid>
                    <Grid item xs={10} sm={5} md={3} lg={3} className={classes.grd}>
                        <div onClick={()=>{navigate("/products/Kid_shoes_04")}}>
                            <img src={k4} className={classes.img} alt=""></img>                     
                        </div>
                        <div className={classes.desc}>
                            <p>Nike Blazer Mid '77 Vintage</p>  
                            <Button
                                id="btn1"
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                startIcon={<ShoppingCartIcon></ShoppingCartIcon>}
                                onClick={()=>{Add_shoe("Kid_shoes_04"); console.log(document.getElementById("btn1").value)}}
                            >
                                Add To Cart
                            </Button>
                        </div>
                    </Grid>
                    <Grid item xs={10} sm={5} md={3} lg={3} className={classes.grd}>
                        <div onClick={()=>{navigate("/products/Kid_shoes_01")}}>
                            <img src={k5} className={classes.img} alt=""></img>                     
                        </div>
                        <div className={classes.desc}>
                            <p>Nike Blazer Mid '77 Vintage</p>  
                            <Button
                                id="btn1"
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                startIcon={<ShoppingCartIcon></ShoppingCartIcon>}
                                onClick={()=>{Add_shoe("Kid_shoes_05"); console.log(document.getElementById("btn1").value)}}
                            >
                                Add To Cart
                            </Button>
                        </div>
                    </Grid>
                    <Grid item xs={10} sm={5} md={3} lg={3} className={classes.grd}>
                        <div onClick={()=>{navigate("/products/Kid_shoes_06")}}>
                            <img src={k6} className={classes.img} alt=""></img>                     
                        </div>
                        <div className={classes.desc}>
                            <p>Nike Blazer Mid '77 Vintage</p>  
                            <Button
                                id="btn1"
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                startIcon={<ShoppingCartIcon></ShoppingCartIcon>}
                                onClick={()=>{Add_shoe("Kid_shoes_06"); console.log(document.getElementById("btn1").value)}}
                            >
                                Add To Cart
                            </Button>
                        </div>
                    </Grid>
            </Grid>
        </div>
        
    )
}


