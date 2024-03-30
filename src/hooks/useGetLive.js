import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllLive } from '../store/Actions/livTvAction';

const useGetLive = () => {
    const dispatch = useDispatch();
    const {livTv} = useSelector(state => state.livTv);
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (value) => {
        setActiveTab(value);
    };

    let liveData = []
    try {
        if(livTv.livetv) {
            liveData = livTv.livetv
        } else {
            liveData =[]
        }
    } catch(err) {}

    useEffect(() => {
        dispatch(getAllLive())
    }, [])

    return [
        liveData,
        activeTab,
        handleTabClick,
    ]
}

export default useGetLive
