import React from "react";
import styled from "styled-components";
import Challenges from "../../element/myuser/Challenges";
import TestResult from "../../element/myuser/TestResult";
import Mine from "../../element/myuser/Mine";
import EditBtn from "../../element/myuser/EditBtn";

const Profile = () => {
    return (
        <>
        <Mine />
        <EditBtn>수정하기</EditBtn>
        <TestResult />
        <Challenges />
        </>
    )
}

export default Profile;