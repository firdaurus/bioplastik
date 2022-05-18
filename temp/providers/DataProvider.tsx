import React from 'react'

const defaultValues = {
    data: {
        genus: '',
        nilai: 0,
    },
    setDataState: () => {}
}

export const DataContext = React.createContext(defaultValues)
export const useData = () => React.useContext(DataContext)

export default function DataProvider({ children }) {
    
    const [data, _setData] = React.useState(defaultValues.data)

    const setData = (newState) => _setData(state => {
        return {
            ...state,
            ...newState
        }
    })
    return <DataContext.Provider value={{data, setData}}>
        {children}
    </DataContext.Provider>
}
