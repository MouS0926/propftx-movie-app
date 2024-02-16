import styled from "@emotion/styled";
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

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
  
    const [formData, setFormData] = useState({
      username: '',
      email: '',
      password: ''
    });
    const handleInputChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
          });
         
    }

  return (
    <div style={{ 
        height: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center' ,
       
        
        }}>
      <Grid item xs={12} sm={6} md={5}>
        <Paper sx={{ padding: "20px",maxWidth: 400 , backgroundColor:"#292828",}}>
          <Typography variant="h5" align="center" gutterBottom sx={{ color: "#ffffff" }}>
           Login
          </Typography>
          <form>
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
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </div>
  )
}
