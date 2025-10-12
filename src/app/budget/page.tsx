"use client";

import Footer from "./../components/footer";
import Header from "./../components/header";
import BudgetOverview from "../components/budget-overview";

export default function Budget() {

  return (
    <div>
      <Header/>
      <main className="flex flex-row justify-center-safe gap-[32px] row-start-2 items-center">
        <div className="flex-col">
            <BudgetOverview/>
        </div>
        <div className="flex-col">
            //
        </div>
      </main>
      <Footer/>
    </div>
  );
}
