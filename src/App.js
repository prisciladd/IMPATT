import * as React from "react";
//componentes MUI
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import styledComponents from "styled-components";
//icones
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
//componentes interno
import { withRouter } from "react-router-dom";
import User from "./components/User";

const drawerWidth = 240;

// Responsavel pela barra superior
const ToolbarStyle = styledComponents.div`
  background-image: url("./logoHeader2.png");
  background-color: #505050;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 80px;

  @media (max-width: 600px) {
    background-color: #002953;
    width: 100%;
    height: 80px;
  }
`;

//responsavel pelo conteudo do meio da pagina
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    overflowX: "hidden", // evita scroll lateral quando aberto em celular
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export function App(props) {
  //Itens menu
  const ItensMenu = [
    { nome: "Notas e Faltas", path: "notasFaltas", icone: ImportContactsIcon },
    { nome: "Notas e Faltas", path: "notasFaltas", icone: InboxIcon },
    { nome: "Notas e Faltas", path: "notasFaltas", icone: InboxIcon },
    { nome: "Notas e Faltas", path: "notasFaltas", icone: InboxIcon },
  ];
  const ItensMenu2 = [
    {
      menuPai: "Carteirinha",
      subMenus: [
        { nome: "Ir para carteirinha", path: "notasFaltas", icone: InboxIcon },
      ],
    },
    {
      menuPai: "Secretária Online",
      subMenus: [
        { nome: "Notas e Faltas", path: "notasFaltas", icone: InboxIcon },
        { nome: "Horários", path: "notasFaltas", icone: InboxIcon },
      ],
    },
    {
      menuPai: "Financeiro Online",
      subMenus: [
        { nome: "Financeiro", path: "notasFaltas", icone: InboxIcon },
        { nome: "Horários", path: "notasFaltas", icone: InboxIcon },
      ],
    },
  ];
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <ToolbarStyle>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            {/* <Typography variant="h6" noWrap component="div">
            Persistent drawer
          </Typography> */}
          </Toolbar>
        </ToolbarStyle>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>

        <List>
          {ItensMenu2.map((itemMenu) => (
            <>
              <Typography>{itemMenu.menuPai}</Typography>
              <Divider />
              {itemMenu.subMenus.map((subMenu) => (
                <a href={subMenu.path} key={subMenu.nome}>
                  <ListItem key={subMenu.nome} disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        {<subMenu.icone></subMenu.icone>}
                      </ListItemIcon>
                      <ListItemText primary={subMenu.nome} />
                    </ListItemButton>
                  </ListItem>
                </a>
              ))}
            </>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <User />
        {props.children}
      </Main>
    </Box>
  );
}

export default withRouter(App);
