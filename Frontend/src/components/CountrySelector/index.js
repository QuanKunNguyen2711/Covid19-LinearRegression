import { FormControl, FormHelperText, InputLabel, NativeSelect } from '@material-ui/core';
import React from 'react'

function CountrySelector({ value, handleOnChange, countries }) {
    return (
        <FormControl>
            <InputLabel htmlFor="country-selector" shrink>Quốc gia</InputLabel>
            <NativeSelect
                value={value}
                onChange={handleOnChange}
                inputProps={{
                    name: 'country',
                    id: 'country-selector'
                }} 
            >
                {
                    countries.map(country => {
                        return <option value={country.ISO2.toLowerCase()} key={country.ISO2}>{country.Country}</option>
                    })
                }
            </NativeSelect>
            <FormHelperText>Chọn quốc gia</FormHelperText>
        </FormControl>

    )
}

export default CountrySelector
