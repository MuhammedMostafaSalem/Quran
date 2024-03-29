import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTafasir } from "../store/Actions/tafasirAction";

const useGetTafsir = () => {
    const dispatch = useDispatch();
    const {tafasir} = useSelector(state => state.tafsir);
    const [selectedSurah, setSelectedSurah] = useState('');

    let tafasirData = []
    try {
        if(tafasir.tafasir) {
            tafasirData = tafasir.tafasir
        } else {
            tafasirData =[]
        }
    } catch(err) {}
    
    let soarData = []
    try {
        if(tafasirData.soar) {
            soarData = tafasirData.soar
        } else {
            soarData =[]
        }
    } catch(err) {}

    const onClickSurah = (click) => {
        setSelectedSurah(click)
    }
    
    useEffect(() => {
        dispatch(getAllTafasir());
    }, [])

    return [
        tafasirData,
        soarData,
        selectedSurah,
        onClickSurah,
    ]
}

export default useGetTafsir
