import styles from "./styles.module.css";
const UserInfo = (props) => {
  return (
    <div className={styles.UserInfo}>
      <ul>
        <li>name: {props.name} </li>
        <li>Age: {props.age} </li>
        <li>Gender: {props.gender} </li>
      </ul>
    </div>
  );
};
export default UserInfo;
