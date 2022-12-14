import { Provider } from "react-redux";
import { store } from "./store";
import { NativeRouter, Route, Routes } from "react-router-native";
import { Router } from "./Component/Router/Router";
import { Layout } from "./Component/Layout/Layout";
import { View } from "react-native";
import { Authentication } from "./Component/User/Authentication/Authentication";
import { Profile } from "./Component/Pages/Profile";

export const AppContent = () => {
  return (
    <NativeRouter>
      <View>
        <Provider store={store}>
          <Layout>
            <Route path="/" element={<Router />} />
            <Route path="/authentication" element={<Authentication />} />
            <Route path="/profile" element={<Profile />} />
          </Layout>
        </Provider>
      </View>
    </NativeRouter>
  );
};
