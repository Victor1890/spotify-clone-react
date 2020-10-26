import React, { createContext, Fragment, useContext, useReducer } from "react";

export const DataLayerContext = createContext();

export const DataLayer = ({ initialState, reduce, children }) => {
  return (
    <Fragment>
      <DataLayerContext.Provider value={useReducer(reduce, initialState)}>
        {children}
      </DataLayerContext.Provider>
    </Fragment>
  );
};

export const useDataLayerValue = () => useContext(DataLayerContext);
