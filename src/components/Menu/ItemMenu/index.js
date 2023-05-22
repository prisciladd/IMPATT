import styled from "styled-components";
import {  List } from "../../../styles/BoxStyles";

const Styles= styled.div`

  ul {
    border-left:1px solid #002953;
    border-bottom:1px solid gray;
    list-style-type: none;
  }
   
  a {
    padding:10px;
  }
`;


const ItemMenu = (props) => {
  return (
    <Styles>
      <div className="itemMenu">
        <List>
          <li>
            <a href={props.path}>{props.name}</a>
          </li>
        </List>
      </div>
    </Styles>
  );
};

export default ItemMenu;
