import ItemMenu from "./ItemMenu";
import "./Menu.css";

function Menu() {
  return (
    <section className="menu">
      <h4>Acesso Rápido</h4>
      <ItemMenu path={"/notas-faltas"} name="Secretaria Online" />
      <ItemMenu path={"/notas-faltas"} name="Notas e faltas" />
      <ItemMenu path={"/notas-faltas"} name="Atividades Complementares" />
      <ItemMenu
        root={"/notas-faltas"}
        name="Requerimentos (Secretaria/Financeiro)"
      />
    </section>
  );
}

export default Menu;
