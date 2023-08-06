import { NavLink } from "react-router-dom"
import Container from '@mui/material/Container'

const HomePage = () => {

    return (
         <Container maxWidth='md' sx={{ textAlign: 'center'}}>
             <h1>Welcome to Currency Exchange</h1>
             <NavLink to="/currencyconvertor">Ready? Please click here to enter!</NavLink>
        </Container>   
   )    
}

export default HomePage