import RootLayout from "@/components/Layouts/RootLayout";

function PcBuilderPage() {
  return (
    <div>
      <h1>pc builder page</h1>
    </div>
  );
}

export default PcBuilderPage;

PcBuilderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
