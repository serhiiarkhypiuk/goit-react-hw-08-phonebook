import LogInForm from "../../components/Forms/LogInForm/LogInForm";
import {useSelector} from "react-redux";
import {authSelectors} from "../../redux/auth";
import UserMenu from "../../components/AppBar/Menu/Menu";

const HomePage = () => {
  const userName = useSelector(authSelectors.getUserName);

  return (
    <>
      {!userName
        ? <LogInForm/>
        : <UserMenu />
      }
    </>
  )
};

export default HomePage;
