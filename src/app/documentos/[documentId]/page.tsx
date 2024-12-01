interface DocumentIdPageProps {
  params: Promise<{ documentId: string }>;
};

const DocumentIdPage = async ({ params }: DocumentIdPageProps) => {
  const { documentId } = await params;

  return (
    <div>
      ID de Documento: {documentId}
    </div>
  );
};

export default DocumentIdPage;