import { Menu } from "@sa/components";

const MainLayout = ({children}) => {

  return (
    <div >
      <Menu />
      {children}
      <div>feed</div>
    </div>
  );
};

export default MainLayout;
