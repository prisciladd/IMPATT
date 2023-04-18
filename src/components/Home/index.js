import React from "react";
import styled from "styled-components";

const Styles= styled.div`

body{
    background-color: #eeeded;
}

.home{
    display:flex;
}

.mural{
    width: 40vw;
    
}

.banner{
    width: 40vw;
    
}

img{
    width:550px;
    margin-left:10px;
}

ul{
    list-style-type: none;
    padding:0px;
}

li{
    margin-bottom:3px;
    padding:5px;
    background-color: #ffad39;
}

li:nth-child(n+4){
    
    background-color: #e1e1e1;
}

p{
    font-weight: bold ;
}

h4 {
    font-weight: bold;
    font-size: 26px;
    font-family: 'Calibri';
    color: #002953;
}
`;

const Home = () =>{
    return(
        <Styles>
        <div className="home">
            
            
        </div>
        </Styles>
 
    );

}

export default Home;