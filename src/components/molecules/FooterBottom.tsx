import Paragraph from "@components/atoms/Paragraph";

const FooterBottom = () => (
  <div className="h-[64px] bg-staticBlue flex justify-center items-center">
    <Paragraph className="text-white font-bold">
      © Copyright Finsweet {new Date().getFullYear()}
    </Paragraph>
  </div>
);
export default FooterBottom;
