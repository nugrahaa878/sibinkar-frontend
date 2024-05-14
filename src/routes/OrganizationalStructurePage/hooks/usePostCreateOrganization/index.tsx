import axiosClient from "@/networks/apiClient";

interface Props {
  organizationName: string;
  name: string;
  position: string;
}

const usePostCreateOrganization = async ({
  organizationName,
  name,
  position,
}: Props) => {
  const data = {
    namaOrganisasi: organizationName,
    nama: name,
    jabatan: position,
  };

  const response = await axiosClient.post("/organization/", data);
  return response.data.success || true;
};

export default usePostCreateOrganization;
