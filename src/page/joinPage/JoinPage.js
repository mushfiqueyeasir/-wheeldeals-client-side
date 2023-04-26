import React from "react";
import Join from "../../components/join/Join";
import UserAuth from "../../auth/userAuth";

const JoinPage = () => {
  return (
    <UserAuth>
      <section className="">
        <div className="bg-[#141414] mt-[-4.5rem] h-[100px]"></div>
        <Join />
      </section>
    </UserAuth>
  );
};

export default JoinPage;
