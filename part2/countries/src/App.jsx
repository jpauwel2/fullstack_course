import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import countryService from './services/countries'
import Countries from './components/Countries'

const App = () => {
  const [countries, setCountries] = useState([])
  const [searchCountry, setSearchCountry] = useState('')
  const [selectedCountry, setSelectedCountry] = useState('')

  useEffect(() => {
      const fetchCountries = async () => {
        try {
          const data = await countryService.getAll()
          setCountries(data)
        } catch (error) {
          console.error(error)
        }
      }
      fetchCountries()
      
    }
    ,[])

  const filteredCountries = countries.filter(c => c.name.common.toLowerCase().includes(searchCountry.toLowerCase()))

  return (
    <div>
      <Filter searchCountry={searchCountry}
              setSearchCountry={setSearchCountry}
              setSelectedCountry={setSelectedCountry}/>
      <Countries countries={filteredCountries}
              setSelectedCountry={setSelectedCountry}
              selectedCountry={selectedCountry}/>
    </div>
  )

}

export default App