import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import styled from "styled-components";

// import * as React from "react";
// import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

// import ItemMenu from "./ItemMenu";
// import { useState } from "react";
//import styled from "styled-components";
// import { BoxTitle, BoxText, List, BoxSmall } from "../../pages/Home/HomeStyles";

// //estilo em texto
// import Typography from "@material-ui/core/Typography";

// /// NOVO
// import * as React from "react";
// import Button from "@mui/material/Button";
// import ClickAwayListener from "@mui/material/ClickAwayListener";
// import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
// import Popper from "@mui/material/Popper";
// import MenuItem from "@mui/material/MenuItem";
// import MenuList from "@mui/material/MenuList";
//import Stack from "@mui/material/Stack";

const StyledDiv = styled.div`
  /* @media (max-width:600px){

    #menu-vertical_all menu-expand{
        width:40%;
        display:flex;
        flex-wrap: wrap;
    }

}
    position:absolute;
    width:20%;
    color: #002953;
    background-color: #EFEEEE;

    h4 {
        font-weight: bold;
        font-size: 26px;
        font-family: 'Calibri';
        color: #002953;
        padding-left:15px;
    }

    */
`;

// function Menu() {
//   const [open, setOpen] = React.useState(false);
//   const anchorRef = React.useRef(null);

//   const handleToggle = () => {
//     setOpen((prevOpen) => !prevOpen);
//   };

//   const handleClose = (event) => {
//     if (anchorRef.current && anchorRef.current.contains(event.target)) {
//       return;
//     }

//     setOpen(false);
//   };

//   function handleListKeyDown(event) {
//     if (event.key === "Tab") {
//       event.preventDefault();
//       setOpen(false);
//     } else if (event.key === "Escape") {
//       setOpen(false);
//     }
//   }

//   // return focus to the button when we transitioned from !open -> open
//   const prevOpen = React.useRef(open);
//   React.useEffect(() => {
//     if (prevOpen.current === true && open === false) {
//       anchorRef.current.focus();
//     }

//     prevOpen.current = open;
//   }, [open]);
//   return (
//     <StyledDiv>
//       <Stack direction="row" spacing={2}>
//         <Paper>
//           <MenuList>
//             <MenuItem>Profile</MenuItem>
//             <MenuItem>My account</MenuItem>
//             <MenuItem>Logout</MenuItem>
//           </MenuList>
//         </Paper>
//         <div>
//           <Button
//             ref={anchorRef}
//             id="composition-button"
//             aria-controls={open ? "composition-menu" : undefined}
//             aria-expanded={open ? "true" : undefined}
//             aria-haspopup="true"
//             onClick={handleToggle}
//           >
//             Dashboard
//           </Button>
//           <Popper
//             open={open}
//             anchorEl={anchorRef.current}
//             role={undefined}
//             placement="bottom-start"
//             transition
//             disablePortal
//           >
//             {({ TransitionProps, placement }) => (
//               <Grow
//                 {...TransitionProps}
//                 style={{
//                   transformOrigin:
//                     placement === "bottom-start" ? "left top" : "left bottom",
//                 }}
//               >
//                 <Paper>
//                   <ClickAwayListener onClickAway={handleClose}>
//                     <MenuList
//                       autoFocusItem={open}
//                       id="composition-menu"
//                       aria-labelledby="composition-button"
//                       onKeyDown={handleListKeyDown}
//                     >
//                       <MenuItem onClick={handleClose}>Profile</MenuItem>
//                       <MenuItem onClick={handleClose}>My account</MenuItem>
//                       <MenuItem onClick={handleClose}>Logout</MenuItem>
//                     </MenuList>
//                   </ClickAwayListener>
//                 </Paper>
//               </Grow>
//             )}
//           </Popper>
//         </div>
//       </Stack>
//     </StyledDiv>
//   );
// }

// export default Menu;

// export default function MenuPopupState() {
//   return (
//     <Paper>
//       <PopupState variant="popover" popupId="demo-popup-menu">
//         {(popupState) => (
//           <React.Fragment>
//             <Button variant="contained" {...bindTrigger(popupState)}>
//               Carterinha
//             </Button>
//             <Menu {...bindMenu(popupState)}>
//               <MenuItem onClick={popupState.close}>Profile</MenuItem>
//               <MenuItem onClick={popupState.close}>My account</MenuItem>
//               <MenuItem onClick={popupState.close}>Logout</MenuItem>
//             </Menu>
//           </React.Fragment>
//         )}
//       </PopupState>
//       <PopupState variant="popover" popupId="demo-popup-menu">
//         {(popupState) => (
//           <React.Fragment>
//             <Button variant="contained" {...bindTrigger(popupState)}>
//               Secretaria
//             </Button>
//             <Menu {...bindMenu(popupState)}>
//               <MenuItem onClick={popupState.close}>oi</MenuItem>
//               <MenuItem onClick={popupState.close}>a account</MenuItem>
//               <MenuItem onClick={popupState.close}>s</MenuItem>
//             </Menu>
//           </React.Fragment>
//         )}
//       </PopupState>
//     </Paper>
//   );
// }

const MenuStyle = styled.div`
  @media (max-width: 600px) {
    margin-top: 30%;
  }

  margin-top: 10%;
`;

export default function MenuMobile() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <MenuStyle>
      <div>
        {["Menu"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    </MenuStyle>
  );
}
