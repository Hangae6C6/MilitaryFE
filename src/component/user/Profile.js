import React from "react";
import styled from "styled-components";
import Challenges from "../../element/myuser/Challenges";
import TestResult from "../../element/myuser/TestResult";
import Mine from "../../element/myuser/Mine";

const Profile = () => {
    return (
        <>
        <Mine />
        <TestResult />
        <Challenges />
        </>
    )
}

export default Profile;