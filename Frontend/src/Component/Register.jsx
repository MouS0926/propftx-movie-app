import styled from "@emotion/styled";
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../Redux/Api/authApi";
import { authLoading, registerSelectUser } from "../Redux/Slice/registerSlice";
import { Link, useNavigate } from "react-router-dom";

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
export default function Register() {

    //const message=useSelector(registerSelectUser)
    const loading =useSelector(authLoading)
    const dispatch = useDispatch();
    const navigate = useNavigate(); 
    //const [alertMessage, setAlertMessage] = useState("");


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


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(registerUser(formData)).then(() => {
          
            alert("Registered Successfully")
            navigate('/login');
            //setAlertMessage("");
        });
      };

    //   if (message) {
    //     const stringifiedMessage = JSON.stringify(message.msg); 
    //     const extractedMessage = stringifiedMessage.substring(1, stringifiedMessage.length - 1);
    
    // setAlertMessage(extractedMessage);  
    // alert(extractedMessage); 
    // setTimeout(() => {
    //     setAlertMessage("");
    // }, 3000);
    // }
      
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
            Register
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container  spacing={2}>
              <Grid item xs={12}>
               <CustomTextField
                  label="Username"
                  variant="outlined"
                  fullWidth
                  required
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
            <CustomTextField
                  label="Email"
                  variant="outlined"
                  type="email"
                  name="email"
                  fullWidth
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
            <CustomTextField
                  label="Password"
                  variant="outlined"
                  type="password"
                  fullWidth
                  name="password"
                  required
                  value={formData.password}
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
                  { loading? "Register...........":"Register"}
                </Button>

                <Link to='/login'>Login</Link>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </div>
  )
}
