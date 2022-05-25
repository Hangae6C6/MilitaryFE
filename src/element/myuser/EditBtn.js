import React from 'react';
import styled from 'styled-components';

const EditBtn = ({children}) => {


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