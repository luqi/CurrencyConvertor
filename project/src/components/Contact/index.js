import { useEffect } from 'react'
import { NavLink } from "react-router-dom"
import Container from '@mui/material/Container'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'
import InfoIcon from '@mui/icons-material/Info'
import ContactsIcon from '@mui/icons-material/Contacts'
import HomeIcon from '@mui/icons-material/Home'
import EmailIcon from '@mui/icons-material/Email'
   
const Contact = () => {
  useEffect(() => {
    document.title = "Contact";  
  }, []);
    return (
      <Container maxWidth='md' sx={{ textAlign: 'center'}}>
      <NavLink to="/" style = {{marginRight: 10}}><HomeIcon /> Home</NavLink>
      {' | '}
      <NavLink to="/currencyconvertor"><MonetizationOnIcon /> Currency Converter</NavLink>
      {' | '}
      <NavLink to="/about" style = {{marginRight: 10}}><InfoIcon /> About</NavLink>
      {' | '}
      <NavLink to="/contact" style = {{marginLeft: 10}}><ContactsIcon /> Contact</NavLink>
      
      <p><a href = "mailto: abc@example.com"><EmailIcon /> abc@example.com</a></p>
     </Container> 
      )
  }
  
  export default Contact