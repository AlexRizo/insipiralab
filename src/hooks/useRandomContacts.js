import { useEffect, useState } from "react";

const numbers = ['523329662312', '523319147187'];
const emails = ['ventas@inspiralab.com', 'ventas2@inspiralab.com'];

export const useRandomContacts = () => {
    const useMathRound = () => {
        return Math.round(Math.random()); // 0 o 1
    }
    
    const [phoneNumber, setPhoneNumber] = useState([]);
    const [email, setEmail] = useState([]);

    
    useEffect(() => {
        setPhoneNumber(numbers[useMathRound()]);
        setEmail(emails[useMathRound()]);
    }, []);
    
    return {
        phoneNumber,
        email
    }
};