import "./ItemMenu.css";

const ItemMenu = (props) => {
  return (
    <div className="itemMenu">
      <ul>
        <a href={props.path}>{props.name}</a>
      </ul>
    </div>
  );
};

export default ItemMenu;
