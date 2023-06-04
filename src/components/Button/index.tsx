import {NextPage} from "next";

type Props = {
  children: React.ReactNode
}
const Button: NextPage<Props> = ({children}) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default Button;