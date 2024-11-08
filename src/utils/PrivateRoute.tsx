import { ReactNode } from "react";
import { Navigate, useParams } from "react-router";
import { useAppSelector } from "./appHooks";

interface IPrivateRoute {
  component: ReactNode;
}

const PrivateRoute = ({ component }: IPrivateRoute) => {
  const { index } = useParams<{ index: string }>();
  const authed = useAppSelector((state) => state.floor.value[+index!]);

  try {
    if (!authed) throw new Error("404 redirect");
    return component;
  } catch (err) {
    console.log(err);
    return <Navigate to={"/forbidden"} />;
  }
};

export default PrivateRoute;
