function Todo() {
  return (
    <div>
      <h3 className="font-bold text-[24px]">To-do list</h3>
      <div className="text-white text-[13px]">
        <div className="w-[230px] 2xl:w-[310px] px-4 py-1 my-4 bg-[#3527D6] rounded-2xl">
          <h4>All staff meeting</h4>
          <p>11/02/2023</p>
        </div>
        <div className="w-[230px] 2xl:w-[310px] px-4 py-1 my-4 bg-[#3527D6] rounded-2xl">
          <h4>Result Collation</h4>
          <p>18/02/2023</p>
        </div>
        <div className="w-[230px] 2xl:w-[310px] px-4 py-1 my-4 bg-[#3527D6] rounded-2xl">
          <h4>PTA Meeting</h4>
          <p>20/02/2023</p>
        </div>
        <div className="w-[230px] 2xl:w-[310px] px-4 py-1 my-4 bg-[#3527D6] rounded-2xl">
          <h4>Civic Education</h4>
          <p>6 days left</p>
        </div>
        <div className="w-[230px] 2xl:w-[310px] px-4 py-1 my-4 bg-[#3527D6] rounded-2xl">
          <h4>Home Economics</h4>
          <p>7 days left</p>
        </div>
      </div>
    </div>
  );
}
export default Todo;
