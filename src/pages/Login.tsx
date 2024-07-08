import { Button } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const { register, handleSubmit } = useForm({
  //   defaultValues: {
  //     userId: "A-0001",
  //     password: "admin123",
  //   },
  // });

  
  const [login] = useLoginMutation();
  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    // const tostId = toast.loading("logging in...");
    // try {
    //   const userInfo = {
    //     id: data.userId,
    //     password: data.password,
    //   };
    //   const res = await login(userInfo).unwrap();
    //   const user = verifyToken(res.data.accessToken) as TUser;
    //   // console.log(user);
    //   dispatch(setUser({ user, token: res.data.accessToken }));
    //   toast.success("Login successful", { id: tostId, duration: 2000 });
    //   navigate(`/${user.role}/dashboard`);
    // } catch (error) {
    //   toast.error("something went wrong.", { id: tostId, duration: 2000 });
    // }
  };
  return (
    <PHForm onSubmit={onSubmit}>
      <div>
        <PHInput type="text" name="userId" label="ID" />
      </div>
      <div>
        {/* <label htmlFor="password">Password: </label> */}
        <PHInput type="text" name="password" label="Password" />

        {/* <input type="text" id="password" {...register("password")} /> */}
      </div>
      <Button htmlType="submit">Login</Button>
    </PHForm>
  );
};

export default Login;
