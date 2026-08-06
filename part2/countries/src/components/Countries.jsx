import CountryDetail from "./CountryDetail";

const Countries = ({
    countries,
    setSelectedCountry,
    selectedCountry
}) => {
    const handle_show = (country) => {
        console.log(country)
        setSelectedCountry(country)
    }

    console.log(countries)
    if (!countries) {
        return null
    }
    else if (countries.length >10) {
        return <div>Too many matches, specify another filter</div>
    }
    else if (countries.length >1) {
        return (<div>
                {countries.map((c) => 
                    (<div key={c.name.common}>
                        {c.name.common}  
                        <button onClick={() => handle_show(c)}>Show</button>
                        </div>))}
                    {selectedCountry ? (<CountryDetail country={selectedCountry}/>) 
                        :null}
                        
                    
                </div>
                
    )}
    else if (countries.length ===1) {
        return (
            <CountryDetail 
                country={countries[0]}/>)
    }
}

export default Countries