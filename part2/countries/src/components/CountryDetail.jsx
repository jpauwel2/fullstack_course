import CountryInfo from "./CountryInfo"
import CountryLanguages from "./CountryLanguages"
import CountryFlag from "./CountryFlag"

const CountryDetail = ({country}) => {
    console.log(country)
    return (<div>
        <CountryInfo 
            name={country.name.common}
            capital={country.capital[0]}
            area={country.area}
        />
        <CountryLanguages 
            languages={Object.values(country.languages)}
        />
        <br />
        <CountryFlag
            imageurl={country.flags.png}
        />
    </div>)
}

export default CountryDetail