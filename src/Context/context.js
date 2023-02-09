import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";
import { Reducer, ACTION } from "./reducer";

export const DataContext = React.createContext();

const initialState = {
    data:"",
    loading: false,
    error: false,
};

export function DataProvider ({ children }) {

    const [state, dispatch] = useReducer(Reducer, initialState);
    let [mainTags, setMainTags] = useState({});
    let [tags, setTags] = useState({});


    const fetchData = async (selectTags) => {
        try {
            dispatch({type: ACTION.CALL_API});
            let response = await axios.get("https://aws-polymer-search-clone.onrender.com/api/repo", {params: selectTags});
            dispatch({ type: ACTION.SUCCESS, payload: response.data});
        } catch (error) {
            dispatch({type: ACTION.ERROR});
        }
    };

    const setTagMain = (paramsObj) => {
        let params = { ...paramsObj };

        setMainTags({ ...params });
        console.log(mainTags, paramsObj, params);
        for (let key in params) {
        params[key] = params[key].join(",");
        }
        fetchData(params);
    };

    useEffect(() => {
        fetchData({});
    }, []);

    return (
        <>
            <DataContext.Provider
                value={{
                data: state.data,
                loading: state.loading,
                error: state.error,
                setTagMain,
                mainTags: mainTags,
                tags: tags,
                setTags,
                }}
            >
                {children}
            </DataContext.Provider>
        </>
    );
};