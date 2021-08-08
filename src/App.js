import { Router } from "./router/Router";
import "./styles.css";

const user = {
  name: "かんた",
  image: "https://source.unsplash.com/NE0XGVKTmcA",
  email: "1234@AudioParam.com",
  phone: "000-999-2222",
  company: {
    name: "テスト株式会社"
  },
  website: "https://google.com"
};

export default function App() {
  return <Router />;
}
