import React, { Children } from 'react';
import { Navigate } from 'react-router';

const EditChapter = ({children}) => {
    let user=JSON.parse(localStorage.getItem("user"))
  if(user.role==1 || user.role==2){
    return children
  }
  return <Navigate to={"/"}/>
}

export default EditChapter;