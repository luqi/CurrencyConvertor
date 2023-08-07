import { NavLink } from "react-router-dom"
import Container from '@mui/material/Container'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'
import InfoIcon from '@mui/icons-material/Info'
import ContactsIcon from '@mui/icons-material/Contacts'

const HomePage = () => {

    return (
         <Container maxWidth='md' sx={{ textAlign: 'center'}}>
             <NavLink to="/currencyconvertor"><MonetizationOnIcon /> Currency Converter</NavLink>
             {' | '}
             <NavLink to="/about" style = {{marginRight: 10}}><InfoIcon /> About</NavLink>
             {' | '}
             <NavLink to="/contact" style = {{marginLeft: 10}}><ContactsIcon /> Contact</NavLink>
             <h1>Welcome to My Website</h1>
        </Container>   
   )    
}

export default HomePage