import type { NextPage } from 'next';
import Head from 'next/head';
import Dyanmic from "next/dynamic"

import FlowWithProvider from '@/components/Flow/BasicNode2';
import BasicFlow from "@/components/Flow/BasicNode"
import OverviewFlow from "@/components/Flow2/Main"


const Home: NextPage = () => {
  return (
    <div className="h-screen w-screen">
      <BasicFlow />
    </div>
  );
};

export default Home;