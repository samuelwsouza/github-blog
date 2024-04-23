import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Posts } from "./pages/Posts";
import { PostInfo } from "./pages/PostInfo";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Posts />} />
        <Route path="/postinfo" element={<PostInfo />} />
      </Route>
    </Routes>
  );
}
