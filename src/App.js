import * as React from "react";
import { Link } from "react-router-dom";
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
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BadgeIcon from "@mui/icons-material/Badge";
import PostAddIcon from "@mui/icons-material/PostAdd";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
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
//Ajusta o card usuario para esquerda desktop ou no centro mobile
const MenuUser = styledComponents.div`
  display:flex;
  flex-direction:row;
  justify-content:end;
  
  @media (max-width: 600px) {
     justify-content:center;
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
  //Itens menu lateral
  const ItensMenu = [
    {
      menuPai: "Carteirinha",
      subMenus: [
        { nome: "Ir para carteirinha", path: "notasFaltas", icone: BadgeIcon },
      ],
    },
    {
      menuPai: "Secretária Online",
      subMenus: [
        {
          nome: "Notas e Faltas",
          path: "NotasFaltas",
          icone: ImportContactsIcon,
        },
        { nome: "Horários", path: "notasFaltas", icone: ListAltIcon },
      ],
    },
    {
      menuPai: "Financeiro Online",
      subMenus: [
        { nome: "Financeiro", path: "notasFaltas", icone: AttachMoneyIcon },
      ],
    },
    {
      menuPai: "Requerimentos",
      subMenus: [
        {
          nome: "Secretária/Financeiro",
          path: "notasFaltas",
          icone: PostAddIcon,
        },
      ],
    },
    {
      menuPai: "Acesse também",
      subMenus: [
        {
          nome: "Vagas para Estágio",
          path: "vagasEstagio",
          icone: WorkOutlineIcon,
        },
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
          {ItensMenu.map((itemMenu) => (
            <>
              <Typography
                sx={{
                  marginLeft: 0.5,
                  fontSize: 18,
                }}
              >
                {itemMenu.menuPai}
              </Typography>
              <Divider />
              {itemMenu.subMenus.map((subMenu) => (
                <Link to={subMenu.path}>
                  <a
                    href={subMenu.path}
                    key={subMenu.nome}
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    <ListItem
                      key={subMenu.nome}
                      disablePadding
                      style={{ margin: 5 }}
                    >
                      <ListItemButton>
                        <ListItemIcon>
                          {<subMenu.icone></subMenu.icone>}
                        </ListItemIcon>
                        <ListItemText primary={subMenu.nome} />
                      </ListItemButton>
                    </ListItem>
                  </a>
                </Link>
              ))}
            </>
          ))}
        </List>
        <Divider />
      </Drawer>
      {/* <DrawerHeader /> */}
      <Main open={open}>
        <MenuUser>
          <User />
        </MenuUser>
        {props.children}
      </Main>
    </Box>
  );
}

export default withRouter(App);
