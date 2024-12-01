import Link from "next/link";

const Home = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      Haz click <Link href="/documentos/123"><span className="text-blue-500 underline">&nbsp;aquí&nbsp;</span></Link> para ir al ID del documento
    </div>
  );
};

export default Home;