import { collection, getDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useEffect, useState } from "react";

const numbers = [
    {
        id: 1,
        number: '1234567890'
    },
    {
        id: 2,
        number: '0987654321'
    },
    {
        id: 3,
        number: '1234567890'
    }
];

export const useFirestore = () => {
    const [phoneNumber, setPhoneNumber] = useState([]);
    const [emails, setEmails] = useState([]);

    const contacts = collection(db, 'contacts');
    
    const getPhoneNumber = async () => {
        const data = await getDocs(contacts)
        console.log(data.docs);
    };

    const getEmails = async () => {

    };

    useEffect(() => {
        getPhoneNumber();
    }, []);
    
    return {
        phoneNumber
    }
};