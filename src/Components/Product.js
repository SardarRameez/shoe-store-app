import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Link, Outlet } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        padding:"20px 0px",
        // backgroundColor:"#f7f7f7",
    },
    btn: {
        width:"70%",
        margin:"10px 10px 10px 30px"
    },
    card: {
        maxWidth:345
    }
  }));


export const Product = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={5} sm={3}>
                    <Link to="/products/men" style={{color:"#000080", textDecoration:"none"}}>
                        <Button variant="outlined" color="primary" className={classes.btn}>MEN</Button>
                    </Link>  
                </Grid>
                <Grid item xs={5} sm={3}>
                    <Link to="/products/women" style={{color:"#000080", textDecoration:"none"}}>
                        <Button variant="outlined" color="primary" className={classes.btn}>WOMEN</Button>
                    </Link>  
                </Grid>
                <Grid item xs={5} sm={3}>
                    <Link to="/products/kids" style={{color:"#000080", textDecoration:"none"}}>
                        <Button variant="outlined" color="primary" className={classes.btn}>KIDS</Button>
                    </Link>  
                </Grid>
                <Grid item xs={5} sm={3}>
                    <Link to="/products/sportswear" style={{color:"#000080", textDecoration:"none"}}>
                        <Button variant="outlined" color="primary" className={classes.btn}>SPORTSWEAR</Button>
                    </Link>  
                </Grid>
            </Grid>


            <div>       
                <Outlet></Outlet>
            </div>  
        </div>
    )
}
