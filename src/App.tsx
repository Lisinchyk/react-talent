import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { useAppDispatch, useAppSelector } from "./app/hooks.ts";
import { getUserData } from "./features/user/userAPI.ts";
import { selectIsBalanceOpen } from "./features/paymentServices/paymentServicesSlice.ts";
import { Transactions } from "./modules/Transactions/Transactions.tsx";
import { PaymentMethods } from "./modules/PaymentMethods/PaymentMethods.tsx";
import { Balance } from "./modules/Balance/Balance.tsx";
import { Promo } from "./modules/Promo/Promo.tsx";
import { Layout } from "./components/Layout/Layout.tsx";
import { PageTitle } from "./components/PageTitle/PageTitle.tsx";
import Modal from "./components/Modal/Modal.tsx";
import { DESKTOP_QUERY } from "./constants.ts";
import "./App.scss";

const App = () => {
  const dispatch = useAppDispatch();
  const isDesktopOrLaptop = useMediaQuery(DESKTOP_QUERY);
  const isBalanceModuleOpen = useAppSelector(selectIsBalanceOpen);
  
  useEffect(() => {
    dispatch(getUserData());
  }, []);
  
  if (isBalanceModuleOpen && !isDesktopOrLaptop) {
    return (
      <Layout>
        <Balance />
      </Layout>
    );
  }
  
  return (
    <Layout>
      <PageTitle title="Make a Deposit" />
      <PaymentMethods />
      <Promo />
      <Transactions />
      {isDesktopOrLaptop && (
        <Modal isOpen={isBalanceModuleOpen}>
          <Balance />
        </Modal>
      )}
    </Layout>
  )
};

export default App;
