const CountryLanguages = ({languages}) => {
    return (
        <div>
            <h2>Languages</h2>
            {languages.map(l => (
                <li key={l}>{l}</li>
            ))}
        </div>
    )
}

export default CountryLanguages