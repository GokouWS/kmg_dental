import ContainerSection from "./ContainerSection";
import FormBooking from "./FormBooking";

export default function SectionForm() {
  return (
    <section className="max-h-form-max hidden md:flex flex-col text-left items-center justify-center h-[11vh] bg-primary-dark-grey">
      <ContainerSection>
        <div className="w-full space-y-[15px]">
          <p className="">Book your FREE consultation</p>
          <FormBooking />
        </div>
      </ContainerSection>
    </section>
  );
}
// 6fd1a69
