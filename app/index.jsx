import { Redirect } from "expo-router";

export default function Index() {
  // As of now, it redirects to Home screen when Index screen is loaded.
  return <Redirect href="/home" />;
}
