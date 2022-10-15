import { Provider } from "react-redux";
import { store } from "./store";
import { NativeRouter, Route, Routes } from "react-router-native";
import { Router } from "./Component/Router/Router";
import { Layout } from "./Component/Layout/Layout";
import { View } from "react-native";

export const AppContent = () => {
  return (
    <NativeRouter>
      <View>
        <Provider store={store}>
          <Layout>
            <Routes>
              <Route index path="/" element={<Router />} />
            </Routes>
          </Layout>
        </Provider>
      </View>
    </NativeRouter>
  );
};
