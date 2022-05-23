import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Challenges from "../../element/myuser/Challenges";
import Mine from "../../element/myuser/Mine";

const Profile = () => {

    return (
        <>
        <Mine />
        <Challenges />
        </>
    )
}

export default Profile;