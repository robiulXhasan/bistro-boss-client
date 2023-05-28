const SectionHeading = ({ heading, subHeading }) => {
  return (
    <div className="text-center w-1/4 mx-auto space-y-1 my-10">
      <p className="text-[#D99904]">---{subHeading}---</p>
      <div className="divider"></div>
      <h1 className="text-4xl">{heading}</h1>
      <div className="divider"></div>
    </div>
  );
};

export default SectionHeading;
