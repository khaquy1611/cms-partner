import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ThemeSwitcherProvider } from "react-css-theme-switcher";
import "@styles/index.less";
import { PATH } from "@utils/constants/path";
import { useLocalStorage } from "@hooks/useLocalStorage";
import PublicLayout from "@components/layouts/PublicLayout";
import PrivateLayout from "@components/layouts/PrivateLayout";
import Transaction from "@views/Transaction/Transaction";
import Dashboard from "@views/Dashboard/Dashboard";
import { ConfigProvider } from "antd";
import AppLocale from "../IngProvider";
import { IntlProvider } from "react-intl";
import ForgotPassWord from "@views/ForgotPassWord/ForgotPassWord";
import Profile from "@views/Profile/Profile";
import Home from "@views/Home/Home";
import MultiStepForm from "./../views/MultiStepForm/MultiStepForm";
import OTP from "@views/OTPLogin/otp";

const queryClient = new QueryClient();

enum Locale {
  vi = "vi",
  en = "en",
}

function MainApp() {
  const [theme] = useLocalStorage("theme", "light");

  const themes = {
    dark: `${process.env.PUBLIC_URL}/dark-theme.css`,
    light: `${process.env.PUBLIC_URL}/light-theme.css`,
  };

  //change locale language
  const currentAppLocale = AppLocale[Locale.en];

  return (
    <ConfigProvider locale={currentAppLocale.antd}>
      <IntlProvider
        locale={currentAppLocale.locale}
        messages={currentAppLocale.messages}
      >
        <ThemeSwitcherProvider themeMap={themes} defaultTheme={theme}>
          <QueryClientProvider client={queryClient}>
            <BrowserRouter>
              <Routes>
                <Route
                  path={PATH.MUTISTEPFORM}
                  element={<PublicLayout children={<MultiStepForm />} />}
                />
                <Route
                  path={PATH.OTP}
                  element={<PublicLayout children={<OTP />} />}
                />
                <Route
                  path={PATH.FORGOTPASSWORD}
                  element={<PublicLayout children={<ForgotPassWord />} />}
                />
                <Route
                  path={PATH.HOME}
                  element={<PrivateLayout children={<Dashboard />} />}
                />
                <Route
                  path={PATH.TRANSACTION}
                  element={<PrivateLayout children={<Transaction />} />}
                />
                <Route
                  path={PATH.PROFILE}
                  element={<PrivateLayout children={<Profile />} />}
                />
              </Routes>
            </BrowserRouter>
          </QueryClientProvider>
        </ThemeSwitcherProvider>
      </IntlProvider>
    </ConfigProvider>
  );
}

export default MainApp;
