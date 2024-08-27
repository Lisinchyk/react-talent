import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks.ts";
import { getUserData } from "./features/user/userAPI.ts";
import { Layout } from "./components/Layout/Layout.tsx";
import { PageTitle } from "./components/PageTitle/PageTitle.tsx";
import { Transactions } from "./modules/Transactions/Transactions.tsx";
import { PaymentMethods } from "./modules/PaymentMethods/PaymentMethods.tsx";
import { Promo } from "./modules/Promo/Promo.tsx";
import { selectIsBalanceOpen } from "./features/paymentServices/paymentServicesSlice.ts";
import { Balance } from "./modules/Balance/Balance.tsx";

import "./App.scss";

const App = () => {
  const dispatch = useAppDispatch();
  const isBalanceModuleOpen = useAppSelector(selectIsBalanceOpen);
  
  useEffect(() => {
    dispatch(getUserData());
  }, []);
  
  if (isBalanceModuleOpen) {
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
    </Layout>
  )
};

export default App;
