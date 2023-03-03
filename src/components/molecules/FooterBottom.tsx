import Paragraph from "@components/atoms/Paragraph";

const FooterBottom = () => {
  return (
    <div className="h-[64px] bg-staticBlue flex justify-center items-center">
      <Paragraph className="text-white font-bold">
        © Copyright Finsweet 2021
      </Paragraph>
    </div>
  );
};

export default FooterBottom;
