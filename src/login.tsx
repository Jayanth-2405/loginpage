import { Container, TextField, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Button from "@mui/material/Button";
import "./index.css";
import { Formik } from "formik";
import styled from "styled-components";

interface formModel {
  name: string;
  email: string;
  password: string;
}
const Loginform = () => {
  return (
    <div className="bg-color">
      <Container className="form-wrapper" maxWidth="sm">
        <div>
          <Grid container rowSpacing={2}>
            <Grid size={{ xs: 12, md: 12, sm: 12, lg: 12}}>
              <Formik<formModel>
                initialValues={{
                  name: "",
                  email: "",
                  password: "",
                }}
                onSubmit={(values) => {
                  alert(JSON.stringify(values));
                }}
              >
                {({ handleSubmit, values, handleChange }) => (
                  <form onSubmit={handleSubmit}>
                    <Box
                      component="span"
                      sx={{ p: 2, color: "#1d395d", textAlign: "center" }}
                    >
                      <h1>login</h1>
                    </Box>
                    <BoxContainer>
                      <label>Name</label>
                      <TextField
                        fullWidth
                        label={"Enter Your Name"}
                        style={{ margin: "10px" }}
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                      />
                      <label>Email</label>
                      <TextField
                        fullWidth
                        label={"Email"}
                        style={{ margin: "10px" }}
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                      />
                      <label>Password</label>
                      <TextField
                        fullWidth
                        label={"Password"}
                        style={{ margin: "10px" }}
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                      />
                    </BoxContainer>

                    <Button type="submit" fullWidth variant="contained">
                      Submmit
                    </Button>
                  </form>
                )}
              </Formik>
            </Grid>
          </Grid>
        </div>
        <Wrapper>
          <Title>Your Details</Title>
        </Wrapper>
        <Wrapper>
          
        </Wrapper>
      </Container>
    </div>
  );
};
export default Loginform;

const BoxContainer = styled(Box)`padding:'20px';
 width:'25rem;
 textAlign:'left'; 
 background:"pink";
 borderRadius:5;
 display:"flex"; 
 flexDirection:"column";
 alignItems:"start";
 justifyContent:"center" `;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  font-style:bold;

`;
const Wrapper = styled.section`
  padding: 2.5em;
  background: skyblue;
  margin-top: 100px;
  margin-left: 20px;
  border-radius: 10px;
  margin-right: 5px;
  hover: ;
`;
