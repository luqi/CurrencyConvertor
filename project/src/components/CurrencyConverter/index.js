import {useState, useEffect} from 'react'
import { Outlet, useNavigate, NavLink} from 'react-router-dom'
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'
import InfoIcon from '@mui/icons-material/Info'
import ContactsIcon from '@mui/icons-material/Contacts'
import HomeIcon from '@mui/icons-material/Home'



const API_KEY = process.env.REACT_APP_Currency_Converter_API_KEY

const CurrencyConverter = () => {
    const [sourceCurrencyList, setSourceCurrencyList] = useState([])
    const [targetCurrencyList, setTargetCurrencyList] = useState([])
    const [sourceCurrency, setSourceCurrency] = useState('')
    const [targetCurrency, setTargetCurrency] = useState('')
    const [amount, setAmount] = useState()
    const navigate = useNavigate()

    const fetchCurrencyList = () => {
        fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/codes`)
          .then(response => response.json())
          .then(data => {
            setSourceCurrencyList(data.supported_codes); setTargetCurrencyList(data.supported_codes)
          })
          .catch(error => {
            console.error('Opps, something went wrong');
          })
      }
      useEffect(() => {
        document.title = "Currency Converter";  
      }, []);
      useEffect(() => {
        fetchCurrencyList()
        // eslint-disable-next-line
      }, [])

      const handleInputChange = (e) => {
        setAmount(e.target.value)
      }

      const handleSubmit = (e) => {
		e.preventDefault()
		navigate(`result/${sourceCurrency}/${targetCurrency}/${amount}`)
	}



    return (
        <Container maxWidth='md' sx={{ textAlign: 'center'}}>
            <Container maxWidth='md' sx={{ textAlign: 'center'}}>
            <NavLink to="/" style = {{marginRight: 10}}><HomeIcon /> Home</NavLink>
            {' | '}
             <NavLink to="/currencyconvertor"><MonetizationOnIcon /> Currency Converter</NavLink>
             {' | '}
             <NavLink to="/about" style = {{marginRight: 10}}><InfoIcon /> About</NavLink>
             {' | '}
             <NavLink to="/contact" style = {{marginLeft: 10}}><ContactsIcon /> Contact</NavLink>
        </Container>  
            <h1>Currency Converter</h1>
            <form onSubmit={handleSubmit}>
                <Stack direction='row'
					alignItems='center'
					justifyContent='center'
					spacing={2}
                >
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={sourceCurrencyList}
                        // getOptionLabel={(currencyList) => currencyList[0]}
                        onChange={(event, newValue) => {
                            setSourceCurrency(newValue[0]);
                          }}
                        // value = {sourceCurrency}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="From Currency" />}
                    />
                    <TextField id="outlined-basic" label="From Amount" variant="outlined" value={amount} type ='number' min='1' onChange={(e) => handleInputChange(e)} required/>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={targetCurrencyList}
                        // getOptionLabel={(currencyList) => currencyList[0]}
                        onChange={(event, newValue) => {
                            setTargetCurrency(newValue[0]);
                          }}
                        // value = {targetCurrency}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="To Currency" />}
                    />
                <Button type='submit' variant="outlined">Convert</Button>
            </Stack>
            </form>
            <Outlet />
        </Container>
    )
}

export default CurrencyConverter
