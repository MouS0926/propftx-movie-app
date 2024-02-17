import styled from "@emotion/styled";
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../Redux/Api/authApi";
import { authuser } from "../Redux/Slice/authSlice";

const CustomTextField = styled(TextField)`
  && {
    label {
      color: #ffffff; 
    }
    input {
      color: #ffffff; 
    }
    .MuiOutlinedInput-root {
      fieldset {
        border-color: #636363; 
      }
      &:hover fieldset {
        border-color: #e0e0e0; 
      }
      &.Mui-focused fieldset {
        border-color: #e1e1e1; 
      }
    }
  }
`;
export default function Login() {

  
    const dispatch = useDispatch();
    const navigate = useNavigate(); 
    const user=useSelector(authuser)

    const [formData, setFormData] = useState({
      
      email: '',
      password: ''
    });
    const handleInputChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
          });
         
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser(formData))
        .unwrap()
        .then((data) => {
            
            localStorage.setItem('token', data.token);
            localStorage.setItem('loggedinUser', data.username);
            navigate('/');
        })
        .catch((err) => {
            alert("Wrong Credentials");
            console.log(err);
        });
      };

      console.log(user);
     
      
  return (
    <div style={{ 
        height: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center' ,
       
        
        }}>
      <Grid item xs={12} sm={6} md={5}>
        <Paper sx={{ padding: "20px",maxWidth: 400 , backgroundColor:"#160a20",}}>
          <Typography variant="h5" align="center" gutterBottom sx={{ color: "#ffffff" }}>
           Login
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container  spacing={2}>
              
              <Grid item xs={12}>
            <CustomTextField
                  label="Email"
                  variant="outlined"
                  type="email"
                  fullWidth
                  required
                  name="email"
                  value={formData.username}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
            <CustomTextField
                  label="Password"
                  variant="outlined"
                  type="password"
                  fullWidth
                  required
                  name="password"
                  value={formData.username}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{backgroundColor:"#bc6106"}}
                >
                  Login
                </Button>
                <Link to='/user/register'>Register</Link>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </div>
  )
}
