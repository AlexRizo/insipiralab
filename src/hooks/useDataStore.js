import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/firebase";
import { useDispatch } from "react-redux";
import { setHomepageData } from "../store/data/homeSlice";

export const useDataStore = () => {
    const collRef = collection(FirebaseDB, 'web_content');
    const dispatch = useDispatch();

    const startLoadingData = async () => {
        const data = await getDocs(collRef)
        const { home_page } = data.docs[0].data();

        dispatch(setHomepageData(home_page));
    };
    
    return {
        // ? methods
        startLoadingData,

        // ? properties
    }
}; 