import React from 'react'
import { createContext } from 'react'
export const ResultPublish=createContext()
import StudentResults from './StudentResults'
import Faculty from './Faculty'

const COE = () => {
  return (
    <ResultPublish.Provider value={{gpa:"10 GPA" , cgpa:"10 CGPA"}}>
      <Faculty></Faculty>
      <h1>Results Published:</h1>
      <StudentResults></StudentResults>
    </ResultPublish.Provider>
  );
};

export default COE