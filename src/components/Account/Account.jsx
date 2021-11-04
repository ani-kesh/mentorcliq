import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {getProgramUsers} from "../../services/program.services";

export default function Account(){
    const history = useHistory();

    useEffect(() => {
        const path = history.location.pathname;
        const userId = path.replace("/account/", "");
        getProgramUsers(userId);
      }, []);


    return "ssasa"
}