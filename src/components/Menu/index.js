
import ItemMenu from "./ItemMenu";
import './Menu.css'



function Menu() {
    return (
        <section className="menu">
            <h4>Acesso Rápido</h4>
            <ItemMenu name='Secretária Online' />
            <ItemMenu name='Atividades Complementares' />
            <ItemMenu name='Requerimentos (Secretária/Financeiro)' />
        </section>
    );
  }
  
  export default Menu;
  