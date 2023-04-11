import ItemMenu from "./ItemMenu";
import "./Menu.css";

function Menu() {
  return (
    <section className="menu">
      <h4>Acesso Rápido</h4>
      <ItemMenu name="Secretaria Online" />
      <ItemMenu name="Atividades Complementares" />
      <ItemMenu name="Requerimentos (Secretaria/Financeiro)" />
    </section>
  );
}

export default Menu;
