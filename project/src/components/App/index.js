import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../HomePage'
import CssBaseline from '@mui/material/CssBaseline'
import CurrencyConverter from '../CurrencyConverter'
import {useEffect} from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CurrencyConversionResult from '../CurrencyConversionResult'
import About from '../About'
import Contact from '../Contact'


function App() {
  useEffect(() => {
    document.title = "Home Page";  
  }, []);
  return (
    <BrowserRouter>
      <CssBaseline />
      <Routes>
          <Route path='*' element={<p>Page not found</p>} />
          <Route path='/' element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/currencyconvertor' element={<CurrencyConverter />}>
            <Route index element = {<p>Enter search here</p>} />
            <Route path='result/:sourceCurrency/:targetCurrency/:amount' element = {<CurrencyConversionResult />} />
          </Route>
      </Routes>
  </BrowserRouter>
  )
  }

  



export default App
