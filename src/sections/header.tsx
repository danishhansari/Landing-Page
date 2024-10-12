import ArrowRight from "@/assets/arrow-right.svg";
export const Header = () => {
  return (
    <>
      <div className='flex items-center justify-center py-3 text-white bg-black text-sm'>
        <p>Get started for free</p>
        <ArrowRight className="h-4 w-4 inline-flex justify-center items-center"/>
      </div>
    </>
  );
};
