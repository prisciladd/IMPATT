import "./ItemMenu.css";

const ItemMenu = (props) => {
  return (
    <div className="itemMenu">
      <ul>
        <li>
        <a href={props.path}>{props.name}</a>
        </li>
      </ul>
    </div>
  );
};

export default ItemMenu;
