import React, {useState, useEffect, useCallback} from 'react';

export const useInfiniteScroll = (fetchMyAPI) => {
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    },[])

    const fetchUsers = useCallback(() => {
        setIsFetching(true);
        fetchMyAPI()
    },[])

    useEffect(() => {
        fetchUsers();
    },[fetchUsers])

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) {
           return;
        }
        setIsFetching(true);
        fetchMyAPI();
        console.log("handleScroll");
    }

    return [isFetching,setIsFetching];

}