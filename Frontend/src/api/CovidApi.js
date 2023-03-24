import axiosClient from "./axiosClient";

const CovidApi = {
    getCountries: () => {
        const url = '/countries';
        return axiosClient.get(url);
    },
    getReportByCountry: (country) => {
        const url = `/dayone/country/${country}`;
        return axiosClient.get(url);
    }

}

export default CovidApi;