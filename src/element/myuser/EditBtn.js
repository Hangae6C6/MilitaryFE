import React, { useState } from 'react';
import styled from 'styled-components';
import {history} from '../../redux/configureStore'

const EditBtn = ({children}) => {
    const [userInfo, setUserInfo] = useState({
        nickname:'',
        password:'',
        passwordCheck:'',
    })

    return (
        <div>
            <EditButton>{children}</EditButton>
        </div>
    );
};

const EditButton = styled.div`
width: 100%;
height:50px;
background-color: #212121;
color:#ffffff;
text-align: center;
vertical-align: middle;
margin: 1px;
box-sizing: border-box;
`


export default EditBtn;