const CountryInfo = ({name, capital, area}) => {
    return (<div>
        <h1>{name}</h1>
        <div>Capital {capital}</div>
        <div>Area {area}</div>
    </div>)
}

export default CountryInfo