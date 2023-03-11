import * as React from "react";
import Layout from "../../components/commons/Layout";
import Filters from "../../components/Filters";
import ItemList from "../../components/ItemList";

interface IMainProps { }

const Main = ({ }: IMainProps) => {
  return (
    <Layout>
      <Filters />
      <ItemList />
    </Layout>
  );
};

export default Main