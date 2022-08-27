import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import PersonAddIcon from '@mui/icons-material/PersonAdd';


const theme = createTheme();

// describing the object 
const formValidationschema = yup.object({
    firstName: yup
        .string("Jordan")
        .required(" Your first name is required"),

    lastName: yup
        .string("Eldridge")
        .required(" Your last name is required"),

    email: yup
    .string("Jordan@codedifferently.com")
    .email("Invalid email format")
    .required("Email is required"),

    phoneNumber: yup
    .string("302-312-5754")
    .required("Phone Number is required"),
    
    password:yup
    .string("Password123")
    .required("Password is required"),

    selectedRole:yup
    .string("Donor")
    .required("Please select a role"),


})


export default function User() {
        const formik = useFormik({
            initialValues: {
                firstName: "",
                lastName: "",
                email: "",
                phoneNumber: "",
                password: "",
                selectedRole: "",

            },
            validationSchema: formValidationschema,
            onSubmit:(values)=>{
                axios.post('http://localhost:8080/api/vi/user',values)
                .then(response=>{
                    console.log(response)
                })
            }
        })

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <PersonAddIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
            New User 
          </Typography>
          <Box component="form" noValidate onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={formik.values.firstName}
                  onChange = {formik.handleChange}
                  error= {formik.touched.firstName && Boolean(formik.errors.firstName)}
                  helperText= {formik.touched.firstName && formik.errors.firstName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={formik.values.lastName}
                  onChange = {formik.handleChange}
                  error= {formik.touched.lastName && Boolean(formik.errors.lastName)}
                  helperText= {formik.touched.lastName && formik.errors.lastName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={formik.values.email}
                  onChange = {formik.handleChange}
                  error= {formik.touched.email && Boolean(formik.errors.email)}
                  helperText= {formik.touched.email && formik.errors.email}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="phoneNumber"
                  label="Phone Number"
                  name="phoneNumber"
                  autoComplete="family-name"
                  value={formik.values.phoneNumber}
                  onChange = {formik.handleChange}
                  error= {formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                  helperText= {formik.touched.phoneNumber && formik.errors.phoneNumber}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="password"
                  label="Password"
                  name="password"
                  autoComplete="family-name"
                  value={formik.values.password}
                  onChange = {formik.handleChange}
                  error= {formik.touched.password && Boolean(formik.errors.password)}
                  helperText= {formik.touched.password && formik.errors.password}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="selectedRole"
                  label="Selected Role"
                  name="selectedRole"
                  autoComplete="family-name"
                  value={formik.values.selectedRole}
                  onChange = {formik.handleChange}
                  error= {formik.touched.selectedRole && Boolean(formik.errors.selectedRole)}
                  helperText= {formik.touched.selectedRole && formik.errors.selectedRole}
                />
              </Grid>
              
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
            {/* <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid> */}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}