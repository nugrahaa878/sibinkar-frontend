import { PersonnelProvider } from "../PersonnelContext";

interface Props {
  children: React.ReactNode;
}

const ContextProvider = ({ children }: Props) => {
  return (
    <PersonnelProvider>
      {/* Add another context below, this is will be the wrapper for global context. */}
      {children}
    </PersonnelProvider>
  );
};

export default ContextProvider;
