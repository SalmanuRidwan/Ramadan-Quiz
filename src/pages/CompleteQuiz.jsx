import React from "react";
import like from "../assets/like.png";
const CompleteQuiz = () => {
  console.log(localStorage.getItem("incorrectAnswersCount"));
  console.log(localStorage.getItem("correctAnswersCount"));
  console.log(localStorage.getItem("score"));
  console.log(localStorage.getItem("totalQ"));
  return (
    <main className="font-custom2 bg-mainbg p-2 w-full ">
      <section className="text-center p-1 bg-whiteish rounded-[16px] shadow-md w-[98%] mt-[100px] mx-auto text-black">
        <img className="mx-auto mt-[-90px]" src={like} alt="like" />
        <h1 className="mb-3 mt-[-15px] text-[36px] font-700">Masha Allah</h1>
        <div className="bg-mainbg text-whiteish py-2 px-5 mb-5 rounded-[16px] font-600 inline-block">
          <h1 className="text-[48px]">{localStorage.getItem("score")}</h1>
          <span>Your Score</span>
        </div>
        <div className="flex justify-center space-x-2 mb-8">
          <div className="bg-secondary font-600 p-4 rounded-[8px] text-whiteish">
            <h1 className="text-[24px]">{localStorage.getItem("totalQ")}</h1>
            <span>Questions</span>
          </div>
          <div className="bg-primary font-600 p-4 rounded-[8px] text-whiteish">
            <h1 className="text-[24px]">
              {localStorage.getItem("correctAnswersCount")}
            </h1>
            <span>Correct</span>
          </div>
          <div className="bg-redish font-600 p-4 rounded-[8px] text-whiteish">
            <h1 className="text-[24px]">
              {localStorage.getItem("incorrectAnswersCount")}
            </h1>
            <span>Incorrect</span>
          </div>
        </div>
        <button className="block text-[24px] mx-auto border-[#646161] border-[2px] shadow-md px-[24px] py-[8px] rounded-[8px] mb-5">
          Leader board
        </button>
        <button className="block text-[24px] mx-auto border-[#646161] border-[2px] shadow-md px-[24px] py-[8px] rounded-[8px] mb-10">
          Share with Friend
        </button>
      </section>
      <button className="block mx-auto bg-whiteish text-black px-[130px] my-10 py-[8px] text-[24px] rounded-[8px]">
        Exit
      </button>
    </main>
  );
};

export default CompleteQuiz;
