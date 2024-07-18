import { ChangeEvent, useState } from "react";
import "./index.scss";
import { IUserData } from "../../interfaces";
import { formInputList } from "../../data";

interface IProp {
  setIsLoggedIn: (val: boolean) => void;
  userData: IUserData;
  setUserData: (user: IUserData) => void;
}

const LoginForm = ({ setIsLoggedIn, setUserData, userData }: IProp) => {
  const [inputarr, setInputArr] = useState(formInputList);

  //**HANDLERS */
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  //**RENDERS
  const renderFormInputList = formInputList.map((input, idx) => {
    return (
      <div key={idx}>
        <div className="input-wrapper">
          <label htmlFor={input.label}>{input.label} </label>
          <input
            type={input.type}
            name={input.name}
            id={input.id}
            value={userData[input.name]}
            onChange={onChangeHandler}
          />
        </div>
        <button
          style={{
            display: "flex",
            marginTop: "5px",
            padding: "0.6em 1.2em",
            color: "white",
          }}
          onClick={() => {
            const filtered = inputarr.filter(
              (input) => input.name !== formInputList[idx]["name"],
              console.log(`remove ${idx}`)
            );
            setInputArr(filtered);
          }}
        >
          ❌{idx }
        </button>
      </div>
    );
  });

  return (
    <div>
      <form
        className="login-form"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        {renderFormInputList}

        <button className="btn" onClick={() => setIsLoggedIn(true)}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
