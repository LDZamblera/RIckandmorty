import { useState } from "react";
import {
  Container,
  FormStyle,
  Input,
  Label,
  ButtonLogin,
  DivStyle,
} from "./styles";
import { validation } from "./validation";
import Img from "../../assets/rickandmorty.png";

export const Form = ({ login, loginError }) => {
  const [userData, setUserData] = useState({ username: "", password: "" });
  const [load, setLoad] = useState(false);
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });
  const handleInputChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validation({
        ...userData,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoad(true);
    setTimeout(() => {
      login(userData);
      setLoad(false);
    }, 3000);
  };
  return (
    <Container>
      <FormStyle onSubmit={handleSubmit}>
        <img
          src={Img}
          alt="Rick and Morty"
          style={{
            position: "absolute",
            width: "260px",
            top: "-13px",
          }}
        />
        <DivStyle>
          <Input
            autoComplete="off"
            value={userData.username}
            required
            type="email"
            name="username"
            onChange={handleInputChange}
          />
          <Label>Email</Label>
          {errors.username && <p className="danger">{errors.username}</p>}
        </DivStyle>
        <DivStyle>
          <Input
            value={userData.password}
            required
            type="password"
            name="password"
            onChange={handleInputChange}
          />
          <Label>Password</Label>
          {errors.password && <p className="danger">{errors.password}</p>}
        </DivStyle>
        <ButtonLogin type="submit" className={load && "loading"}>
          {!load ? "Log in" : <div></div>}
        </ButtonLogin>
        {loginError && (
          <p style={{ color: "#ef4444" }}>
            The email or password entered is not correct
          </p>
        )}
      </FormStyle>
    </Container>
  );
};
