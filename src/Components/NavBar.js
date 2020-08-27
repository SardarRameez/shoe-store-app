import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import { shoeContex } from '../Context/ContextApi';


const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width:"100%"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  btn:{
      textTransform:"capitalize",
      fontSize:"20px",
      marginRight:"50px",
      padding:"5px"
  }
}));

export default function NavBar() {
  const classes = useStyles();
  const navigate=useNavigate();
  const {state}=useContext(shoeContex)
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{width:"100%"}}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
          <Button color="inherit" className={classes.btn} onClick={()=>{navigate("/")}}>Nike Shoes</Button>
          </Typography>
          <Button color="inherit" className={classes.btn} onClick={()=>{navigate("/products")}}>Products</Button>
          <Button color="inherit" className={classes.btn} onClick={()=>{navigate("/carts")}}>
            <IconButton style={{color:"white"}} aria-label="add to shopping cart">
                <StyledBadge badgeContent={state.length} color="primary">
                  <ShoppingCartIcon />
                </StyledBadge>
            </IconButton>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
