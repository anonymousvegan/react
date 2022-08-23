import { Outlet, Route, Routes } from "react-router-dom";
import About from "./About";
import Contacts from "./Contacts";
import Home from "./Home";
import Page404 from "./Page404";
import Team from "./Team";
import Users from "./Users";
import User from "./User";
import Product from "./Product";
import Settings from "./Seetings";
import Invoice from "./Invoices/Invoice";
import Invoices from "./Invoices";
import SentInvoices from "./Invoices/SentInvoices";
const RouterPage = (props) => {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/users" element={<Users />} />
        <Route path="/user" element={<User />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/about" element={<About />} />

        <Route path="/settings" element={<Settings />}>
          <Route index element={<p>nesto</p>} />
          <Route path="general" element={<p>general</p>} />
          <Route path="user" element={<p>user</p>} />
          <Route path="messages" element={<p>messages</p>} />
        </Route>
        <Route path="invoices" element={<Invoices />}>
        <Route path=":invoiceId" element={<Invoice />} />
        <Route path="sent" element={<SentInvoices />} />
      </Route>
        <Route path="*" element={<Page404 />} /> */}
        <Route index element ={<Cards />} />
        <Route path="invoices" element={<Invoices />} />
        <Route path=":invoiceId" element={<Invoice />} />
        <Route path="sent" element={<SentInvoices />} />
      </Routes>
    </div>
  );
};
export default RouterPage;
