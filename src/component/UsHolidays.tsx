import React,{ useEffect, useState } from 'react'
import axios from 'axios';
import { api_url } from '../api_link';

interface apiProps{
    name:string;
    date:string;
    countryCode:string;
}

const UsHolidays = () => {
    const [apiData, setApiData] = useState<apiProps[]>();
    
    //* start when component render
    useEffect(() => {
        fetchedApiData();
    }, []);

    //! fetched api data
    const fetchedApiData = () => {
        axios.get(api_url)
        .then((response) => {
            setApiData(response.data);
            console.log(response.data);
        })
        .catch((error) => {
            console.error("Somthing went Wrong ", error)
        })
    }

  return (
    <>
    {apiData && apiData.length > 0 && (
        <h2>Public Holidays {apiData[0].countryCode}</h2>
    )}

    <table>
        <header>
            <tr>
                <td>Date</td>
                <td>Holiday Type</td>
            </tr>
        </header>
        <tbody>
            {apiData?.map((info, index) => (
                <tr key={index}>
                    <td>{info.date}</td>
                    <td>{info.name}</td>
                </tr>
            ))}
        </tbody>
    </table>

    </>
  )
}

export default UsHolidays