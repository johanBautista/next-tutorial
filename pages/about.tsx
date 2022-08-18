import Link from "next/link";
import { useRouter } from "next/router";
import PageLayout from "../components/PageLayout";

const about = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  return (
    <PageLayout title="AppNext-about">
      <div>
        <p>holaaaa!</p>
        <Link href="/">Ir Home</Link>
      </div>
      {/* Navegacion con boton solo debe usarse cuando el usuario raliza un form para lod emas usar Link */}
      <button onClick={() => router.push("/article/id")}>navegacion erronea</button>
    </PageLayout>
  )
};

export default about;
